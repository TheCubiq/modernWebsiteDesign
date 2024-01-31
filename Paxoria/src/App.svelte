<script>
  import InfiniteScroller from "./lib/infiniteScroller.svelte";

  import Hero from "./lib/pages/Hero.svelte";

  import { desiredPosition, selectedId } from "./lib/stores";

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
    "SuperHi",
    "Nonagrams",
    "IO",
    "Kindeo",
    "INT",
    "Airbnb",
    "Google",
    "Archive",
  ];

  let open = true;
</script>

<main>
  <nav class="entries">
    <InfiniteScroller items={sections} {open} let:item>
      <!-- class:selected={$selectedIndex === item.id} -->
      <a href="#" class="entry">
        {item.name}
      </a>
    </InfiniteScroller>
    <!-- {page} -->
    <!-- <button on:click={() => (open = !open)}></button> -->
  </nav>

  <!-- <Hero /> -->

  <span class="defaultPos" style:--y={`${$desiredPosition}px`}>--&gt;</span>
</main>

<style>
  main {
    flex: 1;
    place-items: center;
    /* max-height: 100vh; */

    background-color: var(--clr-bg);

    font-size: 2.5rem;

    --padding: 1.5em;
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
    grid-template-rows: 1fr 30px;
    grid-auto-flow: row;

    padding: var(--padding);
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

  .defaultPos {
    position: fixed;
    top: var(--y, 0px);
    left: 0;
  }
</style>
