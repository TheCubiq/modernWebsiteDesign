<script>
  import { fade, fly } from "svelte/transition";
  import ShapePreview from "./ShapePreview.svelte";
  // import { skins } from "./skins";

  export let skinsStorage = {};

  export let board;
  export let blockSize = "";
</script>

<div 
  class="skinPicker"
  transition:fly={{ y: -100, duration: 1000 }}
  >
   {#each Object.keys(skinsStorage) as skin}
   <button
    on:click={() => {
      board.addShape(skin);
    }}
   >
     <ShapePreview 
     zoom={2}
     shapePos={{ x: 8, y: 8 }} 
     shapeSkin={skinsStorage[skin]} 
     />
    </button>
  {/each}
</div>

<style>
  .skinPicker {
    position: fixed;
    inset: 2em;
    bottom: unset;
    background: rgb(255, 255, 255);
    height: 11rem;

    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 7rem;

    align-items: center;
    border: #000000 2px solid;
    overflow: auto;
    padding-inline-start: 2em;
    border-radius: 3em;
    transform: none !important;

    --_dot-offset: 17%;
    --_dot-size: 1.8em;
    background-image: radial-gradient(#000000a3 var(--_dot-offset), rgba(255, 255, 255, 0) var(--_dot-offset));
    background-size: var(--_dot-size) var(--_dot-size);
  }

  .skinPicker > button {
    all: unset;
    display: flex;
    height: 100%;
    max-width: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 1;
  }
  
  :global(.skinPicker > button > div) {
    position: static;
    width: 1em;
    height: 1em;
    mix-blend-mode: normal;
    color: black;
  }

</style>
