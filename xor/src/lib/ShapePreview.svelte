<!-- <aside></aside> -->

<script>
  import { onMount } from "svelte";
  import { spring, tweened } from "svelte/motion";
  import { fade } from "svelte/transition";

  import { BOARD_SIZE } from "./constants";
  import { toSvgPath } from "./helperFunctions";
  
  export let shapeSkin;

    
  export let shapePos = { x: 0, y: 0 };
  
  export let zoom = 1.5;

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
  transition:fade|global={{ duration: 1000 }}
  style:--board-size={(BOARD_SIZE / zoom)}
>
  <svg
    width="100%"
    height="100%"
    viewBox={svgViewBox(shapeSkin.origin)}
    preserveAspectRatio="none"
    fill="currentColor"
  >
    <path d={toSvgPath(shapeSkin?.path)} />
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
  }
</style>
