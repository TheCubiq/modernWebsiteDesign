<script>
  import { onMount } from "svelte";
  import { flip } from "svelte/animate";
  import { quintInOut } from "svelte/easing";
  import { crossfade, fade } from "svelte/transition";
  import Mover from "./Mover.svelte";

  import { selectedOffset } from "./stores";
  import Inner from "./Inner.svelte";

  export let items = ["nothing really"];
  export let open = false;

  let listFull = [];
  let scroller;
  // let list;
  let innerHeight;

  const intervalDelay = 5000;

  let itemList = [];

  let yScroll = 0;
  let yHeight = 0;
  let scrollOffset = 0;
  let childHeight = 0;

  const offsetRow = 5;

  $: firstChild = listFull[0];

  $: duplicatesNeeded = firstChild ? Math.ceil(innerHeight / firstChild.scrollHeight) : 1;

  const scrollHandler = () => {
    childHeight = scroller.firstElementChild.getBoundingClientRect().height;

    // Looper

    if (scroller.scrollTop >= childHeight) {
      console.log("bottom", childHeight)
      scroller.scrollTop = 1;
    }

    if (scroller.scrollTop <= 0) {
      console.log("top")
      scroller.scrollTop = childHeight - 1;
    }


    updateValues();

  };
  
  const updateValues = () => {
    yScroll = scroller.scrollHeight;
    yHeight = scroller.clientHeight;
    scrollOffset = scroller.scrollTop;
  };

  const mod = (n, m) => {
    return ((n % m) + m) % m;
  };

  onMount(() => {
    updateValues();
    
    scroller.scrollTop = 5;
  });

  $: if (firstChild) {
    scroller.scrollTop = firstChild.scrollHeight - 1;
  }

  const duplicateArray = (arr, n) => {
    return Array(n).fill(arr);
  };

  const giveId = (arr) => {
    const final = arr.map((entryList, i) => {
      return entryList.map((entry, j) => {
        return {
          id: j + i * entryList.length,
          name: entry,
        };
      });
    });

    console.log(final)

    return final
  };

  
  $: itemList = giveId(duplicateArray(items, duplicatesNeeded + 1));
  $: fullEntryCount = (duplicatesNeeded + 1) * items.length;

  $: console.log(fullEntryCount);

</script>

<svelte:window bind:innerHeight />

<div class="infinite-scroller" on:scroll={scrollHandler} bind:this={scroller} on:resize={scrollHandler}>
  {#if open}
    {#each itemList as list, i}
      <div class="list" class:shadow={!(i == 0)} bind:this={listFull[i]}>
        {#each list as entry}
          <Mover
            i = {entry.id}
            {scrollOffset}
            yHeight={yHeight}
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

<!-- {(counter) % itemCount} -->

<style>
  .infinite-scroller {
    padding: 0 1em;
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
</style>
