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

  let page = "Simpsons";

  const pages = {
    Simpsons,
    Futurama,
    StarWars,
  };

  const sections = {
    "Arc Browser": {
      Simpsons,
      Futurama,
      StarWars,
    },
    "Chromium": {
      Simpsons,
      Futurama,
      StarWars,
    },
  }

</script>

<main>
  <!-- <AnimatePresence list={[{ key: page }]} let:item exitBeforeEnter>
    <Inner>
      <article>
        <nav>
          {#each Object.entries(pages) as [key], i}
            <button on:click={() => (page = key)}>{key}</button>
          {/each}
        </nav>
        <svelte:component this={pages[item.key]} />
      </article>
    </Inner>
  </AnimatePresence> -->

  <!-- <nav>
    {#each Object.entries(pages) as [key], i}
      <button on:click={() => (page = key)}>{key}</button>
    {/each}
  </nav>
  <AnimatePresence list={[{ key: page }]} let:item exitBeforeEnter>
    <Stairs nbOfColumns={5}>
      <article>
        <svelte:component this={pages[item.key]} />
      </article>
    </Stairs>
  </AnimatePresence> -->

  <!-- <nav>
    {#each Object.entries(pages) as [key], i}
      <button on:click={() => (page = key)}>{key}</button>
    {/each}
  </nav>
  <AnimatePresence list={[{ key: page }]} let:item exitBeforeEnter>
    <Curve title={item.key}>
      <article>
        <svelte:component this={pages[item.key]} />
      </article>
    </Curve>
  </AnimatePresence> -->

  <nav>
    {#each Object.entries(pages) as [key], i}
      <button on:click={() => (page = key)}>{key}</button>
    {/each}
  </nav>

  {#key page}
    <StairsNative nbOfColumns={10}>
      <article>
        <svelte:component this={pages[page]} />
      </article>
    </StairsNative>
  {/key}

  <button>test</button>
</main>

<style>
  main {
    flex: 1;
    place-items: center;
    /* max-height: 100vh; */

    background-color: var(--clr-bg);
  }

  main nav {
    position: sticky;
    top: 0;
    margin-block: 3em;
  }

  article {
    text-align: justify;
    max-width: 50rem;
    margin: 0 auto;
    padding: 1rem;
  }
</style>
