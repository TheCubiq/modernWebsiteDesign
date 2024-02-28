<script>
  import { onMount } from "svelte";
  import Shape from "./Shape.svelte";
  import { fade } from "svelte/transition";
  import { writable } from "svelte/store";

  import skins from "./skins.js";

  let cursorPos = { x: 0, y: 0 };

  class ShapeItem {
    constructor(id, pos, skin) {
      this.id = id;
      this.pos = pos || { x: 8, y: 8 };
      this.skin = skin || "square";
    }

    loadSkin() {
      return skins[this.skin];
    }
  }

  class Board {
    constructor(size) {
      this.boardSize = size || 15;
      this.boardShapes$ = writable([]);
      this.boardPoints = this.generateBoardPoints(this.boardSize);
    }

    addShape(pos, name) {
      
      this.boardShapes$.update((shapes) => {
        const newShape = new ShapeItem(shapes.length + 1, pos, name);
          
        return [...shapes, newShape];
      });
    }

    generateBoardPoints(boardSize) {
      const isInCircle = (x, y, ratio) => {
        return Math.sqrt(x ** 2 + y ** 2) <= ratio;
      };

      return Array(boardSize)
        .fill()
        .map((_, i) =>
          Array(boardSize)
            .fill()
            .map((_, j) => ({ x: i + 0.5, y: j + 0.5 }))

            // remove points outside of circle
            .filter((point, _) => {
              return isInCircle(
                point.x / boardSize - 0.5,
                point.y / boardSize - 0.5,
                0.5
              );
            })
        );
    }
  }

  let boardDimensions;
  $: blockSize = boardDimensions ? boardDimensions[0].blockSize : 0;

  const board = new Board(15);
  
  $: boardShapes = board.boardShapes$;

  onMount(() => {
    board.addShape();
    board.addShape({ x: 7, y: 9 }, "square");
    board.addShape({ x: 9, y: 7 }, "triangle");
  });
  
</script>

<div
  transition:fade={{ duration: 500 }}
  class="board"
  bind:borderBoxSize={boardDimensions}
>
  {#each $boardShapes as shape (shape.id)}
    <Shape
      id={shape.id}
      shapePos={shape.pos}
      boardPoints = {board.boardPoints}
      boardSize = {board.boardSize}
      {cursorPos}
      {blockSize}
      shapeSkin = {shape.loadSkin()}
    />
  {/each}

  <svg
    width="100%"
    height="100%"
    viewBox={`0 0 ${board.boardSize} ${board.boardSize}`}
    xmlns="http://www.w3.org/2000/svg"
    fill="black"
  >
    {#each board.boardPoints as boardCol}
      {#each boardCol as point}
        <circle r=".1" cx={point.x} cy={point.y} />
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
    border: 2px solid rgb(0, 0, 0);

    position: relative;
  }

  svg {
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: 0.5;
  }
</style>
