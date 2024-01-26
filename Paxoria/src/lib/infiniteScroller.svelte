<script>
  import { onMount } from "svelte";

  let list;

  let innerHeight;

  $: duplicatesNeeded = list ? Math.ceil(innerHeight / list.scrollHeight) : 1;

  onMount(() => {
    list.parentNode.scrollTop = 1;
  });

  const scrollHandler = (e) => {
    const childHeight = e.target.firstElementChild.scrollHeight;

    // Looper
    if (e.target.scrollTop >= childHeight) {
      e.target.scrollTop = 1;
    }

    if (e.target.scrollTop === 0) {
      e.target.scrollTop = childHeight - 1;
    }
  };
</script>

<svelte:window bind:innerHeight />

<div class="infinite-scroller" on:scroll={scrollHandler}>
  <div class="list" bind:this={list}>
    <slot dup={0} {duplicatesNeeded}/>
  </div>
  {#each Array(duplicatesNeeded) as _, i}
    <div class="list shadow">
      <slot dup={i+1} {duplicatesNeeded}/>
    </div>
  {/each}
</div>

<style>
  .infinite-scroller {
    padding: 0 1em;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    overflow-y: auto;
    min-width: 50%;
    height: 100%;
  }

  .infinite-scroller::-webkit-scrollbar {
    display: none;
  }

  .list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .shadow {
    /* background-color: aqua; */
  }
</style>
