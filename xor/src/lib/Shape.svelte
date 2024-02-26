<!-- <aside></aside> -->

<script>
  import { onMount } from "svelte";
  import { spring, tweened } from "svelte/motion";
  import { get } from "svelte/store";

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

  const localShapePos = spring(
    {
      x: shapePos.x / boardSize,
      y: shapePos.y / boardSize,
    },
    {
      // stiffness: 0.06,
      // damping: 0.2,
    }
  );

  const getMousePos = (e) => {
    const pos = e.touches ? e.touches[0] : e;
    return { x: pos.clientX, y: pos.clientY };
  };

  // const toRelativePos = (x, y) => {
  //   return {
  //     x: x / blockSize,
  //   };
  // };

  const handleMouseMove = (e) => {
    if (!isTouching) return;
    // console.log(e);
    const pos = getMousePos(e);

    if (isTouching) {
      localShapePos.set({
        x: toRelative(pos.x) - startPos.x,
        y: toRelative(pos.y) - startPos.y,
      });
    }
  };

  const handleMouseDown = (e) => {
    isTouching = true;
    const localPos = getMousePos(e);

    startPos = {
      x: toRelative(localPos.x) - $localShapePos.x,
      y: toRelative(localPos.y) - $localShapePos.y,
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

  
  const updateSnapToGrid = () => {
    const { x, y } = snapToGrid(
      $localShapePos.x * boardSize,
      $localShapePos.y * boardSize
    );

    localShapePos.set({
      x: x / boardSize,
      y: y / boardSize,
    });
  };
   

  const handleMouseUp = () => {
    if (!isTouching) return;
    isTouching = false;
    updateSnapToGrid()

  };

  onMount(() => {
    updateSnapToGrid();
  });

</script>

<svelte:window on:mousemove={handleMouseMove} on:mouseup={handleMouseUp} />

<!-- {style} -->
<div
  style:--y={`${$localShapePos.y * 100}%`}
  style:--x={`${$localShapePos.x * 100}%`}
  style:--board-size={boardSize}
  role="cell"
  tabindex="-1"
  on:mousedown|preventDefault={handleMouseDown}
  on:touchstart|preventDefault={handleMouseDown}
>
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
  >
    <!-- <circle cx="50" cy="50" r="50" fill="#fff" /> -->
    <rect x="0" y="0" width="100" height="100" fill="#fff" />
  </svg>
</div>

<style>
  :root {
    --x: 0px;
    --y: 0px;
  }
  
  svg {
    shape-rendering: crispEdges;
  }

  svg > * {
    pointer-events: all;
  }

  div {
    pointer-events: none;
    position: absolute;
    /* width: 7%; */

    --_size: calc(100% / var(--board-size) * 2);

    width: var(--_size);

    line-height: 0;

    mix-blend-mode: difference;

    left: calc(var(--x) - var(--_size) / 2); 
    top: calc(var(--y) - var(--_size) / 2);

    /* transform: translate(-50%, -50%); */
  }
</style>
