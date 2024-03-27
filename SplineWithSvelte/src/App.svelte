<script>
  import { Application } from "@splinetool/runtime";
  import { onMount } from "svelte";

  import CubiqLogo from "./assets/cubiqLogo.svg?raw";
  import scene from "./assets/spline/iphoneScreen.spline?url";
  import WorkPill from "./lib/workPill.svelte";
  // import demoScreen from "./assets/demoScreen.png";
  import { fade } from "svelte/transition";

  let canvas;

  let click;
  let switchScene;

  let sceneNo = 1;

  let showScene = false;

  const loadScene = () => {
    const app = new Application(canvas);
    app
      // .load("https://prod.spline.design/Bq2oeyVUmqdzWQ0F/scene.splinecode")
      app.load(scene)
      .then(() => {
        showScene = true;
        app.setVariable("previewId", sceneNo);
      });
    click = () => {
      app.setVariable("previewId", ++sceneNo % 3);
    };

    switchScene = (id) => {
      console.log("switching scene", id);
      app.setVariable("previewId", id);
    }
  };


  onMount(() => {
    loadScene();
  });
</script>

<!-- <img src={demoScreen} alt="demoScreen"> -->
<canvas bind:this={canvas} id="canvas3d" class:visible={showScene}></canvas>

{#if showScene}  
<main in:fade>
  <!-- <button on:click={click}>Next</button> -->
  <header>
    {@html CubiqLogo }
    <!-- <img src={cubiqLogo} alt="cubiqLogo" /> -->
  </header>
  <section>
    <h1>
      <span>Hi, I’m Kuba</span>
      <span  class="desc"
        >A Blablabla designer, wannabe engineer, and sometimes chicken living in
        the Czechia</span
      >
    </h1>
    <!-- <p class="space"> -->
    <p>
      I'm afraid I just blue myself. It's called 'taking advantage.' It's what
      gets you ahead in life. No… but I'd like to be asked! We just call it a
      sausage. There's only one man I've ever called a coward, and that's Brian
      <WorkPill name="Aquad" {switchScene} id={2} />
      Brian is my guy
    </p>
    <p>
      That's why you always leave a note! I hear the jury's still out on
      science. First place chick is hot, but has an attitude, doesn't date
      magicians. I'm a monster. Well, what
      <WorkPill name="XOR" {switchScene} id={1} />
      , more stuff lol
    </p>
    <p>
      We just call it a sausage. There's only one man I've ever called a coward,
      <WorkPill name="Nothing" {switchScene} id={0} />
      , a high-interest savings
    </p>
    <p>
      Weaseling out of things is important to learn. It's what separates us from
      the animals…except the weasel. Remember the time he ate my goldfish? And
      you lied and said I never had goldfish. Then why did I have the bowl,
      Bart? *Why did I have the bowl?* Lisa, vampires are make-believe, like
      elves, gremlins, and Eskimos. I didn't get rich by signing checks. I've
      done everything the Bible says — even the stuff that contradicts the other
      stuff! What good is money if it can't inspire terror in your fellow man?
      Homer no function beer well without.
    </p>
    <p>
      They only come out in the night. Or in this case, the day. And here I am
      using my own lungs like a sucker. I didn't get rich by signing checks.
      …And the fluffy kitten played with
      <WorkPill name="Svelte" />
      My favorite framework srsly
    </p>
  </section>
</main>

{:else}
    <h1>Loading...</h1>
{/if}


<style>
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

  [alt="demoScreen"] {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  main {
    flex: 1;
    height: max-content;
    /* height: 100vh; */
    padding: 6%;
    padding-inline-end: 3%;

    max-width: 45rem;

    pointer-events: none;

    z-index: 1;
  }

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

  section {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  main > * {
    pointer-events: all;
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

  /* #region peek */

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

  main:has(button:hover) {
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

  p:has(button:hover)::before,
  p:focus-within::before {
    opacity: 1;
  }

  p:has(button:hover),
  p:focus-within {  
    color: var(--clr-accent);
    --_speed: .3s;
  }

  /* #endregion */

  .space {
    margin-bottom: 22rem;
  }
</style>
