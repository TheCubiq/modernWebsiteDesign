<script>
  import { onMount } from "svelte";
  import Shape from "./Shape.svelte";

  let boardSize = 15;

  let cursorPos = { x: 0, y: 0 };

  let data = [
    { id: 1, name: "Shape 1", pos: { x: 8, y: 8 } },
    { id: 2, name: "Shape 2", pos: { x: 7, y: 9 } },
    { id: 3, name: "Shape 3", pos: { x: 9, y: 7 } },
  ];

  const isInCircle = (x, y, ratio) => {
    return Math.sqrt(x ** 2 + y ** 2) <= ratio;
  };

  let boardPoints = Array(boardSize)
    .fill()
    .map((_, i) =>
      Array(boardSize)
        .fill()
        .map((_, j) => ({ x: i+.5, y: j+.5 }))

        // remove points outside of circle
        .filter((point, _) => {
          return isInCircle(
            (point.x) / (boardSize) - 0.5,
            (point.y) / (boardSize) - 0.5,
            .5
          );
        })
    );

    
    let boardDimensions


    $: blockSize = boardDimensions ? boardDimensions[0].blockSize : 0
</script>

<div class="board" bind:borderBoxSize={boardDimensions}>
  
  {#each data as shape}
    <!-- {shape}  -->
    <Shape shapePos={shape.pos} {cursorPos} {boardPoints} {blockSize} {boardSize} />
  {/each}
  
  <svg
    width="100%"
    height="100%"
    viewBox={`0 0 ${boardSize} ${boardSize}`}
    xmlns="http://www.w3.org/2000/svg"
    fill="black"
  >
    {#each boardPoints as boardCol}
      {#each boardCol as point}
        <circle r=".07" cx={point.x } cy={point.y} />
      {/each}
    {/each}
  </svg>

</div>

<style>
  .board {
    flex: 1;
    max-width: 36rem;
    aspect-ratio: 1;

    border-radius: 99em;
    border: 1px solid rgb(0, 0, 0);

    position: relative;
  }

  svg {
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: 0.5;
  }
</style>
