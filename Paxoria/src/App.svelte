<script>
  import Inner from "./lib/Inner.svelte";
  import Futurama from "./lib/pages/Futurama.svelte";
  import StarWars from "./lib/pages/StarWars.svelte";
  import Simpsons from "./lib/pages/Simpsons.svelte";

  import { AnimatePresence } from "svelte-motion";
  import Stairs from "./lib/Stairs.svelte";
  import Curve from "./lib/Curve.svelte";
  import { fade, fly } from "svelte/transition";
  import StairsNative from "./lib/StairsNative.svelte";
  import { flip } from "svelte/animate";
  import { onMount } from "svelte";
  import { quintInOut } from "svelte/easing";

  let page = "Simpsons";

  const pages = {
    Simpsons,
    Futurama,
    StarWars,
  };

  const sections = [
    "Works",
    "F37",
    "Nomad",
    "DeepMind",
    "Notice",
    "Easings",
    "Want",
    "Koto",
    "OnSite",
    "10x",
    "Follow",
    "Photographs",
    "Thread",
    // "SuperHi",
    // "Nonagrams",
    // "IO",
    // "Kindeo",
    // "INT",
    // "Airbnb",
    // "Google",
    // "Archive",
  ];

  const repeatArray = (arr, times) => {
    let result = [];
    for (let i = 0; i < times; i++) {
      result = result.concat(arr);
    }
    return result;
  };

  const intervalDelay = 2000;
  let counter = 0;

  const transitionBase = (i) => {
    return {
      duration: 1000,
      delay: i * 50,
      easing: quintInOut,
    };
  };

  onMount(() => {
    const interval = setInterval(() => {
      // counter = counter + Math.floor(((Math.random() - 0.5) * 2) * 2);
      counter = counter + 2;
    }, intervalDelay);

    return () => clearInterval(interval);
  });
</script>

<main>
  <!-- <nav>
    {#each Object.entries(pages) as [key], i}
      <button on:click={() => (page = key)}>{key}</button>
    {/each}
  </nav> -->

  <nav class="entries">
    {#each sections as section, i (i + counter)}
      <span
        animate:flip={{
          ...transitionBase(i + 5),
        }}
        out:fly={{ x: -100, ...transitionBase(i) }}
        in:fly={{ x: -100, ...transitionBase(i + 5) }}
        >{sections[(i + counter) % sections.length]}</span
      >
    {/each}
  </nav>

  <!-- {#key page}
    <StairsNative nbOfColumns={10}>
      <article>
        <svelte:component this={pages[page]} />
      </article>
    </StairsNative>
  {/key} -->
</main>

<style>
  main {
    flex: 1;
    place-items: center;
    /* max-height: 100vh; */

    background-color: var(--clr-bg);
  }

  /* main nav {
    position: sticky;
    top: 0;
    margin-block: 3em;
  } */

  nav.entries {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    font-size: 2.5rem;
  }

  article {
    text-align: justify;
    max-width: 50rem;
    margin: 0 auto;
    padding: 1rem;
  }
</style>
