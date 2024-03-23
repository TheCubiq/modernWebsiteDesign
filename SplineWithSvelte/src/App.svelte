<script>
  import { Application } from "@splinetool/runtime";
  import { onMount } from "svelte";

  import scene from "./lib/spline/iphoneXor.spline?url";

  let canvas;

  let click;

  const loadScene = () => {
    const app = new Application(canvas);
    // app.load('https://prod.spline.design/Bq2oeyVUmqdzWQ0F/scene.splinecode')
    app.load(scene).then(() => {
      const cube = app.findObjectByName("Group");
      click = () => {
        if (cube) {
          cube.rotation.y += -0.5;
        }
      };
    });
  };

  onMount(() => {
    loadScene();
  });
</script>

<main>
  <!-- ur project here -->
  <canvas bind:this={canvas} id="canvas3d"></canvas>
  <!-- <button on:click={click}>Click me</button> -->
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
