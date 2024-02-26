<!-- <aside></aside> -->

<script>
  import { get } from "svelte/store";

  // export let cursorPos = { x: 0, y: 0 };

  // export let shape;

  // let { id, name, pos } = shape;
  // let { x, y } = pos;

  let isTouching = false;

  let startPos = { x: 0, y: 0 };
  export let shapePos = { x: 0, y: 0 };

  // $: style = `transform: translate(${shapePos.x}px, ${shapePos.y}px)`;
  const getMousePos = (e) => {
    const pos = e.touches ? e.touches[0] : e;
    return { x: pos.clientX, y: pos.clientY };
  };

  const handleMouseMove = (e) => {
    if (!isTouching) return;
    // console.log(e);
    const pos = getMousePos(e);
    // x = pos.x;
    // y = pos.y;

    if (isTouching) {
      // x = pos.x;
      // y = pos.y;
      shapePos = { x: pos.x - startPos.x, y: pos.y - startPos.y };
    }
  };

  const handleMouseDown = (e) => {
    isTouching = true;
    const localPos = getMousePos(e);

    startPos = {
      x: localPos.x - shapePos.x,
      y: localPos.y - shapePos.y,
    };
    // const pos = getMousePos(e);
    // startPos = {x: pos.x, y: pos.y};
  };

  const handleMouseUp = () => {
    if (!isTouching) return;
    isTouching = false;
  };
</script>

<svelte:window on:mousemove={handleMouseMove} on:mouseup={handleMouseUp} />

<!-- {style} -->
<div
  style:--y={`${shapePos.y}px`}
  style:--x={`${shapePos.x}px`}
  role="cell"
  tabindex="-1"
  on:mousedown|preventDefault={handleMouseDown}
  on:touchstart|preventDefault={handleMouseDown}
>
  <!-- <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" >
    <rect x="0" y="0" width="100" height="100" fill="white" />
  </svg> -->
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
  >
    <circle cx="50" cy="50" r="50" fill="#0f0a" />
  </svg>
  <!-- <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" > -->
  <!-- <circle cx="50" cy="50" r="50" fill="black" /> -->
  <!-- </svg> -->
</div>

<style>
  :root {
    --x: 0px;
    --y: 0px;
  }
  div {
    position: absolute;
    width: 7rem;
    /* aspect-ratio: 1; */
    /* background-color: #fff; */

    /* display: contents; */

    line-height: 0;

    mix-blend-mode: difference;

    transform: translate(var(--x, 0px), var(--y, 0px));
  }
</style>
