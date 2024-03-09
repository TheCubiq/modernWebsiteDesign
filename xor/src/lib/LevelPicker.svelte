<script>
  import { fade } from "svelte/transition";
  // import { levels as localLevelStorage } from "./levels";
  import LevelPreview from "./LevelPreview.svelte";
  import { levels } from "./stores";
  import { onDestroy } from "svelte";

  export let loadLevel;

  // export let localLevelStorage 
  
  // $: localLevelStorage = $levels

  let localLevelStorage
  const unsubscribe = levels.subscribe((value) => {
    localLevelStorage = value;
  });

  const selectLevel = (levelId) => {
    console.log("selectLevel", levelId)
    levelPickerOpen = false;
    loadLevel(levelId);
  };

  $: levelsArray = Object.keys(localLevelStorage)
  .map((level) => localLevelStorage[level])
  .sort((a, b) => a.levelId - b.levelId);
  
  

  let levelPickerOpen = false;

  const toggleLevelPicker = () => (levelPickerOpen = !levelPickerOpen);

  onDestroy(() => {
    unsubscribe();
  });
</script>

<button transition:fade class="levelsToggle" on:click={toggleLevelPicker} />

{#if levelPickerOpen}
  <div transition:fade class="levelPicker">
    {#each levelsArray as level, i}
      <button on:click={() => selectLevel(level.levelId)}>
        <LevelPreview level={level.final} />
      </button>
    {/each}
    {#if levelsArray.length === 0}
      <p>No cached levels</p>
    {/if}
  </div>
{/if}

<style>
  .levelsToggle {
    background-color: #000000;
    border: none;
    aspect-ratio: 1;
    width: 3rem;
    position: fixed;
    top: 0;
    left: 0;
    margin: 2em;
    border-radius: 99em;
    cursor: pointer;
    z-index: 999999999; /* a lot xd */
  }

  .levelPicker {
    z-index: 999999998;
    position: fixed;
    /* inset: 0; */

    inset-inline: 0;

    background-color: white;
    box-shadow: 7px 4px 1px 2000px white;

    display: flex;
    align-items: center;

    gap: 1em;

    padding: 1em;
    border-radius: 99em;
    border: 2px solid black;

    font-size: 3rem;

    overflow: hidden;
    overflow-x: auto;

    max-width: 50rem;
    margin-inline: auto;
  }

  .levelPicker button {
    font-size: inherit;
    background-color: #000000;
    color: white;
    border: none;
    aspect-ratio: 1;
    height: 3em;
    border-radius: 99em;
    cursor: pointer;

    position: relative;

    isolation: isolate;
  }

  p { 
    color: black;
  }

</style>
