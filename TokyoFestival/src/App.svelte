<script>
  import { onMount } from "svelte";
  import MaskedImage from "./lib/MaskedImage.svelte";
  import SvgDefines from "./lib/SvgDefines.svelte";
  import Data from "./lib/Tabs/Data.svelte";
  import Events from "./lib/Tabs/Events.svelte";
  import Navigation from "./lib/Tabs/Header.svelte";
  import Hero from "./lib/Tabs/Hero.svelte";
  import Others from "./lib/Tabs/Others.svelte";

  let isVisible = false;

  onMount(() => {
    setTimeout(() => {
      isVisible = true;
    }, 1000);
  });

</script>

{#if isVisible}
  <Navigation />
{/if}
<main>
  <Hero />
  <Data />
  <Events />
  <Others />
</main>

<SvgDefines />

<style>
  @import url("https://fonts.googleapis.com/css2?family=Manrope");

  main {
    flex: 1;
    padding: var(--card-padding);
  }

  main {
    display: grid;
    /* grid-template-columns: 5fr 2fr 5fr;
        grid-template-rows: repeat(8, 1fr); */

    grid-template-columns: [hero-start data-start events-start others-start] 1fr;
    /* [hero-start data-start] 5fr 
            [data-end] 2fr 
            [events-start others-start hero-end] 5fr 
            [events-end others-end]; */

    /* grid-auto-rows: 100%; */

    grid-template-rows:
      [hero-start] 50vh
      [hero-end events-start] max(20em, 30vh)
      /* [hero-end events-start] 30vh */
      [events-end others-start] 15em
      [others-end data-start] auto
      [events-end data-end];

    gap: 1em;

    position: relative;

    margin-block-end: 2rem;
  }

  @media (min-width: 48rem) {
    main {
      grid-template-columns:
        [hero-start data-start] 5fr
        [data-end sun-start] 2fr
        [events-start others-start hero-end sun-end] 5fr
        [events-end others-end];

      grid-template-rows:
        [hero-start events-start sun-start] 5fr
        [events-end sun-end others-start] 1fr
        [data-start hero-end] 2fr
        [others-end data-end];

      gap: none;
      column-gap: 1em;
      margin: 0;
    }
    main::before {
      content: "";
      /* position: fixed; */
      position: absolute;

      height: 12rem;
      /* inset: 0; */
      top: -8rem;
      /* top: 0; */
      justify-self: center;

      aspect-ratio: 1;
      border-radius: 99em;

      /* grid-column: 2/3;
        grid-row: 1/3; */

      grid-area: sun;

      filter: url(#glow);

      background-color: #f44f3b;
    }
  }

  /* main {
        grid-template-columns: [events-start] 1fr [events-end];
        grid-template-rows: [events-start] 1fr [events-end];
    } */
</style>
