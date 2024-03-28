<script>
  import { Application } from "@splinetool/runtime";
  import { onMount } from "svelte";

  import CubiqLogo from "./assets/cubiqLogo.svg?raw";
  import SvelteLogo from "./assets/svelteLogo.svg?raw";
  import scene from "./assets/spline/iphoneScreen.spline?url";
  import WorkPill from "./lib/workPill.svelte";
  import demoScreen from "./assets/demoScreen.png";
  import { fade } from "svelte/transition";
  import Timeline from "./lib/Timeline.svelte";

  let canvas;

  let click;
  let switchScene;

  let sceneNo = 1;

  let showScene = false;

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

  const loadScene = () => {
    const app = new Application(canvas);
    // app.load("https://prod.spline.design/Bq2oeyVUmqdzWQ0F/scene.splinecode")
    app.load(scene).then(() => {
      showScene = true;
      app.setVariable("previewId", sceneNo);
      app.setBackgroundColor("transparent");
    });
    // click = () => {
    //   app.setVariable("previewId", ++sceneNo % 3);
    // };

    switchScene = (id) => {
      console.log("switching scene", id);
      app.setVariable("previewId", id);
    };
  };

  onMount(() => {
    // setTimeout(loadScene, 500);
    loadScene();
  });
</script>

<!-- <img src={demoScreen} alt="demoScreen"> -->
<canvas bind:this={canvas} id="canvas3d" class:visible={showScene}></canvas>

{#if !showScene}
  <main class="loading">
    <h1>Loading</h1>
    <span>cubiq's portfolio</span>
    <div class="loader" />
  </main>
{:else}
  <main in:fade>
    <header>
      {@html CubiqLogo}
    </header>
    <section id="intro">
      <h1>
        <span>Hi, I’m Kuba</span>
        <span class="desc"
          >A Blablabla designer, wannabe engineer, and sometimes chicken living
          in the Czechia</span
        >
      </h1>
      <!-- <p class="space"> -->
      <p>
        I'm afraid I just blue myself. It's called 'taking advantage.' It's what
        gets you ahead in life. No… but I'd like to be asked! We just call it a
        sausage. There's only one man I've ever called a coward, and that's
        Brian
        <WorkPill {...previews.aquad} {switchScene} />
        Brian is my guy
      </p>
      <p>
        That's why you always leave a note! I hear the jury's still out on
        science. First place chick is hot, but has an attitude, doesn't date
        magicians. I'm a monster. Well, what
        <WorkPill {...previews.xor} {switchScene} />
        , more stuff lol
      </p>
      <p>
        We just call it a sausage. There's only one man I've ever called a
        coward,
        <WorkPill {...previews.nothing} {switchScene} />
        , a high-interest savings
      </p>
      <p>
        Weaseling out of things is important to learn. It's what separates us
        from the animals…except the weasel. Remember the time he ate my
        goldfish? And you lied and said I never had goldfish. Then why did I
        have the bowl, Bart? *Why did I have the bowl?* Lisa, vampires are
        make-believe, like elves, gremlins, and Eskimos. I didn't get rich by
        signing checks. I've done everything the Bible says — even the stuff
        that contradicts the other stuff! What good is money if it can't inspire
        terror in your fellow man? Homer no function beer well without.
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
      <span>
        ©2024
      </span>
    </footer>
  </main>
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
    opacity: .3;
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
  p:not(:is(:hover, :focus-within)) {
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
