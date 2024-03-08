<!-- <aside></aside> -->

<script>
  import { onMount } from "svelte";
  import { spring } from "svelte/motion";
  import { fade, fly } from "svelte/transition";

  import { BOARD_SIZE } from "./constants";
  import { cubicInOut } from "svelte/easing";
  import { toSvgPath } from "./helperFunctions";

  export let introDelay = -1;

  export let shapeSkin;

  export let shake = false;

  export let hidden = false;

  export let boardPoints = [];
  // export let BOARD_SIZE;

  export let blockSize = 1;

  let isTouching = false;

  let startPos = { x: 0, y: 0 };

  export let shape = null;

  const toRelative = (coord) => {
    return coord / blockSize;
  };

  const randomCoord = () => {
    return Math.random() * 100;
  };

  // the board position mapped in percentages (0-1)
  const localShapePos = spring(
    {
      x: randomCoord(),
      y: randomCoord(),
    },
    {
      stiffness: 0.1,
      damping: 0.25,
    }
  );

  const getMousePos = (e) => {
    let pos = e.touches ? e.touches[0] : e;
    return { x: pos.clientX, y: pos.clientY };
  };

  const handleMouseMove = (e) => {
    if (!isTouching) return;
    if (shake) return
    const pos = getMousePos(e);

    if (isTouching) {
      localShapePos.set({
        x: toRelative(pos.x) * 100 - startPos.x,
        y: toRelative(pos.y) * 100 - startPos.y,
      });
    }
  };

  const handleMouseDown = (e) => {
    isTouching = true;
    const localPos = getMousePos(e);

    const mobileOffset = e.touches ? 30 : 0;

    startPos = {
      x: toRelative(localPos.x) * 100 - $localShapePos.x,
      y: toRelative(localPos.y + mobileOffset) * 100 - $localShapePos.y,
    };
  };

  const snapToGrid = (x, y) => {
    const closestPoint = boardPoints.flat().reduce(
      (acc, point) => {
        const distance = Math.sqrt((point.x - x) ** 2 + (point.y - y) ** 2);
        if (distance < acc.distance) {
          return { distance, point };
        }
        return acc;
      },
      { distance: Infinity, point: { x: 0, y: 0 } }
    );

    return closestPoint.point;
  };

  const updateSnapToGrid = (coords, update = false) => {
    const { x, y } = snapToGrid(coords.x, coords.y);

    localShapePos.set({
      x: (x / BOARD_SIZE) * 100,
      y: (y / BOARD_SIZE) * 100,
    });
    if (update) {
      shape?.setPos({ x: x + .5, y: y + .5 });
    }
  };

  const handleMouseUp = () => {
    if (!isTouching) return;
    isTouching = false;

    updateSnapToGrid({
      x: ($localShapePos.x / 100) * BOARD_SIZE,
      y: ($localShapePos.y / 100) * BOARD_SIZE,
    }, true);
  };

  const svgViewBox = (origin, size = { x: 1, y: 1 }) => {
    return `${origin.x} ${origin.y} ${size.x} ${size.y}`;
  };

  let delay = introDelay == -1 ? 0 : 100 * introDelay + 500;
  let snappingEnabled = false; 

  $: if (snappingEnabled) {
    updateSnapToGrid(shape.pos);
  }


  onMount(() => {
    setTimeout(() => {
      snappingEnabled = true;
      updateSnapToGrid(shape.pos, true)
    }, delay);
  });
</script>

<svelte:window
  on:mousemove={handleMouseMove}
  on:touchmove={handleMouseMove}
  on:mouseup={handleMouseUp}
  on:touchend={handleMouseUp}
/>

<div
  class:hidden
  class:shake
  style:--y={`${$localShapePos.y}%`}
  style:--x={`${$localShapePos.x}%`}
  role="cell"
  tabindex="-1"
  on:mousedown|preventDefault={handleMouseDown}
  on:touchstart|preventDefault={handleMouseDown}
  in:fade|global={{ duration: 100, delay }}
  out:fly|global={{ y: 300, duration: 2000, delay: 200 + introDelay*100, easing: cubicInOut}}
>
  <svg
    width="100%"
    height="100%"
    viewBox={svgViewBox(shapeSkin.origin)}
    preserveAspectRatio="none"
    fill="currentColor"
  >
    <path d={toSvgPath(shapeSkin.path)} />
  </svg>
</div>

<style>
  :root {
    --x: 0px;
    --y: 0px;
  }

  svg {
    shape-rendering: crispEdges;
    overflow: visible;
  }

  svg > * {
    pointer-events: all;
  }

  .hidden {
    opacity: 0;
    pointer-events: none;
  }

  .hidden * {
    pointer-events: none;
  } 

  div {
    pointer-events: none;
    position: absolute;
    /* width: 7%; */

    width: calc(100% / var(--board-size));

    line-height: 0;

    mix-blend-mode: difference;

    left: var(--x);
    top: var(--y);

    color: white;
    user-select: none;
    -webkit-user-select: none; /* disable selection/Copy of UIWebView */
    -webkit-touch-callout: none; /* disable the IOS popup when long-press on a link */

    opacity: 1;
    transition: opacity 1s;

    /* transform: translate(-50%, -50%); */
  }

  .shake {
    animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both infinite;
    transform-origin: left top;
  }

  @keyframes shake {

  0% { 
        transform: rotate(5deg); 
    } 
  
    25% { 
        transform: rotate(-6deg); 
    } 
  
    50% { 
        transform: rotate(5deg); 
    } 
  
    75% { 
        transform: rotate(-6deg); 
    } 
  
    100% { 
        transform: rotate(5deg); 
    } 
}

</style>
