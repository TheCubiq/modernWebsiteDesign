<script>
  // @ts-nocheck

  import { M, Motion, MotionDiv } from "svelte-motion";
  export let nbOfColumns = 5;

  export let animDefines = {
    delay: .05,
    duration: .3,
  }

  const anim = (variants, custom) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
      custom,
    };
  };

  const expand = {
    initial: {
      top: 0,
    },
    enter: (i) => ({
      top: "100%",
      transition: {
        duration: animDefines.duration,
        delay: i * animDefines.delay,
      },
      transitionEnd: {
        height: 0,
        top: 0,
      },
    }),
    exit: (i) => ({
      height: "100%",
      transition: {
        duration: animDefines.duration,
        delay: i * animDefines.delay,
      },
    }),
  };

  const opacity = {
    initial: {
      opacity: 0.5,
    },
    enter: {
      opacity: 0,
    },
    exit: {
      opacity: .5,
    },
  };
</script>

<div class="page">
  <Motion let:motion={m_opacity} {...anim(opacity)}>
    <aside use:m_opacity class="background"></aside>
  </Motion>

  <div class="transition-container">
    {#each Array(nbOfColumns) as _, i}
      <Motion let:motion={m_expand} {...anim(expand, i)}>
        <aside use:m_expand></aside>
      </Motion>
    {/each}
  </div>

  <slot />
</div>

<style>
  .transition-container {
    position: fixed;

    height: 100vh;
    width: 100vw;

    left: 0;
    top: 0;
    pointer-events: none;

    flex-direction: row-reverse;

    display: flex;
  }

  aside.background {
    position: fixed;

    height: 100vh;
    width: 100vw;

    left: 0;
    top: 0;
    pointer-events: none;
    background-color: black;
  }

  .transition-container > aside {
    position: relative;
    height: 100%;
    width: 100%;
    background-color: black;
  }
</style>
