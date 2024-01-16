<script>
  import { Home, LogOut, ShoppingBag } from "lucide-svelte";
  import AppleLogo from "/apple-logo.svg";
  import QR from "@svelte-put/qr/svg/QR.svelte";
</script>

<section id="hero" class="corners">
  <menu class="scroller">
    <!-- nav -->
    <li class="nav">
      <nav>
        <a href="/">
          <Home size="1em" />
          <span>Home</span>
        </a>
        <a href="/">
          <ShoppingBag size="1em" />
          <span>Store</span>
        </a>
        <a href="/">
          <LogOut size="1em" />
          <span>Leave</span>
        </a>
      </nav>
    </li>

    <!-- title -->
    <li class="title">
      <h1>ai gen.2 <br /> starsets new <br />pic.dawn</h1>
    </li>

    <!-- social buttons -->
    <li class="buttons">
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
      <aside>
        <QR data="https://cubiq.dev" shape="circle" moduleFill="gray" />
      </aside>
    </li>

    <li class="barcode">
      <p>Libre Barcode 39</p>
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
    height: 200%;

    overflow-x: scroll;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    display: grid;

    align-items: center;

    grid-auto-columns: 100%;

    grid-auto-flow: column;
    grid-template-areas: "title buttons nav barcode";

    --skew-angle: 30deg;

    transform: skewY(var(--skew-angle));

    /* clip mask */
    /* clip-path: polygon(0 0, 50% 0, 100% 100%, 0 100%); */
  }

  /* scrollbar */
  .scroller::-webkit-scrollbar {
    display: none;
    /* width: 0.5rem;
    height: 0.5rem; */
  }

  .scroller > * {
    scroll-snap-align: start;
    min-width: 100%;
    padding: 0.75rem;

    transform: skewY(calc(var(--skew-angle) * -1));
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
  }

  .title {
    grid-area: title;
  }

  .buttons {
    grid-area: buttons;

    display: flex;
    /* flex-wrap: wrap; */
    justify-content: center;
    height: 100%;
    width: 100%;
    align-items: center;

    gap: var(--spacing-half);

    flex-direction: column;
  }

  .buttons > ul {
    width: 100%;
    max-width: 50ch;
  }

  .buttons > aside {
    display: flex;
    max-height: 10rem;
    min-width: 10rem;
    justify-content: center;

    background: var(--clr-secondary);
    border-radius: var(--corner-radius);
    padding: 0.5em;

    aspect-ratio: 1;
  }

  .nav {
    grid-area: nav;
  }

  .barcode {
    display: none;
  }

  .nav {
    display: flex;
    justify-content: center;
    position: sticky;
    right: 0;
    bottom: 0;
    margin-block: 3em;
    margin-block-start: 75vh;
    z-index: 999;
  }

  .nav nav {
    display: flex;
    justify-content: center;
    gap: var(--spacing-half);
    flex-direction: inherit;
  }

  .nav a {
    line-height: 1;
    font-size: 1.25rem;
  }

  .nav a span {
    display: none;
    vertical-align: text-top;
  }

  @media (min-width: 48rem) {
    .scroller {
      /* grid-auto-columns: 1fr 1fr;
      grid-auto-flow: row; */

      grid-auto-columns: auto;

      grid-template-areas: none;

      grid-template-columns: [nav-start buttons-start title-start] 1fr [nav-end barcode-start] 1fr [barcode-end title-end buttons-end];
      grid-template-rows: [nav-start title-start barcode-start] 1fr [nav-end] 1fr [barcode-end buttons-start] 1fr [buttons-end qr-end title-end];

      overflow: auto;
      transform: none;

      height: 100%;
    }

    .scroller > * {
      transform: none;
    }

    .nav,
    .barcode,
    .qr {
      display: list-item;
    }

    .nav {
      display: flex;
      position: static;
      right: 0;
      bottom: 0;
      margin-block: 0;
      z-index: 999;
      flex-direction: column;
      align-items: flex-start;
    }

    .nav a span {
      display: inline;
    }

    li.barcode {
      grid-area: barcode;

      font-family: "Libre Barcode 39 Extended Text";
      white-space: nowrap;
      /* font direction up to down */
      writing-mode: vertical-rl;
      /* position: absolute; */
      font-size: clamp(2rem, 2vw + 1rem, 3rem);
      text-transform: uppercase;

      align-self: start;
      color: var(--clr-secondary);
    }

    .buttons {
      grid-area: buttons;

      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      height: 100%;
      align-content: flex-end;

      flex-direction: row;

      gap: var(--spacing-half);
    }

    .buttons > ul {
      flex: 1;
      max-width: 30ch;
    }

    .buttons > aside {
      display: flex;
      flex: 1;
      max-width: 10rem;
      min-width: auto;
    }
  }
</style>
