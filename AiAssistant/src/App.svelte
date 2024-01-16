<script>
  import SvgDefines from "./lib/SvgDefines.svelte";
import Header from "./lib/tabs/Header.svelte";
  import Hero from "./lib/tabs/Hero.svelte";
  import Slideshow from "./lib/tabs/Slideshow.svelte";

  import { onMount } from "svelte";

  let loaded = false;

  onMount(() => {
    loaded = true;
  });

</script>

<main>
  
  {#if loaded}
  <Header />
  
  <Hero />
  <Slideshow />
  {/if}
</main>

<SvgDefines />

<style>
  main {
    flex: 1;
    display: grid;
    place-items: center;
    /* max-height: 100vh; */

    height: auto;

    background-color: var(--clr-bg);

    grid-template-columns: [header-start hero-start slideshow-start] 1fr [header-end hero-end slideshow-end];
    /* grid-template-rows: 
      [header-start] auto 
      [header-end hero-start] 1fr
      ; */
      /* [hero-end slideshow-start] 1fr [slideshow-end] */

    grid-template-rows: [header-start] auto [header-end hero-start] minmax(3rem,80svh) [hero-end slideshow-start] 100vh [slideshow-end];

    padding: 1.5rem;
    column-gap: var(--spacing);
    row-gap: var(--spacing-half);

    max-width: 100rem;

  }

  @media (min-width: 48rem) {
    main {
      grid-template-columns: 
        [header-start hero-start] 1fr 
        [hero-end slideshow-start] 1fr [header-end slideshow-end];
      grid-template-rows: 
        [header-start slideshow-start] auto 
        [header-end hero-start] 1fr [hero-end slideshow-end];
    }
  }

</style>
