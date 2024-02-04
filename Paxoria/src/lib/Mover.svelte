<script>
  import { expoInOut } from "svelte/easing";
  import { tweened } from "svelte/motion";
  import {
    desiredPosition,
    requestedUpdate,
    selectedSection,
    selectedOffset,
    scrollerData,
  } from "./stores";
  import { lerp, mod } from "./helpers";

  export let delay = 0;
  export let i = 0;
  export let itemCount = 0;
  export let yHeight = 0;

  export let sectionId = 0;

  let currentPos = 0;
  let mover;

  let width,
    height = 0;
  let previousOffset = 0;
  
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

    // check if to delay from the top or the bottom
    const yPos = offsetDifference > 0 ? yHeight - currentPos : currentPos;

    previousOffset = $selectedOffset;
    return (mod(yPos + height, maxHeight + height) / height) * delay;
  };

  const updatePos = (y) => {
    pos.set(
      {
        y,
      },
      {
        duration: getDuration(1000, 2500),
        delay: getDelay(delay),
      }
    );
  };

  // tween motion
  let pos = tweened(
    { y: $selectedOffset },
    {
      easing: expoInOut,
    }
  );

  $: {updatePos($selectedOffset)};


  // check when the switch (closedNav) should be triggered
  const checkSwitch = (y, triggerPerc) => {

    // percentage of the current transition progress
    const currentProgress =
      ((y - previousY) / ($selectedOffset - previousY)) * 100;

    // if the progress is greater than the trigger percentage
    if (currentProgress > triggerPerc) {
      $scrollerData.closedNav = true;
    }

    if (currentProgress >= 99){
      $scrollerData.isPlaying = false;
    }

  };

  // capped position of the mover
  const getNewPos = (y) => {

    // for the current selected section, switch nav to closed state
    if (i === selectedId) {
      checkSwitch(y, 80);
    }

    // offset where all of the movers are on the same position
    const absoluteOffset = i * height;
    
    // start from the beginning if it goes over the max height
    const cappedY = mod(y + absoluteOffset, maxHeight) - height;

    // calculate the position of the mover
    return -1 * absoluteOffset + cappedY;
  };

  const px = (value) => {
    if (!value) return "0px";
    return `${value}px`;
  };

  // to determine which mover is the clicked one
  let clicked = false;

  const handleClick = () => {
    clicked = true;

    // update the selected section
    $selectedSection = sectionId;
    $scrollerData.selectedId = i;

    // wait for Hero data to reload
    $requestedUpdate = true;
  };

  let previousY = 0;

  // when Hero data is reloaded
  // (desiredPosition is updated)
  // (for clicked mover only)
  $: if (clicked === true && $requestedUpdate === false) {
    clicked = false;

    // for animation calculations
    previousY = $selectedOffset;

    // measure the distance for the new offset
    $selectedOffset = measureTo($desiredPosition);
    $scrollerData.isPlaying = true;
  }

  // which items to use for the line offset
  let isUsed = false;

  // on successful Hero update
  $: {
    isUsed = targetSelected(i, $pos.y);
  }

  // measure the distance for the new offset
  const measureTo = (to) => {
    return $selectedOffset + to - getCurrentPos();
  };

  $: ({ selectedId, lineCount } = $scrollerData);

  const targetSelected = (id, updater) => {
    // get relative id of mover from selectedId
    const relativeId = mod(id - selectedId, itemCount);

    // if the relative id is within the line count
    // (0 .. lineCount)
    const isWithin = (relativeId >= 0 && relativeId < lineCount)

    if (isWithin) {
      // update the line position
      $scrollerData.linePositions[relativeId] =
      mover.getBoundingClientRect().top -
        ($desiredPosition + height * relativeId);
    }

    return isWithin;
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
