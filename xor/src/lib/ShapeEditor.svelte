<script>
  import { onMount } from "svelte";
  import Shape from "./Shape.svelte";
  import { ShapeEditorBoard } from "./objects";
  import { DEV } from "./constants";
  import {
    Download,
    Minus,
    Plus,
  } from "lucide-svelte";
  import { writable } from "svelte/store";
  import ShapePreview from "./ShapePreview.svelte";
  import { flip } from "svelte/animate";
  import { fade } from "svelte/transition";

  export let isOpen = false;

  export let board;

  export let blockSize = 1;

  export let editor;

  const editorCross = {
    origin: { x: 0.5, y: 0.5 },
    path: [
      { x: 0.46, y: 0.21 },
      { x: 0.54, y: 0.21 },
      { x: 0.54, y: 0.46 },
      { x: 0.79, y: 0.46 },
      { x: 0.79, y: 0.54 },
      { x: 0.54, y: 0.54 },
      { x: 0.54, y: 0.79 },
      { x: 0.46, y: 0.79 },
      { x: 0.46, y: 0.54 },
      { x: 0.21, y: 0.54 },
      { x: 0.21, y: 0.46 },
      { x: 0.46, y: 0.46 },
    ],
  };

  const editorPoly = {
    origin: { x: 0.5, y: 0.5 },
    path: [
      { x: 0.46, y: 0.21 },
      { x: 0.54, y: 0.21 },
      // { x: 0.54, y: 0.46 },
      { x: 0.79, y: 0.46 },
      { x: 0.79, y: 0.54 },
      // { x: 0.54, y: 0.54 },
      { x: 0.54, y: 0.79 },
      { x: 0.46, y: 0.79 },
      // { x: 0.46, y: 0.54 },
      { x: 0.21, y: 0.54 },
      { x: 0.21, y: 0.46 },
      // { x: 0.46, y: 0.46 },
    ],
  };
  const editorTriangle = {
    origin: { x: 0.5, y: 0.5 },
    path: [
      { x: 0.46, y: 0.21 },
      { x: 0.54, y: 0.21 },
      // { x: 0.54, y: 0.46 },
      // { x: 0.79, y: 0.46 },
      // { x: 0.79, y: 0.54 },
      { x: 0.54, y: 0.54 },
      // { x: 0.54, y: 0.79 },
      // { x: 0.46, y: 0.79 },
      // { x: 0.46, y: 0.54 },
      { x: 0.21, y: 0.54 },
      { x: 0.21, y: 0.46 },
      // { x: 0.46, y: 0.46 },
    ],
  };

  let editor$ = null;

  $: points = editor$?.shapePoints$ || writable([]);

  $: originPoint = editor$?.originPoint || null;
  $: startPoint = editor$?.startPoint || null;

  const unsubscribe = editor.subscribe((value) => {
    editor$ = value;
  });

  // let removeMode = false;
  const removeMode = writable(false);

  $: editorButtons = [
    {
      icon: Minus,
      action: () => {
        $removeMode = editor$.toggleRemoveMode();
      },
    },
    {
      icon: Plus,
      action: () => {
        editor$.addPoint({ x: 8, y: 8 });
      },
      cond: !$removeMode,
    },
  ].filter((button) => button.cond === undefined || button.cond);

  onMount(() => {
    $editor = new ShapeEditorBoard();

    editor$.addButton({
      icon: Download,
      action: () => {
        console.log("ExportSkin: " + editor$.getJSON($points));
      },
    });
  });

  const createSkin = (points) => {
    return {
      origin: { x: 0.5, y: 0.5 },
      path: points.map((point) => point.pos) || [],
    };
  };
</script>

{#each $points as point}
  <Shape
    id={-1}
    shapePos={point.pos}
    boardPoints={board.boardPoints}
    {blockSize}
    shapeSkin={editorCross}
    shape={point}
    hidden={!isOpen}
    shake={$removeMode}
  />
{/each}

<!-- origin -->
{#if originPoint}
  <Shape
    id={-1}
    shapePos={originPoint.pos}
    boardPoints={board.boardPoints}
    {blockSize}
    shapeSkin={editorPoly}
    shape={originPoint}
    hidden={!isOpen}
  />
  <Shape
    id={-1}
    shapePos={startPoint.pos}
    boardPoints={board.boardPoints}
    {blockSize}
    shapeSkin={editorTriangle}
    shape={startPoint}
    hidden={!isOpen}
  />
{/if}

{#if isOpen}
  <ShapePreview
    shapePos={{ x: 0.5, y: 0.5 }}
    shapeSkin={createSkin($points)}
    zoom={1}
  />

  <nav>
    <!-- <button>test</button> -->
    {#each editorButtons as button (button.icon)}
      <button animate:flip transition:fade on:click={button.action}>
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
