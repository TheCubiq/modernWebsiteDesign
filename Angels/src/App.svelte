<script>
  import SvgDefines from "./lib/svgDefines.svelte";
</script>

<main>
  <section id="angels"></section>
  <section id="fountain"></section>
  <section id="saints"></section>
  <section id="title"></section>
  <section id="women"></section>
  <section id="quote"></section> 

  <aside></aside>
  <SvgDefines />
</main>

<style>
  main {
    flex: 1;

    flex-direction: column;

    height: 100%;
    width: 100%;
    max-width: 80rem;
    display: grid;

    gap: 1em;

    grid-template-columns: 1fr .95fr 1.05fr;
    grid-template-rows: 1.4fr .3fr 1fr;

    grid-template-areas:
      "angels fountain saints"
      "title women saints"
      "title women quote"
    ;

    position: relative;
  }

/* 
  angels
  fountain
  saints
  title
  women
  quote 
*/

  section {
    position: relative;
    background: var(--clr-primary);
    
  }
  
  section:nth-child(odd) {
    background: var(--clr-secondary);
  }


  #angels {
    grid-area: angels;
    border-top-right-radius: 14em;
  }
  #fountain {
    grid-area: fountain;
    border-radius: 9em;
    border-top-right-radius: 0;
  }
  #saints {
    grid-area: saints;
    border-top-left-radius: 9em;
  }
  #title {
    grid-area: title;

    border-radius: 99em;
    border-bottom-right-radius: 0;

    width: 100%;
    aspect-ratio: 1;
    margin-block-start: -2.5em;
  }
  #women {
    grid-area: women;
  }
  #quote {
    grid-area: quote;
    border-bottom-right-radius: 17em;
  }

  aside {
    position: absolute;
    aspect-ratio: 1;
    font-size: 5rem;
    right: 0;
    bottom: 0;
    width: 14rem;
    translate: 50% 50%;

    grid-area: angels;
  }

  aside::before,
  aside::after {
    content: "";
    position: absolute;
    inset: 0;
  }

  aside::after {
    background-color: #fffa;
    mask: url("#b-strok");
  }

  aside::before {
    background-color: #0005;

    backdrop-filter: blur(2px);
    mask: url("#b-fill");
    mask-size: 100% 100%;
  }
</style>
