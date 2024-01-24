<script>
  import { cubicInOut, elasticIn } from "svelte/easing";
  import { fly } from "svelte/transition";

  export let nbOfColumns = 5;

  let showInStairs

  function stairsIn(
    node,
    { duration = 300, i = 0, easing = cubicInOut } = {}
  ) {

    return {
      delay: duration + i * 500,
      duration,
      easing,
      css: (t, u) => `top: ${t * 100}%; height: ${u < 1? 100 : 0}%;`,
    };
  }

  function stairsOut(
    node,
    { duration = 300, easing = cubicInOut, i = 0 } = {},
  ) {
    return {
      delay: i * 100,
      duration,
      easing,
      css: (t, u) => `top: 0; height: ${u*100}%;`,
    };
  }

</script>

<div class="transition-container">
  {#each Array(nbOfColumns) as _, i}
    <aside
      in:stairsIn|global={{ duration: 1000, i }}
      out:stairsOut|global={{ duration: 1000, i }}
    ></aside>
  {/each}
</div>
<slot />

<style>
  .transition-container {
    position: fixed;

    height: 100vh;
    width: 100vw;

    left: 0;
    top: 0;
    pointer-events: none;

    flex-direction: row-reverse;

    /* opacity: 0.3; */

    display: flex;
  }

  /* aside.background {
    position: fixed;

    height: 100vh;
    width: 100vw;

    left: 0;
    top: 0;
    pointer-events: none;
    background-color: black;
  } */

  .transition-container > aside {
    position: relative;
    width: 100%;
    background-color: rgb(0, 0, 0);
    
    height: 100%;
    top: 100%;

  }
</style>
