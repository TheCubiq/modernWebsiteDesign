<script>
  import { onMount } from "svelte";
  import { quintInOut } from "svelte/easing";
  import { tweened } from "svelte/motion";
  import { selectedOffset } from "./stores";

  
  export let delay = 0;

  export let i = 0;
  export let itemCount = 0;

  export let scrollOffset = 0;

  // export let currentPos = 0;

  let mover;

  let width, height;

  let previousOffset = 0;

  const mod = (n, m) => {
    return ((n % m) + m) % m;
  };

  $: width = mover ? mover.clientWidth : 0;
  $: height = mover ? mover.clientHeight : 0;

  const getCurrentPos = () => {
    return mover?.getBoundingClientRect().top;
  };

  const getDelay = () => {
    const pos = getCurrentPos();
    const delay = $selectedOffset;
    previousOffset = $selectedOffset;
    return delay
  };

  // tween motion
  let pos = tweened(
    { y: 0 },
    {
      duration: 3000,
      // delay: (delay*mod(i,itemCount)) || 0,
      delay: 0,
      // delay: 0,
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
      delay:  getDelay(),
    }
    );
  }



  // let currentPos = 0;

  // $: if (scrollOffset) {
  //   currentPos = mover ? mover.getBoundingClientRect().top : 0;
  // }

  // let currentPos = 0
  // $: if ($pos.y || scrollOffset) currentPos = mover ? mover.getBoundingClientRect()?.top : 0;


  $: currentPos = mover ? (mover.getBoundingClientRect().top + scrollOffset) : 0;

  $: maxHeight = (itemCount) * height;
  $: absoluteOffset = i * height;

  const px = (y) => {
    // return `${y}px`;
    return `${(-absoluteOffset) + (mod(y+absoluteOffset, maxHeight))}px`;
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

<a
  bind:this={mover}
  style:--x={`${0}px`}
  style:--y={px($pos.y)}
  href="#"
  on:click={() => {
    // page = item;
    selectedOffset.set(moveTo(640));
    // previousId = item.id;
    
  }}
>
  <slot />
  {currentPos}
  <!-- {absoluteOffset} -->
  <!-- {$selectedOffset}
  {absoluteOffset + $selectedOffset} -->
  <!-- {maxHeight} -->
</a>

<style>
  a {
    position: relative;
    transform: translate(var(--x), var(--y));
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
