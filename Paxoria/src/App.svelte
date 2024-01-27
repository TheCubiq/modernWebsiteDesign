<script>
  import Inner from "./lib/Inner.svelte";
  import Futurama from "./lib/pages/Futurama.svelte";
  import StarWars from "./lib/pages/StarWars.svelte";
  import Simpsons from "./lib/pages/Simpsons.svelte";

  import { AnimatePresence } from "svelte-motion";
  import Stairs from "./lib/Stairs.svelte";
  import Curve from "./lib/Curve.svelte";
  import { crossfade, fade, fly } from "svelte/transition";
  import StairsNative from "./lib/StairsNative.svelte";
  import { flip } from "svelte/animate";
  import { onMount } from "svelte";
  import { quintInOut } from "svelte/easing";
  import InfiniteScroller from "./lib/infiniteScroller.svelte";

  import { selectedIndex } from "./lib/stores";

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
    // "Notice",
    // "Easings",
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

  const transitionBase = (i) => {
    return {
      duration: 1000,
      delay: i * 50,
      easing: quintInOut,
    };
  };

  let counter = 0;

  let previousId = 0;

  onMount(() => {
    const interval = setInterval(() => {
      // counter = counter + 1;
    }, 1000);

    return () => clearInterval(interval);
  });

  // const scrollArray = (arr, offset) => {
  //   const newArr = [...arr];

  //   const len = arr.length;
  //   // Calculate the effective offset to handle negative values and offsets larger than array length
  //   const effectiveOffset = ((offset % len) + len) % len;

  //   // Use array.slice() to get the rotated parts and concatenate them in the desired order
  //   const rotatedArray = arr
  //     .slice(len - effectiveOffset)
  //     .concat(arr.slice(0, len - effectiveOffset));

  //   return rotatedArray;
  // };

  let open = true;

  const [send, receive] = crossfade({});
</script>

<main>
  <nav class="entries">
    <InfiniteScroller items={sections} {open} let:item>
      <a
        on:click={() => {
          // page = item;
          selectedIndex.set(item.id);
          previousId = item.id;
        }}
        href="#"
        class="entry"

        class:selected={$selectedIndex === item.id}

      >
        {item.name}
        <!-- {item.absolute} -->
      </a>
    </InfiniteScroller>
    <!-- {page} -->
    <button on:click={() => (open = !open)}></button>
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
    grid-template-columns: 1fr auto;

    padding: 1em;

    /* overflow: hidden; */

    font-size: 2.5rem;
  }

  .entries a {
    text-decoration: none;
    color: var(--clr-text);
    transition: color 0.2s ease-in-out;
  }

  .entries a:hover {
    color: var(--clr-secondary);
  }

  .entries a.selected {
    color: var(--clr-primary);
  }

  article {
    text-align: justify;
    max-width: 50rem;
    margin: 0 auto;
    padding: 1rem;
  }
</style>
