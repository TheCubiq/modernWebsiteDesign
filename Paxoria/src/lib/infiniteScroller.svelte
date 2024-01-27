<script>
  import { onMount } from "svelte";
  import { flip } from "svelte/animate";
  import { quintInOut } from "svelte/easing";
  import { crossfade, fade } from "svelte/transition";
  import Mover from "./Mover.svelte";

  import { selectedIndex } from "./stores";
  import Inner from "./Inner.svelte";

  export let items = ["nothing really"];
  export let open = false;

  let listFull = [];
  // let list;
  let innerHeight;

  const intervalDelay = 5000;
  let counter = 0;

  let ItemList = [];

  

  const offsetRow = 5;

  $: list = listFull[0];

  $: duplicatesNeeded = list ? Math.ceil(innerHeight / list.scrollHeight) : 0;

  // $: itemFullCount = items.length * (duplicatesNeeded + 1);

  onMount(() => {
    const interval = setInterval(() => {
      // counter = counter + 2;
      // counter = counter + Math.floor(((Math.random() - 0.5) * 2) * 2);
    }, intervalDelay);

    return () => clearInterval(interval);
  });

  $: if (list) {
    // list.parentNode.scrollTop = list.scrollHeight - 1;
  }

  let scrollOffset = 0;

  const scrollHandler = (e) => {
    const childHeight = e.target.firstElementChild.scrollHeight;

    // Looper
    // if (e.target.scrollTop >= childHeight) {
    //   e.target.scrollTop = 1;
    // }

    // if (e.target.scrollTop === 0) {
    //   e.target.scrollTop = childHeight - 1;
    // }

    scrollOffset = e.target.scrollTop;
  };

  const mod = (n, m) => {
    return ((n % m) + m) % m;
  };

  // const [send, receive] = crossfade({
  //   duration: 1000,
  // });

  const getProperKey = (i, j, cnt) => {
    // return mod(j + items.length * i + cnt, itemFullCount)
    return j + items.length * i + cnt;
  };

  

  const getVisibleDistanceFromWindow = (i,j, scroll) => {

    const el = listFull[i]?.getElementsByTagName('div')[j];
    // const { top, bottom } = el.getBoundingClientRect();
    const vHeight = innerHeight;
    // console.log(el?.getBoundingClientRect().top);

    const fromTop = el?.getBoundingClientRect().top;
    
    // return (fromTop > vHeight) ? 0 : fromTop;
    return fromTop;
  };



  // const outTransition = (node, params) => {
  //   return {
  //     duration: 1000,
  //     delay: 0,
  //     easing: quintInOut,
  //     css: (t) => {
  //       return `
  //         transform: translateX(${t * 100}%);
  //         opacity: ${t};
  //       `;
  //     },
  //   };
  // };
</script>

<svelte:window bind:innerHeight />

<div class="infinite-scroller" on:scroll={scrollHandler}>
  <!-- {#each duplicateArray(items, duplicatesNeeded) as itemArr, i} -->
  {#if open}
    {#each Array(duplicatesNeeded + 1) as _, i}
      <div class="list" class:shadow={!(i == 0)} bind:this={listFull[i]}>
        {#each Array(items.length) as _, j}
          <!-- <div out:fade|global> -->
            <!-- i={(j + i * items.length)}
            itemCount={items.length * (duplicatesNeeded + 1)}
            offsetRow={offsetRow} -->
          <Mover
            y={$selectedIndex}
            delay={50}
            {scrollOffset}
          >
            <slot
              {duplicatesNeeded}
              item={{
                // id: getProperKey(i, j, counter),
                id: j + i * items.length,
                // name:itemArr[(j+counter) % itemArr.length]
                // name: items[mod(j + counter, items.length)],
                name: items[j],

                innerHeight,

                // myHeight: getVisibleDistanceFromWindow(listFull[i]?.getElementsByTagName('div')[j], scrollOffset),
                myHeight: getVisibleDistanceFromWindow(i, j, scrollOffset),

                // relativePos
                relative: j + i * items.length - $selectedIndex,

                // absolutePos
                absolute: mod((j + i * items.length) - $selectedIndex, items.length * (duplicatesNeeded + 1)),
              }}
            />
          </Mover>
          <!-- </div> -->
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
    /* 
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-flow: column; */

    /* align-items: center; */

    overflow: hidden;
    overflow-y: auto;
    min-width: 50%;
  }

  .infinite-scroller::-webkit-scrollbar {
    display: none;
  }

  .list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* align-items: center; */
  }

  .list:not(.shadow) {
    /* border-top: 1px solid var(--clr-text); */
  }

  .shadow {
    /* background-color: aqua; */
  }
</style>
