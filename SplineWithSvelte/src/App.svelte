<script>
  import { Application } from "@splinetool/runtime";
  import { onMount } from "svelte";

  import scene from "./lib/spline/iphoneScreen.spline?url";

  let canvas;

  let click;

  let sceneNo = 0;

  const loadScene = () => {
    const app = new Application(canvas);
    // app.load('https://prod.spline.design/Bq2oeyVUmqdzWQ0F/scene.splinecode')
    app.load(scene)
    // .then(() => {
    //   const cube = app.findObjectByName("Group");
    //   click = () => {
    //     if (cube) {
    //       // cube.rotation.y += -0.5;
    //     }
    //   };
    // });
    click = () => {
      app.setVariable('previewId', (++sceneNo % 3));
    };
  };

  onMount(() => {
    loadScene();
  });
</script>

<main>
  <!-- ur project here -->
  <canvas bind:this={canvas} id="canvas3d"></canvas>
  <button on:click={click}>Next</button>
</main>

<style>
  main {
    flex: 1;
    /* display: grid;
    place-items: center;
    height: 100vh;
    position: relative;
    */
    overflow: hidden; 
  }

  canvas {
    /* width: 100vw; */
    aspect-ratio: none;
  }

  button {
    position: fixed;
    inset-inline: 0;
    width: 10rem;
    margin-inline: auto;
    bottom: 2em;
  }
</style>
