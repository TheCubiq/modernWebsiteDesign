<script>
  // @ts-nocheck

  import { M, Motion, MotionDiv } from "svelte-motion";
  export let nbOfColumns = 5;

  const anim = (variants, custom) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
      custom
    };
  };

  const expand ={
    initial: {
      top: 0,
    },
    enter: (i) => ({
      top: "100%",
      transition: {
        duration: .4,
        delay: i * 0.1,
      },
      transitionEnd: {
        height: 0,
        top: 0,
      },
    }),
    exit: (i) => ({
      height: "100%",
      transition: {
        duration: .4,
        delay: i * 0.1,
      },
    })

  }

</script>

<div class="page">
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

  .transition-container > aside {
    position: relative;
    height: 100%;
    width: 100%;
    background-color: black;
  }
</style>
