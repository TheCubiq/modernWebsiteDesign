<!-- <aside></aside> -->

<script>
  import { onMount } from "svelte";
  import { spring, tweened } from "svelte/motion";
  import { fade } from "svelte/transition";
  import skins from "./skins";

  import { BOARD_SIZE } from "./constants";
  
  export let shapeSkin;
  
  
  export let shapePos = { x: 0, y: 0 };
  
  let zoom = 2.5;
  
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

  let delay = 500

  $: localPos = {
    x: (shapePos.y - .5) * 100 * zoom / BOARD_SIZE - 50*(zoom-1),
    y: (shapePos.x - .5) * 100 * zoom / BOARD_SIZE - 50*(zoom-1)
  }

</script>

<div
  style:--y={`${localPos.x}%`}
  style:--x={`${localPos.y}%`}
  role="cell"
  tabindex="-1"
  transition:fade|global={{ duration: 100, delay }}
  style:--board-size={(BOARD_SIZE / zoom)}
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
