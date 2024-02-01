<script>
  import { expoInOut } from "svelte/easing";
  import { tweened } from "svelte/motion";
  import {
    desiredPosition,
    waitForChange,
    selectedId,
    selectedOffset,
  } from "./stores";

  export let delay = 0;
  export let i = 0;
  export let itemCount = 0;
  export let yHeight = 0;

  export let sectionId = 0;

  let currentPos = 0;
  let mover;

  let width, height = 0;
  let previousOffset = 0;

  const mod = (n, m) => {
    return ((n % m) + m) % m;
  };
  const lerp = (x, y, a) => x * (1 - a) + y * a;

  let rect

  // $: height = rect?.height;
  // $: width = rect?.width;
  $: width = mover ? mover.clientWidth : 0;
  $: height = mover ? mover.clientHeight : 0;

  // $: {
  //   height = rect.height;
  //   width = rect.width;
  // }

  // $: width = rect.height;
  // $: height = mover ? mover.clientHeight : 0;



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
    return (mod(yPos  + height, maxHeight + height) / height) * delay;
  };

  // tween motion
  let pos = tweened(
    { y: $selectedOffset },
    {
      easing: expoInOut,
    }
  );

  $: 
  // if ($selectedOffset)
  // if ($selectedId) 
  {
    pos.set(
      {
        y:
          // previous pos relative to current pos
          $selectedOffset,
      },
      {
        duration: getDuration(1000, 2500),
        delay: getDelay(delay),
      }
    );
  }

  const getNewPos = (y) => {
    // console.log(y)
    const absoluteOffset = (i) * height;
    return (-1*absoluteOffset) + mod(y + absoluteOffset, maxHeight) - height;
    // return absoluteOffset + mod((i + 1)*height + y, maxHeight)
  };

  const px = (value) => {
    return `${value}px`;
  };

  let clicked = false;

  const handleClick = () => {
    // debugger;

    // if ($selectedOffset == measureTo($desiredPosition)) return;

    clicked = true;
    
    // previous = $selectedId;
    
    $selectedId = sectionId;
    $waitForChange = true;
    // console.log($selectedId, "clicked");
    // console.log("mover: (old)", $desiredPosition);
    // getPositionOfHeroDescription()
    // selectedOffset.set(measureTo($desiredPosition));
  };
  
  $: if (clicked === true && $waitForChange === false) {
    clicked = false;
    $selectedOffset = measureTo($desiredPosition);
    // selectedOffset.set(measureTo($desiredPosition));
  }

  // $: {
  //   $selectedOffset = 0;
  //   selectedOffset.set(0);
  // } 

  // $: console.log($pos.y)

  const measureTo = (y) => {
    // debugger;
    // delay = pos;
    return $selectedOffset + y - getCurrentPos();
  };
</script>

<!-- on:resize={handleResize} -->
<!-- bind:contentRect={rect} -->
<a
  bind:this={mover}
  href="#"
  style:--y={px(getNewPos($pos.y))}
  on:click={handleClick}
>
  <slot />
  <!-- {i} -->
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
