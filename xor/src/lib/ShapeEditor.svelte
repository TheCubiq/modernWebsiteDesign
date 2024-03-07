<script>
  import { onDestroy, onMount } from "svelte";
  import Shape from "./Shape.svelte";
  import { ShapeEditorBoard } from "./objects";
  import { Download, Minus, Plus } from "lucide-svelte";
  import { writable } from "svelte/store";
  import ShapePreview from "./ShapePreview.svelte";
  import { flip } from "svelte/animate";
  import { fade } from "svelte/transition";
  import { editorSkins } from "./skins";

  export let isOpen = false;

  export let board;

  export let blockSize = 1;

  export let editor;

  let editor$ = null;
  let points = writable([]);
  let removeMode = false;

  const unsubscribe = editor.subscribe((value) => {
    editor$ = value;
  });

  const createSkin = (points) => {
    return {
      origin: { x: 0.5, y: 0.5 },
      path: points.map((point) => point.pos) || [],
    };
  };

  $: editorButtons = [
    {
      icon: Minus,
      action: () => {
        removeMode = editor$.toggleRemoveMode();
      },
    },
    {
      icon: Plus,
      action: () => {
        editor$.addPoint({ x: 8, y: 8 });
      },
      cond: !removeMode,
    },
  ].filter((button) => button.cond === undefined || button.cond);

  $: repetitiveProps = {
    id: -1,
    boardPoints: board.boardPoints,
    blockSize,
    hidden:!isOpen,
  }

  $: shapesToRender = [
    {
      points : $points,
      skin: editorSkins.cross,
      shake: removeMode,
    },
    {
      points : [editor$?.originPoint],
      skin: editorSkins.poly,
    },
    {
      points : [editor$?.startPoint],
      skin: editorSkins.triangle,
    },
  ]

  onDestroy(() => {
    unsubscribe();
  });

  
  onMount(() => {
    $editor = new ShapeEditorBoard();

    editor$.addButton({
      icon: Download,
      action: () => {
        console.log("ExportSkin: " + editor$.getJSON());
      },
    });

    points = editor$.shapePoints$
  });

</script>

{#each shapesToRender as shape}
  {#each shape.points as point}
    <Shape
      {...repetitiveProps}
      shapeSkin={shape.skin}
      shape={point}
      shake={shape.shake}
    />
  {/each}
{/each}

{#if isOpen}
  <ShapePreview
    shapePos={{ x: 0.5, y: 0.5 }}
    shapeSkin={createSkin($points)}
    zoom={1}
  />

  <nav>
    <!-- <button>test</button> -->
    {#each editorButtons as button (button.icon)}
      <button animate:flip transition:fade|global on:click={button.action}>
        <svelte:component this={button.icon} color="black" size="1em" />
      </button>
    {/each}
  </nav>
{/if}

<style>
  nav {
    position: fixed;
    inset: 2rem;
    bottom: unset;
    display: flex;
    justify-content: center;
  }
  button {
    display: flex;
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 4rem;
    color: black;
  }
</style>
