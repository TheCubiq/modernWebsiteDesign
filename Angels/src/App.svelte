<script>
  import SvgDefines from "./lib/svgDefines.svelte";

  import womanAngelFlowers from "./assets/woman-angel-flowers.webp";
  import butterflyAngels from "./assets/2angels2.jpeg";
  import Maria from "./assets/2male.jpeg";
  import childAngels from "./assets/child-angels.webp";
  import fountainPath from "./assets/svg/fountain-stroke.svg";
</script>

<main>
  <div class="col">
    <section id="angels" class="i-corners i-c-bottom">
      <span>69</span>
      <img src={Maria} alt="" />
    </section>
    <section id="title">
      <article>
        <aside></aside>
        <h1>Angels</h1>
      </article>
    </section>
  </div>
  <div class="col">
    <section id="fountain">
      <svg class="svg-fountain"> <use href="#f-stroke-full" /> </svg>
      <svg class="svg-star"> <use href="#star1" /> </svg>
      <blockquote cite="https://cubiq.dev">
        <p>
          ANGELS ARE ALL AROUND US 
        </p>
        <p>
          ALL THE TIME. IN THE VERY AIR WE BREATHE
        </p>
      </blockquote>
      <svg class="svg-star"> <use href="#fnt-line" /> </svg>
    </section>
    <section id="women" class="i-corners i-c-top">
      <img src={butterflyAngels} alt="" />
    </section>
  </div>
  <div class="col">
    <section id="saints">
      <figure>
        <img src={womanAngelFlowers} alt="" />
        <figcaption>
          <h2><span>portrait of</span> young woman</h2>
          <aside />
          <h2><span>clara</span> anguissola</h2>
        </figcaption>
      </figure>
    </section>
    <section id="quote">
      <blockquote cite="https://cubiq.dev">
        <p>while i thought that i was learning how to live, i have been learning how to die</p>
      </blockquote>
      <!-- <svg class="svg-arrow"> <use href="#deco-arrow1" /> </svg> -->
      <svg class="svg-arrow"> <use href="#quote-graphics"  /> </svg>
      <p>
        Dont expect everything to go<br/>exactly as you planned.
      </p>
    </section>
  </div>

  <aside class="badge" />

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
    display: flex;
    flex-direction: column;

    flex: 1;
    --_clr-cell: var(--clr-primary);
    background: var(--_clr-cell);
    position: relative;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* #region column layout */

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
    flex: 1.3;
  }

  #quote {
    --_rad: 17em;
    border-bottom-right-radius: var(--_rad);
    color: var(--clr-secondary);

    padding-inline: 2em;
    justify-content: space-between;
    padding-block: 2.7em;
    flex: .1;
    text-align: center;

  }

  #quote blockquote {
    text-transform: uppercase;
  }

  #quote .svg-arrow {
    height: 10rem;
    /* align-self: flex-end; */
    width: 83%;
    width: 100%;

    padding-inline-end: 4rem;
    /* margin-top: 6.8rem; */
    height: 5rem;
  }

  /* #endregion */

  /* #region angels */
  #angels {
    padding: 1em;
    padding-inline-end: 2.5em;
    gap: 1.8em;
  }

  #angels span {
    color: var(--clr-secondary);
    z-index: 1;
    background-color: var(--clr-primary);
    aspect-ratio: 1;
    font-size: 3.8rem;
    max-width: 1.55em;
    font-weight: 500;
    letter-spacing: -3.6px;
    padding: 0.16em;
    mask: url(#b2-fill);
    line-height: 1.25;
  }

  #angels img {
    width: 100%;

    height: auto;
    aspect-ratio: 2/1;

    object-fit: cover;
    mask: url("#butterfly-mask");

    object-position: center 10%;
  }

  /* #endregion */

  /* #region fountain */

  /* #fountain {
    padding: 1em;
    padding-inline-end: 2.5em;
    gap: 1.8em;
    position: relative;
  } */

  #fountain {
    align-items: center;
    gap: .5em;
    color: var(--clr-secondary);
  }

  #fountain .svg-fountain {
    width: 100%;
    height: 13.2rem;
    margin-block-start: 3.9rem;
  }

  #fountain .svg-star {
    height: 1.7rem;
  }

  #fountain blockquote {
    color: var(--clr-secondary);

    line-height: 1.1;

    text-align: center;
    font-size: 0.6rem;
    max-width: 40ch;
  }

  /* #endregion */

  /* #region title */

  #title {
    padding-inline: 1em;
    justify-content: center;
    align-items: center;
  }

  #title article {
    display: flex;
    flex-direction: column;
    gap: 1em;
    align-items: center;
    justify-content: center;
    background: var(--clr-secondary);
    aspect-ratio: 1/0.95;
    margin-inline-start: 1.5em;
    border-top-left-radius: 99em;
    border-top-right-radius: 99em;
    z-index: 0;

    position: relative;
  }

  #title article::before {
    content: '';
    position: absolute;
    inset: 0;
    background: inherit;
    bottom: 50%;
    border-top-left-radius: 99em;
    border-top-right-radius: 99em;
  }

  #title aside {
    /* filter: brightness(.5); */
    position: absolute;
    inset: 0;
    transform: rotate(15deg) rotateX(60deg);
    z-index: -1;
    filter: brightness(0.85);
  
  }

  #title aside::before
  {
    content: "";
    position: absolute;
    inset: -5em;
    aspect-ratio: 1;
    /* border-radius: 50%; */
    /* background: transparent; */

    --_stroke-width: .1em;
    --_stroke-clr: var(--clr-secondary);
    --_circ-rad: .7rem;
    --_circ-grad: 
      var(--_stroke-clr) 95%,
      transparent;

    background: radial-gradient(
      40% 40% at center,
      transparent calc(100% - var(--_stroke-width) - 1px),
      var(--_stroke-clr) calc(100% - var(--_stroke-width)),
      var(--_stroke-clr) calc(100% - 1px),
      transparent
    ),
    radial-gradient(
      var(--_circ-rad) var(--_circ-rad) at 90% 50%,
      var(--_circ-grad)
    ),
    radial-gradient(
      var(--_circ-rad) var(--_circ-rad) at 10% 50%,
      var(--_circ-grad)
    )
    ;
    /* border: 1px solid var(--clr-secondary); */

    animation: rotate 15s linear infinite;

  } 



  #title h1 {
    font-size: 3.5rem;
    line-height: 1.25;
    text-align: center;
    /* padding: 0.5em; */
    padding-inline: 0.25em;
    color: var(--clr-primary);
    /* border: 1px solid var(--clr-accent); */
    border-radius: 99em;
    margin-block: 0.5em;
    z-index: 1;

    font-family: "Bodoni Moda";
    text-transform: uppercase;
    font-weight: 100;
    letter-spacing: 1.1px;
  }

  /* #endregion */

  /* #region women */

  #women {
    padding-inline: 1em;
    justify-content: center;
    position: relative;
  }
  #women img {
    mask: url("#ellipses-fill");
    height: calc(100% - 4em);
  }

  /* #endregion */

  /* #region saints */
  #saints {
    overflow: hidden;
    z-index: 0;
  }

  #saints figure {
    display: flex;
    flex-direction: column;
    gap: 1em;
    padding: 1em;
    justify-content: flex-end;
    flex: 1;
    text-transform: uppercase;
  }

  #saints figcaption {
    display: flex;
    gap: 1em;
    justify-content: space-between;
    position: relative;
    align-items: center;

    padding: 0.7em;
    padding-inline: 1em;
    /* background: red; */
    margin-block-end: 0.4em;
    border: 1px solid var(--clr-accent);
  }

  #saints figcaption h2 {
    font-size: 1rem;
    line-height: 1;
  }

  #saints figcaption h2 span {
    font-weight: 200;
    /* line-height: 1.25; */
    display: block;
  }

  #saints figcaption h2:last-child {
    text-align: end;
  }

  #saints img {
    position: absolute;
    inset: 0;
    z-index: -1;
  }

  #saints figcaption aside {
    height: 3.1rem;
    aspect-ratio: 1;
    border-radius: 99em;
    border: solid var(--clr-accent) 1px;
    margin-block: 0.2em;
    position: absolute;
    margin-inline: auto;
    inset-inline: 0;
  }

  /* #endregion */

  #quote { 
    box-shadow:
      inset var(--clr-primary) 0px 0px 0 9px, 
      inset var(--clr-secondary) 0px 0px 0px 10px;
  }

  /* #region inverted corners */

  .i-corners {
    --_width: calc(var(--_rad) + var(--gap));
    --_corner: transparent calc(var(--_rad) + var(--gap) - 1px),
      var(--_clr-cell) calc(var(--_rad) + var(--gap));
  }
  .i-corners::before {
    content: "";
    position: absolute;
    inset-inline: 0;
    pointer-events: none;

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

  /* #endregion */

  /* #region badge */

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .badge {
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

  .badge::before,
  .badge::after {
    content: "";
    position: absolute;
    inset: 0;
  }

  .badge::after {
    background-color: var(--clr-accent);
    mask: url("#b-strok");
  }

  .badge::before {
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

  /* #endregion */
</style>
