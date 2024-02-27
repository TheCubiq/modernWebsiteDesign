<script>
  import { onMount } from "svelte";
  import Board from "./lib/Board.svelte";


  let loaded = false;

  onMount(() => {
    // tiny delay
    setTimeout(() => {
      loaded = true;
    }, 300);
  });

</script>
<main>
  {#if loaded}
    <Board />
  {/if}
</main>

<style>
  main {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;  

    padding: 2rem;

    filter:blur(1px) contrast(3) invert(var(--dark-mode));
    transition: filter 0.5s linear;
    isolation: isolate;
    background: white;

  }
</style>
