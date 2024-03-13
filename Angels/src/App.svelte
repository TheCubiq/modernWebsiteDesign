<script>
  import SvgDefines from "./lib/svgDefines.svelte";
</script>

<main>
  <div class="col">
    <section id="angels" class="i-corners i-c-bottom"></section>
    <section id="title"></section>
  </div>
  <div class="col">
    <section id="fountain"></section>
    <section id="women" class="i-corners i-c-top"></section>
  </div>
  <div class="col">
    <section id="saints"></section>
    <section id="quote"></section>
  </div>

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

    --gap: 1em;
    gap: var(--gap);

    grid-template-columns: 1fr 0.95fr 1.05fr;

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

  .col {
    display: flex;
    flex-direction: column;
    gap: var(--gap);
  }

  section {
    flex: 1;
    --_clr-cell: var(--clr-primary);
    background: var(--_clr-cell);
    position: relative;
  }

  .col:nth-child(odd) section:nth-child(odd),
  .col:nth-child(even) section:nth-child(even) {
    --_clr-cell: var(--clr-secondary);
  }

  .col:nth-child(1) {
    --_rad: 13em;
    /* --_rad: 9em; */
  }
  .col:nth-child(2) {
    --_rad: 8.5em;
  }
  .col:nth-child(3) {
    --_rad: 9.5em;
  }

  #angels {
    border-top-right-radius: var(--_rad);
  }
  #fountain {
    grid-area: fountain;
    border-radius: var(--_rad);
    border-top-right-radius: 0;

    flex: 1.02;
  }
  #saints {
    flex: 1.8;
    border-top-left-radius: var(--_rad);
  }
  #title {
    border-radius: var(--_rad);
    border-bottom-right-radius: 0;

    width: 100%;
    aspect-ratio: 1;
    flex: 1.2;
  }
  #women {
  }

  #quote {
    --_rad: 17em;
    border-bottom-right-radius: var(--_rad);
  }

  /* inverted corners */

  .i-corners {
    --_width: calc(var(--_rad) + var(--gap));
    --_corner: transparent calc(var(--_rad) + var(--gap) - 1px),
      var(--_clr-cell) calc(var(--_rad) + var(--gap));
  }
  .i-corners::before {
    content: "";
    position: absolute;
    inset-inline: 0;

    height: var(--_rad);
    background-repeat: no-repeat;
    background-size: var(--_width) var(--_width);
    background-position-x: calc(100% + var(--gap)), calc(0% - var(--gap));
  }

  .i-c-bottom::before {
    bottom: calc(-1 * var(--_rad));
    height: var(--_rad);

    background-image: radial-gradient(circle at left bottom, var(--_corner)),
      radial-gradient(circle at right bottom, var(--_corner));
    background-position-y: calc(100% + var(--gap));
  }

  .i-c-top::before {
    top: calc(-1 * var(--_rad));

    background-image: radial-gradient(circle at left top, var(--_corner)),
      radial-gradient(circle at right top, var(--_corner));
    background-position-y: 100%;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  aside {
    position: absolute;
    font-size: 14rem;
    right: 0;
    bottom: 0;
    width: 1em;
    aspect-ratio: 1/1;
    translate: 50% 50%;

    z-index: 99;

    bottom: 50%;

    grid-column: 1 / span 1;

    animation: rotate 30s linear infinite;
  }

  aside::before,
  aside::after {
    content: "";
    position: absolute;
    inset: 0;
  }

  aside::after {
    background-color: var(--clr-accent);
    mask: url("#b-strok");
  }

  aside::before {
    background: repeating-radial-gradient(
      circle at 50%50%,
      rgb(255 255 255/0),
      rgba(255, 255, 255, 0.2) 10px,
      rgb(255 255 255) 31px
    );
    /* rgba(255, 255, 255, 0.2) 0.03em,
      rgb(255 255 255) 0.1em */

    /* background-size: 0.069em 0.069em; */
    background-size: 15px 15px;

    filter: brightness(0.95) blur(2px) url("#fractal-glass");

    backdrop-filter: blur(0px);

    mask: url("#b-fill");
    mask-size: 100% 100%;
  }
</style>
