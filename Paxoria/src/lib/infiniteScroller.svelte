<script>
  import { onMount } from "svelte";
  import Mover from "./Mover.svelte";
  import { desiredPosition } from "./stores";

  export let items = ["nothing really"];
  export let open = false;

  let listFull = [];
  let scroller;
  let innerHeight;

  let itemList = [];

  let yScroll = 0;
  let yHeight = 0;
  let scrollOffset = 0;
  let childHeight = 0;

  const additionalDupes = 2; // for the animation not to overflow

  $: firstChild = listFull[0];

  $: duplicatesNeeded = firstChild
    ? Math.ceil(innerHeight / firstChild.scrollHeight) + additionalDupes
    : 1;

  const scrollHandler = () => {
    childHeight = scroller.firstElementChild.getBoundingClientRect().height;

    // Looper

    if (scroller.scrollTop >= childHeight) {
      scroller.scrollTop = 1;
    }

    if (scroller.scrollTop <= 0) {
      scroller.scrollTop = childHeight - 1;
    }
  };

  const mod = (n, m) => {
    return ((n % m) + m) % m;
  };
  
  onMount(() => {
    scroller.scrollTop = 5;
  });

  $: if (scroller) {
    yScroll = scroller.scrollHeight;
    yHeight = scroller.clientHeight;
    scrollOffset = scroller.scrollTop;
  }

  $: if (firstChild) {
    scroller.scrollTop = firstChild.scrollHeight - 1;
  }

  const duplicateArray = (arr, n) => {
    return Array(n).fill(arr);
  };

  const giveId = (arr) => {
    return arr.map((entryList, i) => {
      return entryList.map((entry, j) => {
        return {
          id: j + i * entryList.length,
          sectionId: j,
          name: entry,
        };
      });
    });
  };

  $: itemList = giveId(duplicateArray(items, duplicatesNeeded));
  $: fullEntryCount = duplicatesNeeded * items.length;

  $: $desiredPosition = innerHeight * 0.6;

</script>

<svelte:window bind:innerHeight />

<div
  class="infinite-scroller"
  on:scroll={scrollHandler}
  on:resize={scrollHandler}
  bind:this={scroller}
>
  {#if open}
    {#each itemList as list, i}
      <div class="list" class:shadow={!(i == 0)} bind:this={listFull[i]}>
        {#each list as entry}
          <Mover
            i={entry.id}
            sectionId={entry.sectionId}
            {yHeight}
            itemCount={fullEntryCount}
          >
            <slot
              item={{
                id: entry.id,
                name: entry.name,
              }}
            />
          </Mover>
        {/each}
      </div>
    {/each}
  {/if}
</div>

<style>
  .infinite-scroller {
    display: flex;
    flex-direction: column;

    overflow: hidden;
    overflow-y: auto;
    min-width: 50%;

    max-height: max-content;
  }

  .infinite-scroller::-webkit-scrollbar {
    display: none;
  }

  .list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* align-items: center; */
    /* border: 1px solid var(--clr-text); */
    /* box-sizing: content-box; */
  }

  .list:not(.shadow) {
    /* border-top: 1px solid var(--clr-text); */
  }

  .shadow {
    /* background-color: aqua; */
  }

  .defaultPos {
    position: fixed;
    top: var(--y, 0px);
    left: 0;
  }
</style>
