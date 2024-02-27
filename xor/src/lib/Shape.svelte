<!-- <aside></aside> -->

<script>
  import { onMount } from "svelte";
  import { spring, tweened } from "svelte/motion";
  import { fade } from "svelte/transition";

  export let id;
  export let cursorPos = { x: 0, y: 0 };

  export let boardPoints = [];
  export let boardSize;

  export let blockSize = 1;

  let isTouching = false;

  let startPos = { x: 0, y: 0 };
  export let shapePos = { x: 0, y: 0 };

  const toRelative = (coord) => {
    return coord / blockSize;
  };

  const randomCoord = () => {
    return Math.random();
  };

  // the board position mapped in percentages (0-1)
  const localShapePos = spring(
    {
      x: randomCoord(),
      y: randomCoord()
    },
    {
      stiffness: .05,
      damping: .4,
    }
  );

  const getMousePos = (e) => {
    let pos = e.touches ? e.touches[0] : e;
    return { x: pos.clientX, y: pos.clientY }
  };

  const handleMouseMove = (e) => {
    if (!isTouching) return;
    // console.log(e);
    const pos = getMousePos(e);

    if (isTouching) {
      localShapePos.set({
        x: toRelative(pos.x) - startPos.x,
        y: toRelative(pos.y) - startPos.y ,
      });
    }
  };

  const handleMouseDown = (e) => {
    isTouching = true;
    const localPos = getMousePos(e);

    const mobileOffset = e.touches ? 30 : 0;

    startPos = {
      x: toRelative(localPos.x) - $localShapePos.x,
      y: toRelative(localPos.y + mobileOffset) - $localShapePos.y,
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

  
  const updateSnapToGrid = (coords) => {
    const { x, y } = snapToGrid(
      coords.x,
      coords.y
    );

    localShapePos.set({
      x: x / boardSize,
      y: y / boardSize,
    });
  };
   
  const handleMouseUp = () => {
    if (!isTouching) return;
    isTouching = false;

    
    updateSnapToGrid({
      x: $localShapePos.x * boardSize,
      y: $localShapePos.y * boardSize,
    })

  };

  let delay = 100 * id + 500;

  onMount(() => {
    // updateSnapToGrid({x:5, y:5});
    setTimeout(() => {
      updateSnapToGrid(shapePos);
    }, delay);
    // updateSnapToGrid(shapePos);
  });

</script>

<svelte:window 
  on:mousemove={handleMouseMove} 
  on:touchmove={handleMouseMove}
  on:mouseup={handleMouseUp} 
  on:touchend={handleMouseUp}
  />

<!-- {style} -->
<div
  style:--y={`${$localShapePos.y * 100}%`}
  style:--x={`${$localShapePos.x * 100}%`}
  style:--board-size={boardSize}
  role="cell"
  tabindex="-1"
  on:mousedown|preventDefault={handleMouseDown}
  on:touchstart|preventDefault={handleMouseDown}

  transition:fade|global={{duration: 100, delay}}
>
  <svg
    width="100%"
    height="100%"
    viewBox="1 1 1 1"
    preserveAspectRatio="none"
    fill="currentColor"
  >
    <!-- <circle cx="50" cy="50" r="50" fill="#fff" /> -->
    <path d="M 0 0 L 2 0 L 0 2 Z" />
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


    /* transform: translate(-50%, -50%); */
  }
</style>
