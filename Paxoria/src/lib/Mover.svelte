<script>
  import { onMount } from "svelte";
  import { quintInOut } from "svelte/easing";
  import { tweened } from "svelte/motion";
  import { selectedOffset } from "./stores";
  import { transform } from "svelte-motion";

  
  export let delay = 0;

  export let i = 0;
  export let itemCount = 0;

  export let scrollOffset = 0;

  export let yHeight = 0;

  let currentPos = 0;

  let mover;

  let width, height;

  // let previousOffset = 0;

  const mod = (n, m) => {
    return ((n % m) + m) % m;
  };

  $: width = mover ? mover.clientWidth : 0;
  $: height = mover ? mover.clientHeight : 0;

  const getCurrentPos = () => {
    return mover?.getBoundingClientRect().top;
  };

  const getDelay = () => {

    currentPos = getCurrentPos();
    const delay = $selectedOffset - currentPos 

    // const pos = getNewPos($selectedOffset - getCurrentPos() );
    // const delay = pos;

    // - previousOffset;
    // previousOffset = $selectedOffset;
    return delay
  };

  // tween motion
  let pos = tweened(
    { y: $selectedOffset },
    {
      duration: 3000,
      easing: quintInOut,
    }
  );

  $: {
    pos.set({
      y:
        // previous pos relative to current pos
        $selectedOffset,
    },
    {
      // delay:  getDelay(),
    }
    );
  }



  // let currentPos = 0;

  // $: if (scrollOffset) {
  //   currentPos = mover ? mover.getBoundingClientRect().bottom : 0;
  // }

  // let currentPos = 0
  // $: if ($pos.y || scrollOffset) currentPos = mover ? mover.getBoundingClientRect()?.top : 0;


  $: currentPos = mover ? (mover.getBoundingClientRect().top + scrollOffset) : 0;

  $: maxHeight = (itemCount) * height;
  $: absoluteOffset = (i+1) * height;

  const getNewPos = (y) => {
    return (-absoluteOffset) + (mod(y+absoluteOffset, maxHeight));
  };

  const px = (value) => {
    // return `${y}px`;
    return `${value}px`;
    // return `${mod(height, itemCount * height)}px`;
  };

  const handleClick = (e) => {
    console.log(e);
  };

  const moveTo = (y) => {
    const pos = getCurrentPos();
    delay = pos;
    return $selectedOffset + y - pos;
  };


</script>

<!-- style:--x={`${0}px`} -->
  <!-- style:transform={`transtateY(${px($pos.y)})`} -->
  <!-- style:background-color={i % 2 ? "red" : "green"} -->
  <!-- style={`transform:transtateY(${$pos.y}px)`}  -->
  <a
  bind:this={mover}
  href="#"
  
  style:--y={px(getNewPos($pos.y))}

  on:click={() => {
    selectedOffset.set(moveTo(640));
  }}
>
  <slot />
  <!-- {Math.floor(yHeight - currentPos)}   -->
  <!-- {i} -->
  <!-- {currentPos} -->
  <!-- {absoluteOffset} -->
  <!-- {$selectedOffset}
  {absoluteOffset + $selectedOffset} -->
  <!-- {maxHeight} -->
</a>

<style>
  a {
    position: relative;
    transform: translateY(var(--y));

    white-space: nowrap;
  }

  a {
    text-decoration: none;
    color: var(--clr-text);
    transition: color 0.2s ease-in-out;
  }

  a:hover {
    color: var(--clr-secondary);
  }
</style>
