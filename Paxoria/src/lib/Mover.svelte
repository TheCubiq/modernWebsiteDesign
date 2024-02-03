<script>
  import { expoInOut } from "svelte/easing";
  import { tweened } from "svelte/motion";
  import {
    desiredPosition,
    waitForChange,
    selectedSection,
    selectedOffset,
    descriptionPositions,
  } from "./stores";
  import { onMount } from "svelte";

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
    return (mod(yPos + height, maxHeight + height) / height) * delay;
  };

  // tween motion
  let pos = tweened(
    { y: $selectedOffset },
    {
      easing: expoInOut,
    }
  );

  // if ($selectedOffset)
  // if ($selectedId)
  $: {
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

  const checkSwitch = (y, triggerPerc) => {
    // console.log({
    //   current: y,
    //   start: previousY,
    //   end: $selectedOffset,
    // })

    const currentProgress = (y - previousY) / ($selectedOffset - previousY) * 100;

    if (currentProgress > triggerPerc) {
      $descriptionPositions.closedNav = true;
    }
  }


  const getNewPos = (y) => {

    if (i === selectedId) {
      checkSwitch(y,80);
    }

    const absoluteOffset = i * height;
    return -1 * absoluteOffset + mod(y + absoluteOffset, maxHeight) - height;
  };

  const px = (value) => {
    return `${value}px`;
  };

  let clicked = false;

  const handleClick = () => {
    clicked = true;

    $selectedSection = sectionId;
    $descriptionPositions.selectedId = i;
    $waitForChange = true;
  };

  let previousY = 0;

  $: if (clicked === true && $waitForChange === false) {
    clicked = false;
    previousY = $selectedOffset
    $selectedOffset = measureTo($desiredPosition);
    // selectedOffset.set(measureTo($desiredPosition));
  }

  // $: if (i === 0) {
  //   $selectedOffset = measureTo($desiredPosition);
  // }

  let selected = false;

  $: if (!$waitForChange) {
    selected = targetSelected(i, $pos.y);
  }

  // $: {
  //   $selectedOffset = 0;
  //   selectedOffset.set(0);
  // }

  // $: console.log($pos.y)

  const measureTo = (to) => {
    // debugger;
    // delay = pos;
    return $selectedOffset + to - getCurrentPos();
  };

  // $: targetMover = $descriptionPositions.selectedId
  // $: lnCount = $descriptionPositions.lineCount

  $: ({ selectedId, lineCount } = $descriptionPositions);

  const targetSelected = (id, updater) => {
    // const minItem = selectedId;
    // const maxItem = mod(selectedId + lineCount - 1, itemCount);
    // // return id >= minItem && id <= maxItem;
    // return id >= minItem && id <= maxItem;

    // get relative id of mover
    const relativeId = mod(id - selectedId, itemCount);

    if (relativeId >= 0 && relativeId < lineCount) {
      $descriptionPositions.linePositions[relativeId] =
        mover.getBoundingClientRect().top -
        ($desiredPosition + height * relativeId);
      return true;
    }
    return false;
  };

  // if (targetSelected()) {

  // }
</script>

<!-- on:resize={handleResize} -->
<!-- bind:contentRect={rect} -->
<!-- class:sel={selectedId === i} -->
<!-- class:sel={selected} -->
<!-- class:sel={targetSelected(i, $pos.y)} -->
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

  .sel {
    background-color: red;
  }

  a:hover {
    color: var(--clr-secondary);
  }
</style>
