<script>
  import { onMount } from "svelte";
  import { spring, tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";

  export let mul = { x: 20, y: 20 };
  export let init = { x: 0, y: 0 };

  export let rot = false;
  export let hover = false;

  let hoverMul = tweened(0, {
    duration: 300,
    easing: cubicOut,
  });

  let magnet = spring(init, {
    stiffness: 0.02,
    damping: 0.05,
  });

  function handleMousemove(event) {
    const { clientX, clientY } = event;
    const { left, top, width, height } = event.target.getBoundingClientRect();

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const offsetX = clientX - centerX;
    const offsetY = clientY - centerY;

    const maxOffsetX = width / 2;
    const maxOffsetY = height / 2;

    const normalizedOffsetX = Math.min(
      Math.max(offsetX, -maxOffsetX),
      maxOffsetX
    );
    const normalizedOffsetY = Math.min(
      Math.max(offsetY, -maxOffsetY),
      maxOffsetY
    );

    const magnetizedX = normalizedOffsetX / maxOffsetX;
    const magnetizedY = normalizedOffsetY / maxOffsetY;

    magnet.set({
      x: magnetizedX,
      y: magnetizedY,
    });
    hoverMul.set(1);
  }
  
  const handleMouseLeave = () => {
    magnet.set({ x: 0, y: 0 });
    hoverMul.set(hover ? 0 : 1);
  };

  onMount(() => {
    handleMouseLeave();
  });
</script>

<div
  class="magnet"
  class:rot
  on:mousemove={handleMousemove}
  on:mouseleave={handleMouseLeave}
  role="presentation"
  style:--magnet-x={$magnet.x * mul.x}
  style:--magnet-y={$magnet.y * mul.y}
  style:--mul={$hoverMul}
>
  <slot />
</div>

<style>
  :root {
    --magnet-posX: 0;
    --magnet-posY: 0;
    --magnet-rotX: 0;
    --magnet-rotY: 0;
    --intensity: 0.1;
  }

  .magnet {
    cursor: pointer;
    border-radius: var(--magnet-rad, 0em);
  }

  .magnet:not(.rot) {
    --magnet-posX: var(--magnet-x, 0);
    --magnet-posY: var(--magnet-y, 0);
  }

  .magnet.rot {
    --magnet-rotX: var(--magnet-y, 0);
    --magnet-rotY: var(--magnet-x, 0);
  }

  :global(.magnet *) {
    pointer-events: none;
    --posX: calc(var(--magnet-posX) * var(--intensity) * 1px);
    --posY: calc(var(--magnet-posY) * var(--intensity) * 1px);
    --rotX: calc(var(--magnet-rotX) * -1deg);
    --rotY: calc(var(--magnet-rotY) * 1deg);

    --depth: calc(1px * var(--intensity) * var(--mul, 1) + 1px);
  }

  :global(.magnet > *) {
    transform-style: preserve-3d;

    transform: rotateX(var(--rotX)) rotateY(var(--rotY))
      translateZ(var(--depth)) translate(var(--posX), var(--posY));
  }

  :global(.magnet > * *) {
    transform: translate3d(var(--posX), var(--posY), var(--depth));
  }
</style>
