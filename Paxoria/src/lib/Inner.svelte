<script>
  // @ts-nocheck

  import { M, Motion } from "svelte-motion";

  export let item;

  const anim = (variants) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };

  const opacity = {
    initial: { opacity: 0 },
    enter: { 
      opacity: 1,
      transition: {
        duration: .5,
      },
    },
    exit: { opacity: 1 },
  };

  const slide = {
    initial: {
      top: "100vh",
    },
    enter: {
      top: "100vh",
    },
    exit: {
      top: "0",
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const perspective = {
    initial: {
      y: 0,
      scale: 1,
      opacity: 1,
    },
    enter: {
      y: 0,
      scale: 1,
      opacity: 1,
    },
    exit: {
      y: -100,
      scale: 0.9,
      opacity: 0.5,

      transition: {
        duration: 1.2,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };
</script>

<div class="inner">
  <Motion let:motion {...anim(slide)}>
    <div class="slide" use:motion></div>
  </Motion>

  <Motion let:motion {...anim(perspective)}>
    <div class="page" use:motion>
      <M.div {...anim(opacity)}>
        <slot />
      </M.div>
    </div>
  </Motion>
</div>

<style>
  .slide {
    position: fixed;
    top: 0;
    left: 0;
    background-color: var(--clr-bg);
    min-width: 100vw;
    min-height: 100vh;

    z-index: 10;
  }

  .inner {
    min-height: 100vh;
    background-color: black;
  }

  .page {
    background-color: var(--clr-bg);
    min-height: 100vh;
  }
</style>
