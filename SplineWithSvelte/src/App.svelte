<script>
  import { Application } from "@splinetool/runtime";
  import { onMount } from "svelte";

  import CubiqLogo from "./assets/cubiqLogo.svg?raw";
  import SvelteLogo from "./assets/svelteLogo.svg?raw";
  import scene from "./assets/spline/iphoneScreen.spline?url";
  import WorkPill from "./lib/workPill.svelte";
  import demoScreen from "./assets/demoScreen.png";
  import { fade, fly } from "svelte/transition";
  import Timeline from "./lib/Timeline.svelte";
  import { ArrowUpRight, X } from "lucide-svelte";
  import Linkable from "./lib/Linkable.svelte";

  let canvas;

  let switchScene;

  let sceneNo = 1;

  let sceneLoaded = false;

  let width;

  let mobilePopup = false;

  let currentPreview = {};

  const previews = {
    nothing: {
      name: "Nothing",
      url: "#",
      id: 0,
    },

    xor: {
      name: "XOR",
      url: "https://svelte.cubiq.dev/xor",
      id: 1,
    },

    aquad: {
      name: "Aquad",
      // url: "https://snack.expo.dev/@cubiqthecreator/aquad-beta",
      url: "https://github.com/TheCubiq/Aquad",
      id: 2,
    },
  };

  const sections = {
    work: [
      {
        name: "Svelte Projects",
        url: "https://github.com/TheCubiq/modernWebsiteDesign",
        date: "2024-present",
      },
      {
        name: "Whatchu",
        url: "#",
        date: "2022-present",
      },
      {
        name: "Duin",
        url: "#",
        date: "2022-2024",
      },
    ],

    socials: [
      {
        name: "Twitter",
        url: "https://twitter.com/CubiqNation",
      },
      {
        name: "Instagram",
        url: "https://instagram.com/CubiqNation",
      },
      {
        name: "LinkedIn",
        url: "#",
      },
      {
        name: "Email",
        url: "mailto:jlajsek@gmail.com",
      },
    ],
  };

  $: isMobile = width < 800;

  const loadScene = () => {
    const app = new Application(canvas);
    // app.load("https://prod.spline.design/Bq2oeyVUmqdzWQ0F/scene.splinecode")
    app.load(scene).then(() => {
      sceneLoaded = true;
      app.setVariable("previewId", sceneNo);
      app.setBackgroundColor("transparent");

      switchScene = (id, type) => {
        currentPreview = Object.values(previews).find((p) => p.id === id);
        app.setVariable("previewId", id);

        if (!isMobile) {
          if (type === "click") {
            window.open(currentPreview.url, "_blank");
          }
          return;
        }

        if (type === "click") {
          mobilePopup = true;
        }
      };
    });
  };

  // $: if (pauseScene) {
  //   pauseScene(isMobile);
  // }

  onMount(() => {
    // if (isMobile) {
    //   showScene = true;
    //   return;
    // }

    loadScene();
  });
</script>

<svelte:window bind:innerWidth={width} />

<!-- <img src={demoScreen} alt="demoScreen"> -->
<canvas bind:this={canvas} id="canvas3d" class:visible={sceneLoaded}></canvas>

{#if !sceneLoaded}
  <main class="loading">
    <h1>Loading</h1>
    <span>cubiq's portfolio</span>
    <div class="loader" />
  </main>
{:else}
  <main in:fade class:mobilePopup>
    <header>
      {@html CubiqLogo}
    </header>
    <section id="intro">
      <h1>
        <span>Hi, I’m Kuba</span>
        <span class="desc"
          >young frontend dev, wannabe reverse engineer and sometimes content
          creator living in the Czechia</span
        >
      </h1>
      <!-- <p class="space"> -->
      <p>
        I'm a recent graduate with a passion for technology, seeking job
        opportunities to apply my skills, and learn new ones on my professional
        journey. One standout among my various projects is
        <WorkPill {...previews.aquad} {switchScene} />, a cross-platform React
        Native game that I developed in my free time and holds a special place
        as my favorite endeavor.
        <!-- , that I worked on in my free time has to be my fav one. -->

        <!-- I’m a new graduate passionate about everything technology, eagerly
        looking for ways to apply my skills in the real world, which means I’m
        open to job opportunities! I’m always looking to learn and do new
        things, so I often experiment.
        Among my various projects, my cross-platform React Native game,
        <WorkPill {...previews.aquad} {switchScene} />
        , that I worked on in my free time has to be my favorite one. -->
      </p>
      <p>
        Speaking of favorite things, Svelte has been an absolute joy for me.
        Over the past three years, I've immersed myself in its simplicity and
        efficiency, and it has seriously become an indispensable tool in my 
        toolkit. One project that really showcases my journey with Svelte is
        <WorkPill {...previews.xor} {switchScene} />, a captivating
        black-and-white minimal puzzle game.
      </p>
      <p contenteditable>
        We just call it a sausage. There's only one man I've ever called a
        coward,
        <WorkPill {...previews.nothing} {switchScene} />
        , a high-interest savings
      </p>
      <p>
        As a frontend dev, I’m driven by the hands-on, technical aspects
        of my work, like coding interactive elements and optimizing for
        different screen sizes. I believe in being versatile and ready to tackle
        various challenges. Exploring new industries excites me, as it brings
        fresh perspectives to my projects. I’m currently fascinated by the
        intersection of technology and human cognition, particularly in areas
        like machine learning and user experience. I value working in small, focused teams
        that move quickly and prioritize the quality of their craft.
      </p>
      <p>
        They only come out in the night. Or in this case, the day. And here I am
        using my own lungs like a sucker. I didn't get rich by signing checks.
        …And the fluffy kitten played with
        <WorkPill name="Svelte" />
        My favorite framework srsly
      </p>
    </section>
    <Timeline title="Projects" section={sections.work} />
    <Timeline title="Socials" section={sections.socials} />

    <footer>
      <span>
        built with {@html SvelteLogo} by Cubiq
      </span>
      <span> ©2024 </span>
    </footer>
  </main>

  {#if mobilePopup}
    <nav transition:fly={{ y: 100, duration: 300 }} class="mobilePopup">
      <!-- <WorkPill {...previews.xor} {switchScene} /> -->
      <button
        class="popupClose"
        transition:fly={{ y: -100, duration: 300, delay: 100 }}
        on:click={() => (mobilePopup = false)}><X size="1em" /></button
      >
      <a href={currentPreview.url} target="_blank">
        <Linkable text={currentPreview.name}>
          <ArrowUpRight size="1em" />
        </Linkable>
      </a>
    </nav>
  {/if}
{/if}

<style>
  [alt="demoScreen"] {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  #intro {
    margin-bottom: 6rem;
  }

  main {
    counter-reset: sections;
  }

  footer {
    display: flex;
    justify-content: space-between;
    font-size: small;
    opacity: 0.3;
  }

  :global(footer svg) {
    height: 1em;
  }

  /* #region loading */
  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
  }

  .loading span {
    letter-spacing: 1.6px;
    font-size: 0.8rem;
    font-weight: 300;
  }

  .loading h1 {
    line-height: 1;
  }

  /* https://css-loaders.com/thin/ */
  .loader {
    height: 15px;
    width: 60px;
    --c: no-repeat
      repeating-linear-gradient(#0000 0 6px, #fff 0 9px, #0000 0 15px);
    background: var(--c), var(--c), var(--c), var(--c);
    background-size: 26% 200%;
    animation: l4 1.5s infinite linear;
  }
  @keyframes l4 {
    0%,
    70%,
    100% {
      background-position:
        calc(0 * 100% / 3) 100%,
        calc(1 * 100% / 3) 100%,
        calc(2 * 100% / 3) 100%,
        calc(3 * 100% / 3) 100%;
    }
    17.5% {
      background-position:
        calc(0 * 100% / 3) 0,
        calc(1 * 100% / 3) 100%,
        calc(2 * 100% / 3) 100%,
        calc(3 * 100% / 3) 100%;
    }
    35% {
      background-position:
        calc(0 * 100% / 3) 0,
        calc(1 * 100% / 3) 0,
        calc(2 * 100% / 3) 100%,
        calc(3 * 100% / 3) 100%;
    }
    52.5% {
      background-position:
        calc(0 * 100% / 3) 0,
        calc(1 * 100% / 3) 0,
        calc(2 * 100% / 3) 0,
        calc(3 * 100% / 3) 100%;
    }
    69.99% {
      background-position:
        calc(0 * 100% / 3) 0,
        calc(1 * 100% / 3) 0,
        calc(2 * 100% / 3) 0,
        calc(3 * 100% / 3) 0;
    }
  }

  /* #endregion */

  /* #region global */

  canvas {
    aspect-ratio: none;
    position: fixed;
    inset: 0;
    cursor: grab;
    opacity: 0;
    transition: opacity 5s;
  }
  canvas.visible {
    opacity: 1;
  }

  /* vignette */
  :global(#app::before) {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(transparent, #000c 80%);
    z-index: 1;
    pointer-events: none;
  }

  main {
    flex: 1;
    height: max-content;
    padding: 6%;
    padding-inline: 3rem;
    /* padding-inline-end: 3%; */

    max-width: 45rem;

    /* pointer-events: none; */

    z-index: 1;
  }

  section {
    display: flex;
    flex-direction: column;
  }

  #intro {
    gap: 1em;
  }

  h1 {
    font-weight: 300;
    font-size: 2.6rem;
    color: var(--clr-accent);
  }
  h1 .desc {
    /* font-size: 1.4rem; */
    color: var(--clr-text);
  }

  h1 .desc::before {
    content: "— " / "";
  }

  p {
    color: var(--color-text-secondary);
  }

  /* #endregion */

  /* #region mobilePopup */

  main.mobilePopup {
    pointer-events: none;
    opacity: 0 !important;
    visibility: hidden;
  }

  nav.mobilePopup {
    position: fixed;
    inset: 0;
    padding: 1em;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.25em;
    font-size: 3rem;
    flex-direction: column;
    pointer-events: none;
  }

  nav.mobilePopup > * {
    pointer-events: auto;
  }

  nav.mobilePopup a {
    color: var(--clr-accent);
    text-decoration: none;
    font-weight: bold;
  }

  nav.mobilePopup button {
    font-size: inherit;
    background: none;
    border: none;
    /* margin: 0; */
    padding: 0;
    line-height: inherit;
    display: flex;
    color: var(--clr-accent);
    align-self: flex-end;
    cursor: pointer;
  }
  /* #endregion */

  /* #region peek */

  main::before {
    content: "";
    position: fixed;
    inset: 0;
    z-index: -1;
    -webkit-backdrop-filter: blur(7px);
    backdrop-filter: blur(7px);

    background: #0008;
    pointer-events: none;
  }

  p,
  h1,
  main,
  main::before {
    --_speed: 1s;
    transition: var(--_speed);
    transition-property: all;
  }

  :global(#app:has(canvas:hover) main) {
    --opacity: 0.3;
  }

  main:has(.work-pill:hover) {
    --opacity: 0;
  }
  main h1,
  main::before,
  p:not(:hover) {
    opacity: var(--opacity, 1);
  }

  section > p {
    position: relative;
  }

  section > p::before {
    content: "";
    position: absolute;
    inset: -1em;
    background: #0005;
    opacity: 0;
    transition: inherit;
    z-index: -1;

    --_spread: 1.5em;

    mask: linear-gradient(
      transparent,
      white var(--_spread),
      white calc(100% - var(--_spread)),
      transparent
    );

    backdrop-filter: blur(5px);
  }

  p:has(.work-pill:hover)::before,
  p:focus-within::before {
    opacity: 1;
  }

  p:has(.work-pill:hover),
  p:focus-within {
    color: var(--clr-accent);
    --_speed: 0.3s;
  }

  /* #endregion */
</style>
