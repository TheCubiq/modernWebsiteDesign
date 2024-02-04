<script>
  import EmojiCanvas from "./lib/EmojiCanvas.svelte";

</script>

<main>
  <EmojiCanvas />
  <section>
    <h1>made by Cubiq</h1>
  </section>
</main>

<style>
  main {
    flex: 1;
    display: grid;

    width: 100%;
    height: 100%;

    position: fixed;

    overflow: hidden;

    font-size: clamp(1.5rem, 4vw + 1rem, 5rem);

    background: var(--clr-bg);
  }

  :global(main > *) {
    grid-row: 1;
    grid-column: 1
  }

  section {
    /* isolation: isolate; */

    z-index: 1;

    color: var(--clr-bg);

    mix-blend-mode: difference;

    display: flex;
    justify-content: center;
    align-items: center;

    user-select: none;

  }


</style>
