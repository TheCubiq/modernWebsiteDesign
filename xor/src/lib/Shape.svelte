<!-- <aside></aside> -->

<script>
  import { onMount } from "svelte";
  import { spring, tweened } from "svelte/motion";
  import { fade } from "svelte/transition";
  import skins from "./skins";

  export let id;
  export let cursorPos = { x: 0, y: 0 };

  export let shapeSkin;

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
    // console.log(e);
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

  const updateSnapToGrid = (coords) => {
    const { x, y } = snapToGrid(coords.x, coords.y);

    localShapePos.set({
      x: (x / boardSize) * 100,
      y: (y / boardSize) * 100,
    });
  };

  const handleMouseUp = () => {
    if (!isTouching) return;
    isTouching = false;

    updateSnapToGrid({
      x: ($localShapePos.x / 100) * boardSize,
      y: ($localShapePos.y / 100) * boardSize,
    });
  };

  const path = [
    { x: 0, y: 0 },
    { x: 1, y: 0 },
    { x: 1, y: 1 },
    { x: 0, y: 1 },
  ];

  const toSvgPath = (array) => {
    return (
      array
        .map((point, i) => {
          return `${i === 0 ? "M" : "L"} ${point.x} ${point.y}`;
        })
        .join(" ") + " Z"
    );
  };

  const svgViewBox = (origin, size = { x: 1, y: 1 }) => {
    return `${origin.x} ${origin.y} ${size.x} ${size.y}`;
  };

  let delay = 100 * id + 500;

  onMount(() => {
    setTimeout(() => {
      updateSnapToGrid(shapePos);
    }, delay);
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
  style:--y={`${$localShapePos.y}%`}
  style:--x={`${$localShapePos.x}%`}
  style:--board-size={boardSize}
  role="cell"
  tabindex="-1"
  on:mousedown|preventDefault={handleMouseDown}
  on:touchstart|preventDefault={handleMouseDown}
  transition:fade|global={{ duration: 100, delay }}
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
