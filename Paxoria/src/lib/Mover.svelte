<script>
  import { onMount } from "svelte";
  import { quintInOut } from "svelte/easing";
  import { tweened } from "svelte/motion";

  export let y = 0;
  export let delay = 0;

  export let i = 0;
  export let itemCount = 0;

  let mover;

  let width, height;

  const mod = (n, m) => {
    return ((n % m) + m) % m;
  };
  
  $: width = mover ? mover.clientWidth : 0;
  $: height = mover ? mover.clientHeight : 0;

  // tween motion
  let pos = tweened(
    { y: 0 },
    {
      duration: 1000,
      delay: (delay*mod(i,itemCount)) || 0,
      easing: quintInOut,
    }
  );
  
  $: pos.set({ y });
  


  const getProperOffsetPx = (i, y) => {
    return `${
      
      ((i+1)*height*-1) + (mod((i+y),itemCount)*height)
      // (itemCount)*height
      // 0
    }px`;
  };
  
</script>

<div
  bind:this={mover}
  style:--x={`${0}px`}
  style:--y={getProperOffsetPx(i, $pos.y)}
>
  <slot />
</div>

<style>
  div {
    transform: translate(var(--x), var(--y));
  }
</style>
