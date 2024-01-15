<script>
  import { Home, LogOut, ShoppingBag } from "lucide-svelte";
  import AppleLogo from "/apple-logo.svg";
</script>

<section id="hero" class="corners">
  <menu class="scroller">

    <!-- nav -->
    <li>
      <nav>
        <a href="/"><Home /></a>
        <a href="/"><ShoppingBag /></a>
        <a href="/"><LogOut /></a>
      </nav>
    </li>

    
    <!-- title -->
    <li>
      <h1>ai gen.2 <br/> starsets new <br/>pic.dawn</h1>
    </li>

    <!-- social buttons -->
    <li>
      <ul>
        <li class="highlight">
          <a href="/">explore apparel</a>
        </li>
        <li>
          <a href="/">news & blog</a>
        </li>
        <li>
          <a href="/">
            <img src={AppleLogo} alt="" />
            get the app
          </a>
        </li>
      </ul>
    </li>
  </menu>

  <!-- ai gen.2 -->
</section>

<style>
  #hero {
    grid-area: hero;

    display: grid;
    grid-template-columns: 1fr;

    /*  grid-template-rows: auto 1fr auto; */

    /* align-items: flex-start; */

    /* padding: 0.75rem; */

    /* grid-template-columns: 
    [nav-start buttons-start] 1fr [nav-end buttons-end] 1fr [end]; */

    /* max-width: 100vw; */

    --stroke-width: 0.1rem;

    background: linear-gradient(
      to left bottom,
      transparent calc(50% - var(--stroke-width) / 2 - 0.15px),
      var(--clr-secondary) calc(50% - var(--stroke-width)),
      var(--clr-secondary) calc(50% + var(--stroke-width)),
      transparent calc(50% + var(--stroke-width) / 2 + 0.15px)
    );
    background-color: var(--clr-bg);

    box-shadow: 0 0 0 calc(var(--stroke-width) * 1.5) var(--clr-secondary);
  }

  .scroller {
    flex: 1;
    height: 100%;

    overflow-x: scroll;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    display: grid;

    align-items: center;

    /* grid-auto-columns: 100%; */

    grid-template-columns: [nav-start buttons-start] 1fr [nav-end buttons-end] 1fr [end];

    grid-auto-flow: column;



  }

  .scroller > * {
    scroll-snap-align: start;
    min-width: 100%;
    padding: 0.75rem;
  }

  ul,
  nav,
  menu {
    list-style: none;

    display: flex;
    column-gap: var(--spacing);
  }

  ul {
    flex-direction: column;

    row-gap: var(--spacing-half);
  }

  ul > li {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.375rem;

    white-space: nowrap;

    background-color: var(--clr-bg);
    border-radius: 0.75rem;
    border: 1px solid var(--clr-text);

    padding: 0.375rem 0.75rem;
  }

  ul::after {
    /* content: "---"; */
    content: "";

    --size: 0.2em;

    background: radial-gradient(
      50% 50% at 50% 50%,
      var(--clr-text) calc(var(--size) - 0.5px),
      /*   antialiasing   */ transparent var(--size)
    );
    background-size: 1em 1em;
    background-repeat: space;
    background-position: center;

    margin-inline: auto;

    margin-block: -0.5em;

    width: 3em;
    height: 1em;

    /* flex: 1; */
    order: 98;
  }

  ul > li:last-child {
    order: 99;
  }

  ul > li img {
    height: 0.85em;
  }

  .highlight {
    background-color: var(--clr-text);
    color: var(--clr-bg);
  }

  .highlight a {
    color: inherit;
  }

  .corners {
    z-index: 0;
  }

  .corners::after,
  .corners::before {
    content: "";
    position: absolute;
    pointer-events: none;
  }

  .corners::after {
    inset: 0em;
    z-index: -1;
    border-radius: var(--corner-radius);
    background: inherit;

    transition: 0.1s;
  }

  .corners::before {
    --stroke-width: 0.17em;
    inset: calc(var(--stroke-width) * -1);

    --radi: calc(var(--corner-radius) + var(--stroke-width));
    border-radius: var(--radi);

    --over-length: 20px;
    --off-radi: calc(var(--radi) + var(--over-length));

    --circ: var(--clr-primary) var(--off-radi), transparent var(--off-radi);

    --corners-final: radial-gradient(circle at left top, var(--circ)),
      radial-gradient(circle at right top, var(--circ)),
      radial-gradient(circle at left bottom, var(--circ)),
      radial-gradient(circle at right bottom, var(--circ));

    background: var(--corners-final);
    z-index: -2;

    scale: 1;
  }

  section h1 {
    /* aspect-ratio: 1/1;    */
    /* display: flex; */
    align-items: center;
    border: var(--clr-secondary) solid calc(var(--stroke-width) * 1.5);
    border-radius: 100em;

    font-size: clamp(1.5rem, 2vw + 1rem, 2.25rem);

    /* max-width: 15ch; */
    justify-self: center;

    padding: 0.3em;
    display: flex;
    background-color: var(--clr-bg);

    margin-inline: auto;

    max-width: max-content;

    aspect-ratio: 1/1;

    position: relative;
    z-index: 0;
  }


  @media (min-width: 48rem) {
  


  }
</style>
