<script>
  import { onMount } from "svelte";
  import Shape from "./Shape.svelte";
  import { fade } from "svelte/transition";
  import { writable } from "svelte/store";
  import PocketBase from "pocketbase";

  import BoardGrid from "./BoardGrid.svelte";
  import ShapePreview from "./ShapePreview.svelte";

  import { BOARD_SIZE, DEV } from "./constants";
  import { skins } from "./objects";
  import {
    ChevronRight,
    ChevronLeft,
    Download,
    Waypoints,
  } from "lucide-svelte";
  import ShapeEditor from "./ShapeEditor.svelte";
  import { Board } from "./objects";
  import { flip } from "svelte/animate";

  const pb = new PocketBase("https://db.cubiq.dev/");

  let levelId = 0;

  let shapeEditor = false;

  let boardDimensions;
  $: blockSize = boardDimensions ? boardDimensions[0].blockSize : 0;

  const board = new Board(BOARD_SIZE);

  $: boardShapes = board.boardShapes$;
  $: levelCompleted = board.levelCompleted$;

  let boardFinal = [];

  const getLevelCount = async () => {
    const list = await pb
      .collection("levels")
      .getList(1, 1)
      .catch((e) => console.error(e));
    const { totalItems } = list || { totalItems: 0 };
    return totalItems;
  };

  const loadLevel = async (levelId) => {
    pb.collection("levels")
      .getFirstListItem("levelId=" + levelId)
      .then((result) => {
        $levelCompleted = false;
        board.setupLevel(result, levelId);
        boardFinal = board.final;
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const loadSkins = async () => {
    try {
      const list = await pb.collection("skins").getFullList();
      const items = list.map(({ skin, path, origin }) => ({
        [skin]: { path, origin },
      }));
      $skins = Object.assign({}, ...items);
    } catch (e) {
      console.error(e);
    }
  };

  let totalLevels = 0;

  const nextLevel = (next = 1) => {
    // levelId += next;
    levelId = (levelId + next + totalLevels) % totalLevels;
    loadLevel(levelId);
  };

  $: navButtons = [
    {
      icon: ChevronLeft,
      action: () => nextLevel(-1),
      cond: !shapeEditor,
    },
    {
      icon: ChevronRight,
      action: () => nextLevel(),
      cond: !shapeEditor,
    },
    {
      icon: Download,
      action: () => board.checkBoardState(true),
      cond: DEV && !shapeEditor,
    },
    {
      icon: Waypoints,
      action: () => (shapeEditor = !shapeEditor),
      cond: DEV,
    },

    ...((DEV && shapeEditor && $editor?.actionButtons) || []),
  ].filter((button) => button.cond === undefined || button.cond);

  const editor = writable(null);

  onMount(async () => {
    loadSkins();
    totalLevels = await getLevelCount();
    levelId = 0;
    loadLevel(levelId);
  });
</script>

<span class:active={$levelCompleted}>{levelId + 1}/{totalLevels}</span>

<div
  class="preview"
  style:--board-size={board.boardSize}
  class:completed={$levelCompleted}
>
  {#if !shapeEditor}
    {#key levelId}
      {#each boardFinal as shape, i (i)}
        <ShapePreview shapePos={shape.pos} shapeSkin={shape.loadSkin()} />
      {/each}
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
  {#if !$levelCompleted}
    {#each $boardShapes as shape (shape.id)}
      <Shape
        id={shape.id}
        shapePos={shape.pos}
        boardPoints={board.boardPoints}
        {blockSize}
        shapeSkin={shape.loadSkin()}
        {shape}
        hidden={shapeEditor}
      />
    {/each}
    <BoardGrid {board} />

    {#if DEV}
      <ShapeEditor {board} isOpen={shapeEditor} {blockSize} {editor} />
    {/if}
  {/if}
</div>

<nav>
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
    transform: scale(.8);
    transition-duration: .15s;
  }




  .dev {
    transition-delay: 0s  !important;
  }
</style>
