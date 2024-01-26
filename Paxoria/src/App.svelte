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
  import InfiniteScroller from "./lib/infiniteScroller.svelte";

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
    // "Want",
    // "Koto",
    // "OnSite",
    // "10x",
    // "Follow",
    // "Photographs",
    // "Thread",
    // "SuperHi",
    // "Nonagrams",
    // "IO",
    // "Kindeo",
    // "INT",
    // "Airbnb",
    // "Google",
    // "Archive",
  ];

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
  <nav class="entries">
  <InfiniteScroller let:dup={count}>
    {#each sections as section}
      <a
        href="#"
        on:click={() => {
          page = section;
        }}
        class="entry"
      >
        {section}-{count}
      </a>
    {/each} 
  </InfiniteScroller>
  {page}
  </nav> 
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
    height: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr;

    padding: 1em;

    /* overflow: hidden; */

    font-size: 2.5rem;
  }

  .entries a {
    text-decoration: none;
    color: var(--clr-text);
  }

  article {
    text-align: justify;
    max-width: 50rem;
    margin: 0 auto;
    padding: 1rem;
  }
</style>
