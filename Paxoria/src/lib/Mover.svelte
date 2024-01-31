<script>
  import { expoInOut } from "svelte/easing";
  import { tweened } from "svelte/motion";
  import { desiredPosition, selectedId, selectedOffset } from "./stores";

  export let delay = 0;
  export let i = 0;
  export let itemCount = 0;
  export let yHeight = 0;

  export let sectionId = 0;

  let currentPos = 0;
  let mover;

  let width, height;
  let previousOffset = 0;

  const mod = (n, m) => {
    return ((n % m) + m) % m;
  };
  const lerp = (x, y, a) => x * (1 - a) + y * a;

  $: width = mover ? mover.clientWidth : 0;
  $: height = mover ? mover.clientHeight : 0;
  $: maxHeight = itemCount * height;

  const getCurrentPos = () => {
    return mover?.getBoundingClientRect().top;
  };


  const getDuration = (minDur, maxDur) => {
    const duration = Math.abs($selectedOffset - previousOffset) / yHeight;
    // interpolate between min and max duration
    return lerp(minDur, maxDur, duration);
  };

  const getDelay = (delay) => {
    currentPos = getCurrentPos();

    const offsetDifference = $selectedOffset - previousOffset;
    const yPos = offsetDifference > 0 ? yHeight - currentPos : currentPos;

    previousOffset = $selectedOffset;
    return (mod(yPos, maxHeight + height) / height) * delay;
  };

  // tween motion
  let pos = tweened(
    { y: $selectedOffset },
    {
      easing: expoInOut,
    }
  );

  $: {
    pos.set(
      {
        y:
          // previous pos relative to current pos
          $selectedOffset,
      },
      {
        duration: getDuration(1000, 2500),
        delay: getDelay(30),
      }
    );
  }

  const getNewPos = (y) => {
    const absoluteOffset = (i + 1) * -height;
    return absoluteOffset + mod(y + absoluteOffset, maxHeight);
  };

  const px = (value) => {
    return `${value}px`;
  };

  const handleClick = () => {
    selectedOffset.set(moveTo($desiredPosition));
    $selectedId = sectionId;
  };

  const moveTo = (y) => {
    const pos = getCurrentPos();
    delay = pos;
    return $selectedOffset + y - pos;
  };
</script>

<a
  bind:this={mover}
  href="#"
  style:--y={px(getNewPos($pos.y))}
  on:click={handleClick}
>
  <slot />
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
