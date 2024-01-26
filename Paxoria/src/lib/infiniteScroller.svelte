<script>
  import { onMount } from "svelte";
  import { flip } from "svelte/animate";
  import { crossfade } from "svelte/transition";

  export let items = ["nothing really"];

  let listFull = [];
  // let list;
  let innerHeight;

  const intervalDelay = 2000;
  let counter = 0;

  $: list = listFull[0];

  $: duplicatesNeeded = list ? Math.ceil(innerHeight / list.scrollHeight) : 1;

  // $: itemFullCount = items.length * (duplicatesNeeded + 1);

  onMount(() => {
    const interval = setInterval(() => {
      counter = counter + 1;
    }, intervalDelay);

    return () => clearInterval(interval);
  });

  $: if (list) {
    list.parentNode.scrollTop = list.scrollHeight - 1;
  }

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

  // generate unique id based on the offset, item and the counter

  // const generateId = (item, offset) => {
  //   return `${item}-${offset}`;
  // };

  // const generateKey = (item, offset) => {
  //   return `${item}-${offset}`;
  // };

  // const scrollArray = (arr, offset) => {
  //   const newArr = [...arr];

  //   const len = arr.length;
  //   // Calculate the effective offset to handle negative values and offsets larger than array length
  //   const effectiveOffset = ((offset % len) + len) % len;

  //   // Use array.slice() to get the rotated parts and concatenate them in the desired order
  //   const rotatedArray = arr
  //     .slice(len - effectiveOffset)
  //     .concat(arr.slice(0, len - effectiveOffset));

  //   return rotatedArray;
  // };

  // const duplicateArray = (arr, duplicatesNeeded) => {
  //   const newArr = [];

  //   for (let i = 0; i < duplicatesNeeded + 1; i++) {
  //     newArr.push(...[arr]);
  //   }

  //   return newArr;
  // };

  // const indexData = (arr) => {
  //   // [a,b,c] = [{id: 1, name: "a"}, {id: 2, name: "b"}, {id: 3, name: "c"}]

  //   const newArr = arr.map((item, i) => {
  //     return { id: i, name: item };
  //   });

  //   return newArr;
  // };

  // const mod = (n, m) => {
  //   return ((n % m) + m) % m;
  // };

  const [send, receive] = crossfade({
    duration: 1000,
  });

  const getProperKey = (i, j, cnt) => {
    // return mod(j + items.length * i + cnt, itemFullCount)
    return j + items.length * i + cnt;
  };
</script>

<svelte:window bind:innerHeight />

<div class="infinite-scroller" on:scroll={scrollHandler}>
  <!-- {#each duplicateArray(items, duplicatesNeeded) as itemArr, i} -->
  {#each Array(duplicatesNeeded + 1) as _, i}
    <div class="list" class:shadow={!(i == 0)} bind:this={listFull[i]}>
      <!-- {#each itemArr as item, j (getProperKey(i, j, counter))} -->
      {#each Array(items.length) as _, j (getProperKey(i, j, counter))}
        <div
          animate:flip={{ duration: 1000 }}
          in:receive={{ key: getProperKey(i, j, counter) }}
          out:send={{ key: getProperKey(i, j, counter) }}
        >
          <slot
            {duplicatesNeeded}
            item={{
              id: getProperKey(i, j, counter),
              // name:itemArr[(j+counter) % itemArr.length]
              name: items[(j + counter) % items.length],
            }}
          />
        </div>
      {/each}
    </div>
  {/each}
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

  .shadow {
    /* background-color: aqua; */
  }
</style>
