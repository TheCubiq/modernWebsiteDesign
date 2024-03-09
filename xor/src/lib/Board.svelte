<script>
  import { onMount } from "svelte";
  import Shape from "./Shape.svelte";
  import { fade } from "svelte/transition";
  import { writable } from "svelte/store";

  import BoardGrid from "./BoardGrid.svelte";

  import { BOARD_SIZE, DEV, DB_LOCAL } from "./constants";
  import { skins as localSkinStorage } from "./skins";
  import {
    ChevronRight,
    ChevronLeft,
    Download,
    Waypoints,
    PenLine,
    Plus,
    Minus,
    RefreshCw,
  } from "lucide-svelte";
  import ShapeEditor from "./ShapeEditor.svelte";
  import { Board } from "./objects";
  import { flip } from "svelte/animate";
  import { levels as localLevelStorage } from "./levels";
  import ShapePicker from "./ShapePicker.svelte";
  import { loadLevelCount, loadLevelFromDB, loadSkins, nameSkins } from "./helperFunctions";
  import LevelPicker from "./LevelPicker.svelte";
  import { levels, skins } from "./stores";
  import LevelPreview from "./LevelPreview.svelte";

  let levelId = 0;

  let shapeEditor = false;

  let boardEditor = false;

  let boardDimensions;
  $: blockSize = boardDimensions ? boardDimensions[0].blockSize : 0;

  const board = new Board(BOARD_SIZE);

  $: boardShapes = board.boardShapes$;
  $: levelCompleted = board.levelCompleted$;

  let removeMode = false;

  let boardFinal = [];

  const loadLevel = async (lid) => {
      levelId = lid
      const newLevel = await loadLevelFromDB(lid);
      $levelCompleted = false;
      board.setupLevel(newLevel, lid);
      boardFinal = board.final;
  };

  const updateDb = async () => {
    // clear the local cache
    $levels = {};

    if (DB_LOCAL) {
      $skins = nameSkins(localSkinStorage);
      totalLevels = localLevelStorage.length;
    } else {
      totalLevels = await loadLevelCount();
      $skins = await loadSkins();
    }
    if (DEV) {
      console.log(
        `Local levels: ${DB_LOCAL? "yes" : "no"}\n` +
        `Level: ${levelId + 1} / ${totalLevels}\n`+
        `Skins: ${Object.keys($skins).length}`
      );
    }
  };

  let totalLevels = 0;

  const nextLevel = (next = 1) => {
    const lid = (levelId + next + totalLevels) % totalLevels;
    loadLevel(lid);
  };

  $: navButtons = [
    {
      icon: ChevronLeft,
      action: () => nextLevel(-1),
      cond: !(shapeEditor || boardEditor),
    },
    {
      icon: ChevronRight,
      action: () => nextLevel(),
      cond: !(shapeEditor || boardEditor),
    },
    {
      icon: RefreshCw,
      action: () => {
        updateDb();
      },
      cond: DEV && !(shapeEditor || boardEditor),
    },
    ...((DEV && shapeEditor && $editor?.actionButtons) || []),
    {
      icon: Waypoints,
      action: () => (shapeEditor = !shapeEditor),
      cond: DEV && !boardEditor,
    },
    {
      icon: Plus,
      action: () => (skinInputShown = !skinInputShown),
      cond: DEV && boardEditor && !removeMode,
    },

    {
      icon: Minus,
      action: () => (removeMode = board.toggleRemoveMode()),
      cond: DEV && boardEditor,
    },
    {
      icon: Download,
      action: () => board.checkBoardState(null, true),
      cond: DEV && boardEditor && !removeMode,
    },
    {
      icon: PenLine,
      action: () => (boardEditor = board.toggleEditBoard()),
      cond: DEV && !shapeEditor && !removeMode,
    },
  ].filter((button) => button.cond === undefined || button.cond);

  const editor = writable(null);

  onMount(async () => {
    await updateDb();
    levelId = 0;
    loadLevel(levelId);
  });

  let modalValue = "square";
  let skinInputShown = false;
</script>

<span class:active={$levelCompleted}>{levelId + 1}/{totalLevels}</span>

<div
  class="preview"
  style:--board-size={board.boardSize}
  class:completed={$levelCompleted}
>
  {#if !(shapeEditor || boardEditor)}
    {#key levelId}
      <LevelPreview level={boardFinal} />
    {/key}
  {/if}
</div>
<div
  in:fade|global={{ duration: 500 }}
  class="board"
  bind:borderBoxSize={boardDimensions}
  class:completed={$levelCompleted}
  style:--board-size={board.boardSize}
>
  {#if boardEditor}
    <ShapePicker {board} skinsStorage={$skins} />
  {/if}

  {#if !$levelCompleted}
    {#each $boardShapes as shape (shape.uniqueId)}
      <Shape
        introDelay={boardEditor ? -1 : shape.id}
        boardPoints={board.boardPoints}
        {blockSize}
        shapeSkin={shape.loadSkin()}
        {shape}
        hidden={shapeEditor}
        shake={removeMode}
      />
    {/each}
    <BoardGrid {board} />

    {#if DEV}
      <ShapeEditor {board} isOpen={shapeEditor} {blockSize} {editor} />
    {/if}
  {/if}
</div>

{#if $levelCompleted || DEV}
  <LevelPicker {loadLevel} />
{/if}

<nav>
  {#if skinInputShown}
    <form
      on:submit|preventDefault={() => {
        board.addShape(modalValue);
        skinInputShown = false;
      }}
    >
      <input bind:value={modalValue} placeholder="shapeName" />
    </form>
  {/if}
  {#each navButtons as button (button.icon)}
    <button
      transition:fade
      on:click={button.action}
      class:dev={DEV}
      class:active={$levelCompleted}
      animate:flip
    >
      <svelte:component this={button.icon} color="black" size="1em" />
    </button>
  {/each}
</nav>

<style>
  .board {
    width: 100%;
    max-width: 36rem;
    aspect-ratio: 1;

    border-radius: 99em;
    border: 2px solid rgb(0, 0, 0);

    position: relative;
    transition-property: border, max-width;
    transition-duration: 2s, 1s;
  }

  .preview {
    -webkit-tap-highlight-color: transparent;

    user-select: none;
    aspect-ratio: 1;
    width: 35%;
    max-width: 12rem;
    /* background: rgb(255, 255, 255); */
    /* border-radius: 99em; */
    /* border: 2px solid rgb(0, 0, 0);  */

    position: relative;

    transition: 1.5s;
  }
  .preview.completed {
    background: black;
    border-radius: 99em;
    cursor: pointer;
  }

  .preview.completed:active {
    transform: scale(1.1);
    transition: 0.3s;
  }

  .board.completed {
    /* transition: 2s 2s; */
    transition-duration: 2s, 1s;
    transition-delay: 0s, 1.5s;
    border-color: transparent;
    max-width: 0em;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 1em;
    margin-block: 1em;
  }

  button {
    display: flex;
    background: white;
    border: none;
    cursor: pointer;
    font-size: 4rem;

    pointer-events: none;
    opacity: 0;
    transition: 1s;
  }

  span {
    color: #000b;
    font-size: 3rem;
    position: fixed;
    bottom: 1em;
    opacity: 0;
    transition: 1s;
  }

  span.active {
    opacity: 1;
    transition-delay: 1.5s;
  }

  button.active,
  button.dev {
    pointer-events: all;
    opacity: 1;
    transition-delay: 1.5s;
  }

  :global(main:has(.dev) button:hover) {
    transform: scale(0.8);
    transition-duration: 0.15s;
  }

  .dev {
    transition-delay: 0s !important;
  }

  form {
    position: fixed;
    inset: 2em;
    top: unset;
    display: flex;
    justify-content: center;
  }

  form input {
    font-size: 3rem;
    filter: invert(var(--dark-mode));
    text-align: center;
    flex: 1;
    min-width: 0;
    max-width: 32rem;
  }
</style>
