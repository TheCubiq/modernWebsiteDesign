<script>
  import { onMount } from "svelte";
  import { quintInOut } from "svelte/easing";
  import { tweened } from "svelte/motion";

  export let y = 0;
  export let delay = 0;

  export let i = 0;
  export let itemCount = 0;

  export let offsetRow = 0;

  export let scrollOffset = 0;

  // export let currentPos = 0;


  let mover;

  let width, height;

  let previousId = 0;

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
      // delay: (delay*mod(i,itemCount)) || 0,
      delay: 0,
      easing: quintInOut,
    }
  );

  $: {
    pos.set({
      y:
        // previous pos relative to current pos
        y
    });
  }

  let currentPos = 0;

  $: if (scrollOffset) {
    currentPos = mover ? (mover.getBoundingClientRect().top) : 0;
  }

  // $: currentPos = mover ? (mover.getBoundingClientRect().bottom + scrollOffset) : 0;

  

  const getProperOffsetPx = (id, selectedId) => {
    return `${
      ((id * -1) + mod(id - selectedId, itemCount)) * height
    }px`;
  };
</script>

<div
  bind:this={mover}
  style:--x={`${0}px`}
  style:--y={getProperOffsetPx(i, $pos.y)}
>
  <slot />
{currentPos}
</div>

<style>
  div {
    transform: translate(var(--x), var(--y));
  }
</style>
