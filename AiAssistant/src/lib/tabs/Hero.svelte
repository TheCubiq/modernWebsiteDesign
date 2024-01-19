<script>
  import { Home, LogOut, ShoppingBag } from "lucide-svelte";
  import AppleLogo from "/apple-logo.svg";
  import QR from "@svelte-put/qr/svg/QR.svelte";
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  import Linkable from "../Linkable.svelte";
  import Magnetic from "../Magnetic.svelte";

  const navItems = [
    {
      name: "Home",
      icon: Home,
      href: "#title",
    },
    {
      name: "Store",
      icon: ShoppingBag,
      href: "#socials",
    },
    {
      name: "Leave",
      icon: LogOut,
      href: "#barcode",
    },
  ];

  const socialButtons = [
    {
      name: "explore apparel",
      href: "#",
    },
    {
      name: "news & blog",
      href: "#",
    },
    {
      name: "get the app",
      href: "#",
      icon: AppleLogo,
    },
  ];
</script>

<section
  transition:fly|global={{
    delay: 500,
    duration: 700,
    x: -50,
    opacity: 0,
    easing: quintOut,
  }}
  id="hero"
  class="corners">
  <menu class="scroller">
    <!-- nav -->
    <li id="navigation">
      <!-- <nav transition:scale={{ duration: 1000 }} >
        <a href="#">
          <svelte:component this={Home} size="1em" />
          <span>Home</span>
        </a>
        <a href="#">
          <ShoppingBag size="1em" />
          <span>Store</span>
        </a>
        <a href="#">
          <LogOut size="1em" />
          <span>Leave</span>
        </a>
      </nav> -->

      <nav>
        {#each navItems as { name, icon, href }, i}
          <a
            transition:fly|global={{
              delay: 1000 + i * 200,
              duration: 300,
              x: 0,
              y: -50,
              opacity: 0,
              easing: quintOut,
            }}
            href={href || "#"}
          >
            <Linkable text={name}>
              <svelte:component this={icon} size="1em" />
            </Linkable>
          </a>
        {/each}
      </nav>
    </li>

    <!-- title -->
    <li id="title">
      <Magnetic rot mul={{ x: 15, y: 15 }} init={{ x: -30, y: 0 }}>
        <div class="circle" style:--intensity={"-10"}>
          <h1 style:--intensity={"80"}>
            ai gen.2 <br /> starsets new <br />pic.dawn
          </h1>
        </div>
      </Magnetic>
    </li>

    <!-- social buttons -->
    <li id="socials">
      <ul>
        <!-- <li class="highlight">
          <a href="#">explore apparel</a>
        </li>
        <li>
          <a href="#">news & blog</a>
        </li>
        <li>
          <a href="#">
            <img src={AppleLogo} alt="" />
            get the app
          </a>
        </li> -->

        {#each socialButtons as { name, href, icon }, i}
          <li
            class={i === 0 && "highlight"}
            transition:fly|global={{
              delay: 1000 + i * 200,
              duration: 300,
              x: 0,
              y: 50,
              opacity: 0,
              easing: quintOut,
            }}
          >
            <a href={href || "#"}>
              <Linkable text={name}>
                {#if icon}
                  <img src={icon} alt="" />
                {/if}
              </Linkable>
            </a>
          </li>
        {/each}
      </ul>
      <aside>
        <QR data="https://cubiq.dev" shape="circle" moduleFill="gray" />
      </aside>
    </li>

    <li id="barcode">
      <p>made by cubiq.dev</p>
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
    grid-template-areas: "title buttons barcode nav";

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


    /* padding: 0.375rem 0.75rem; */
  }

  ul > li > a {
    flex: 1;
    justify-self: center;
    display: flex;
    align-items: center;
    gap: 0.375rem;
    padding: 0.375rem 0.75rem;
    
    background-color: var(--clr-bg);
    border-radius: 0.75rem;
    border: 1px solid var(--clr-text);
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

  .highlight a {
    background-color: var(--clr-text);
    /* color: var(--clr-bg); */
    --clr-btn-text: var(--clr-bg);
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

  #title .circle {
    border: var(--clr-secondary) solid calc(var(--stroke-width) * 1.5);
    border-radius: var(--magnet-rad, 100em);
    background-color: var(--clr-bg);
    /* text-shadow: 0px 0px 0px transparent; */
    transition-duration: var(--shadow-duration);
    transition-property: padding, scale, box-shadow;

    user-select: none;

    --shadow-duration: 0.5s;
    
    box-shadow: calc(var(--magnet-x) * -0.5px) calc(var(--magnet-y) * -1px) var(--shadow-intensity) 5px var(--shadow-color);
    
  }

  :global(#title :hover > .circle) {
    --shadow-intensity: 10px;
    --shadow-color: var(--clr-secondary);
  }

  :global(#title :hover:active > .circle) {
    --shadow-intensity: 20px;
    --shadow-color: var(--clr-primary);
    --shadow-duration: 0.1s !important;
    padding: 1em;
    scale: .95;
  }

  .circle h1 {
    /* aspect-ratio: 1/1;    */
    /* display: flex; */
    align-items: center;

    font-size: clamp(1.5rem, 2vw + 1rem, 2.25rem);

    /* max-width: 15ch; */
    justify-self: center;

    padding: 0.3em;
    display: flex;

    margin-inline: auto;

    max-width: max-content;

    aspect-ratio: 1/1;
  }

  #title {
    grid-area: title;

    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    transform-style: preserve-3d;

    --magnet-rad: 100em;
  }

  #socials {
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

  #socials > ul {
    width: 100%;
    max-width: 50ch;
    z-index: 2;
  }

  #socials > aside {
    display: flex;
    max-height: 10rem;
    min-width: 10rem;
    justify-content: center;

    background: var(--clr-secondary);
    border-radius: var(--corner-radius);
    padding: 0.5em;

    aspect-ratio: 1;
  }

  #navigation {
    grid-area: nav;
  }

  #barcode {
    /* display: none; */

    grid-area: barcode;

    display: none;

    font-family: "Libre Barcode 39 Extended Text";
    white-space: nowrap;
    /* font direction up to down */
    writing-mode: vertical-rl;
    /* position: absolute; */
    font-size: clamp(2rem, 2vw + 1rem, 3rem);
    text-transform: uppercase;

    justify-content: center;
    align-items: center;
    height: 100%;

    color: var(--clr-secondary);

    pointer-events: none;
  }

  #navigation {
    display: flex;
    justify-content: center;
    position: sticky;
    right: 0;
    bottom: 0;
    margin-block: 3em;
    margin-block-start: 75vh;
    z-index: 999;
    scroll-snap-align: none;
  }

  #navigation nav {
    display: flex;
    justify-content: center;
    gap: var(--spacing-half);
    flex-direction: inherit;
    align-items: flex-start;
  }

  #navigation a {
    line-height: 1;
    font-size: 1.25rem;
  }

  :global(#navigation a .link) {
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

    #navigation,
    #barcode,
    .qr {
      display: list-item;
    }

    #navigation {
      display: flex;
      position: static;
      right: 0;
      bottom: 0;
      margin-block: 0;
      z-index: 999;
      flex-direction: column;
      align-items: flex-start;
    }

    :global(#navigation a .link) {
      display: block;
    }

    li#barcode {
      grid-area: barcode;

      align-self: start;
    }

    #socials {
      grid-area: buttons;

      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      height: 100%;
      align-content: flex-end;

      flex-direction: row;

      gap: var(--spacing-half);
    }

    #socials > ul {
      flex: 1;
      max-width: 30ch;
    }

    #socials > aside {
      display: flex;
      flex: 1;
      max-width: 10rem;
      min-width: auto;
    }
  }
</style>
