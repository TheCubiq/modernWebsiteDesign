<script>
  import { onMount } from "svelte";
  import Shape from "./Shape.svelte";
  import { fade } from "svelte/transition";
  import { writable } from "svelte/store";

  import skins from "./skins.js";

  const levels = [
    // 1
    {
      start: [
        {
          skin: "square",
          pos: { x: 5, y: 8 },
        },
        {
          skin: "square",
          pos: { x: 8, y: 8 },
        },
        {
          skin: "triangle",
          pos: { x: 11, y: 8 },y
        },
      ],
      final: [
        {
          skin: "square",
          pos: { x: 8, y: 8 },
        },
        {
          skin: "square",
          pos: { x: 7, y: 9 },
        },
        {
          skin: "triangle",
          pos: { x: 9, y: 7 },
        },
      ],
    },
  ];

  class ShapeItem {
    constructor(board, id, pos, skin) {
      this.id = id;
      this.pos = pos || { x: 8, y: 8 };
      this.skin = skin || "square";
      this.boardRef = board;
    }

    setPos(pos) {
      this.pos = pos;
      // Board.prototype.checkBoardState.call(this);
      this.boardRef.checkBoardState();
    }

    loadSkin() {
      return skins[this.skin];
    }
  }

  class Board {
    constructor(size) {
      this.boardSize = size || 15;
      this.boardShapes$ = writable([]);
      this.boardPoints = this.generateBoardSnapPoints(this.boardSize);
      this.currentLevel = 1
    }

    addShape(pos, name) {
      this.boardShapes$.update((shapes) => {
        const newShape = new ShapeItem(this, shapes.length + 1, pos, name);

        return [...shapes, newShape];
      });
    }

    setupLevel(level, levelId) {
      this.currentLevel = levelId + 1;
      this.boardShapes$.set(
        level.start.map(
          (shape, i) => new ShapeItem(this, i, shape.pos, shape.skin)
        )
      );
    }

    findCenterFromShapes(shapes) {
      const diff = shapes.reduce(
        (acc, shape) => {
          return {
            x: acc.x + shape.pos.x,
            y: acc.y + shape.pos.y,
          };
        },
        { x: 0, y: 0 }
      );

      return {
        x: diff.x / shapes.length,
        y: diff.y / shapes.length,
      };
    }

    distanceBetweenPoints(p1, p2) {
      return Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
    }

    checkBoardState() {
      this.boardShapes$.update((shapes) => {
        console.log(shapes);
        if (this.checkLevelCompletion(shapes)) {
          console.log("Level completed");
        } else console.log("Level not completed");
        return shapes;
      });
    }

    // checkLevelCompletion(shapeData) {
    checkLevelCompletion(shapeData) {
      const final = levels[this.currentLevel - 1].final;

      const center = this.findCenterFromShapes(shapeData);
      const finalCenter = this.findCenterFromShapes(final);

      const relativeFinalPoints = final.map((shape, _) => {
        return {
          skin: shape.skin,
          dist: this.distanceBetweenPoints(shape.pos, finalCenter),
        };
      });

      return shapeData.every((shape, i) => {
        const distance = this.distanceBetweenPoints(shape.pos, center);
        return relativeFinalPoints.some((f_shape, i) => {
          if (f_shape.skin === shape.skin && distance === f_shape.dist) {
            relativeFinalPoints.splice(i, 1);
            return true;
          }
          return false;
        });
      });
    }

    generateBoardSnapPoints(boardSize) {
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
    board.setupLevel(levels[0], 0);
  });

  const handleClick = (e) => {
    console.log(board.checkLevelCompletion($boardShapes));
  }

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
      boardPoints={board.boardPoints}
      boardSize={board.boardSize}
      {blockSize}
      shapeSkin={shape.loadSkin()}
      {shape}
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
<button type="button" on:click={handleClick}>test</button>

<style>
  .board {
    flex: 1;
    max-width: 36rem;
    aspect-ratio: 1;

    border-radius: 99em;
    border: 2px solid rgb(0, 0, 0);

    position: relative;
  }

  button {
    font-size: 2rem;
  }

  svg {
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: 0.5;
  }
</style>
