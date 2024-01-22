<script>Simpsons
  import Inner from "./lib/Inner.svelte";
  import Futurama from "./lib/pages/Futurama.svelte";
  import StarWars from "./lib/pages/StarWars.svelte";
  import Simpsons from "./lib/pages/Simpsons.svelte";

  import { AnimatePresence } from "svelte-motion";

  let page = "Simpsons";

  const pages = {
    Simpsons: Simpsons,
    Futurama: Futurama,
    StarWars: StarWars,
  };
</script>

<main>
  <AnimatePresence list={[{ key: page }]} let:item exitBeforeEnter>
    <Inner {item}>
      <article>
        <nav>
          {#each Object.entries(pages) as [key], i}
            <button on:click={() => (page = key)}>{key}</button>
          {/each}
        </nav>
        <svelte:component this={pages[item.key]} />
      </article>
    </Inner>
  </AnimatePresence>
</main>

<style>
  main {
    flex: 1;
    place-items: center;
    max-height: 100vh;

    background-color: var(--clr-bg);
  }

  article {
    text-align: justify;
    max-width: 50rem;
    margin: 0 auto;
    padding: 1rem;
  }
</style>
