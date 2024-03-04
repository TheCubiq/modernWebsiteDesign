<script>
  import { fade } from "svelte/transition";

  export let board;
</script>

<svg
  out:fade
  width="100%"
  height="100%"
  viewBox={`0 0 ${board.boardSize} ${board.boardSize}`}
  xmlns="http://www.w3.org/2000/svg"
  fill="black"
>
  {#each board.boardPoints as boardCol}
    {#each boardCol as point}
      <circle r=".1" cx={point.x} cy={point.y} />
    {/each}
  {/each}
</svg>

<style>
  svg {
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: 0.5;
  }
</style>
