<script>
  import { onMount } from "svelte";
  import Shape from "./Shape.svelte";
  import { fade } from "svelte/transition";
  import { writable } from "svelte/store";
  import PocketBase from "pocketbase";

  import BoardGrid from "./BoardGrid.svelte";
  import ShapePreview from "./ShapePreview.svelte";

  import skins from "./skins.js";
  import { BOARD_SIZE, DEV } from "./constants";
  import { ChevronRight, ChevronLeft, Download } from "lucide-svelte";

  const pb = new PocketBase("https://db.cubiq.dev/");

  let levelCompleted = false;
  let levelId = 0;

  const roundNum = (n, m) => Math.round(n * 10 ** m) / 10 ** m;

  class ShapeItem {
    constructor(board, id, pos, skin) {
      this.id = id;
      this.pos = pos || { x: 8, y: 8 };
      this.skin = skin || "square";
      this.boardRef = board;
    }

    setPos(pos) {
      this.pos = pos;
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
      this.currentLevel = 1;
      this.final = [];
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

      this.finalCenter = this.findCenterFromShapes(level.final);

      const finalCenteredAnchor = this.relativeToCenter(this.finalCenter, {
        x: BOARD_SIZE / 2 + 0.5,
        y: BOARD_SIZE / 2 + 0.5,
      });

      this.final = level.final.map((shape, i) => {
        return new ShapeItem(
          null,
          i,
          this.relativeToCenter(shape.pos, finalCenteredAnchor),
          shape.skin
        );
      });
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

    relativeToCenter(p, center) {
      return {
        x: roundNum(p.x - center.x, 2),
        y: roundNum(p.y - center.y, 2),
      };
    }

    getJSON(shapes) {
      return JSON.stringify(
        shapes
          // filter out the boardRef
          .map(({ boardRef, id, ...shape }) => shape)
      );
    }

    checkBoardState(log = false) {
      this.boardShapes$.update((shapes) => {
        if (log) console.log(this.getJSON(shapes));
        else levelCompleted = this.checkLevelCompletion(shapes);
        return shapes;
      });
    }

    areCoordsSame(p1, p2) {
      return p1.x === p2.x && p1.y === p2.y;
    }

    checkLevelCompletion(shapeData) {
      const final = this.final;

      const center = this.findCenterFromShapes(shapeData);
      const finalCenter = this.findCenterFromShapes(final);

      const relativeFinalPoints = final.map((shape) => ({
        skin: shape.skin,
        pos: this.relativeToCenter(shape.pos, finalCenter),
      }));

      return shapeData.every((shape, i) => {
        const point = this.relativeToCenter(shape.pos, center);
        return relativeFinalPoints.some(
          (f_shape) =>
            f_shape.skin === shape.skin &&
            this.areCoordsSame(point, f_shape.pos)
        );
      });
    }

    generateBoardSnapPoints(boardSize) {
      const isInCircle = (x, y, ratio) => {
        // return true
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

  const board = new Board(BOARD_SIZE);

  $: boardShapes = board.boardShapes$;

  let boardFinal = [];

  const getLevelCount = async () => {
    const list = await pb
      .collection("levels")
      .getList(1, 1)
      .catch((e) => console.error(e));
    const { totalItems } = list || { totalItems: 0 };
    return totalItems;
  };

  const loadLevel = async (levelId) => {
    pb.collection("levels")
      .getFirstListItem("levelId=" + levelId)
      .then((result) => {
        levelCompleted = false;
        console.log(result);
        board.setupLevel(result, levelId);
        boardFinal = board.final;
      })
      .catch((e) => {
        console.error(e);
      });
  };

  let totalLevels = 0;

  const nextLevel = (next = 1) => {
    // levelId += next;
    levelId = (levelId + next + totalLevels) % totalLevels;
    loadLevel(levelId);
  };

  onMount(async () => {
    totalLevels = await getLevelCount();
    levelId = 0;
    loadLevel(levelId);
  });
</script>

<span class:active={levelCompleted}>{levelId+1}/{totalLevels}</span>

<div
  class="preview"
  style:--board-size={board.boardSize}
  class:completed={levelCompleted}
>
  {#key levelId}
    {#each boardFinal as shape, i (i)}
      <ShapePreview shapePos={shape.pos} shapeSkin={shape.loadSkin()} />
    {/each}
  {/key}
</div>
<div
  in:fade|global={{ duration: 500 }}
  class="board"
  bind:borderBoxSize={boardDimensions}
  class:completed={levelCompleted}
  style:--board-size={board.boardSize}
>
  {#if !levelCompleted}
    {#each $boardShapes as shape (shape.id)}
      <Shape
        id={shape.id}
        shapePos={shape.pos}
        boardPoints={board.boardPoints}
        {blockSize}
        shapeSkin={shape.loadSkin()}
        {shape}
      />
    {/each}

    <BoardGrid {board} />
  {/if}
</div>

<nav>
  <button
    transition:fade
    on:click={() => nextLevel(-1)}
    class:active={levelCompleted}
  >
    <ChevronLeft color="black" size="1em" />
  </button>
  <button
    transition:fade
    on:click={() => nextLevel()}
    class:active={levelCompleted}
  >
    <ChevronRight color="black" size="1em" />
  </button>

  {#if DEV}
    <button
      transition:fade
      on:click={() => board.checkBoardState(true)}
      class:active={true}
    >
      <Download color="black" size=".8em" />
    </button>
  {/if}
</nav>

<style>
  .board {
    width: 100%;
    max-width: 36rem;
    aspect-ratio: 1;

    border-radius: 99em;
    border: 2px solid rgb(0, 0, 0);

    position: relative;
    transition-property: border, max-width;
    transition-duration: 2s, 1s;
  }

  .preview {
    -webkit-tap-highlight-color: transparent;

    user-select: none;
    aspect-ratio: 1;
    width: 35%;
    max-width: 12rem;
    /* background: rgb(255, 255, 255); */
    /* border-radius: 99em; */
    /* border: 2px solid rgb(0, 0, 0);  */

    position: relative;

    transition: 1.5s;
  }
  .preview.completed {
    background: black;
    border-radius: 99em;
    cursor: pointer;
  }

  .preview.completed:active {
    transform: scale(1.1);
    transition: 0.3s;
  }

  .board.completed {
    /* transition: 2s 2s; */
    transition-duration: 2s, 1s;
    transition-delay: 0s, 1.5s;
    border-color: transparent;
    max-width: 0em;
  }

  nav {
    display: flex;
    align-items: center;
  }

  button {
    display: flex;
    /* position: absolute; */
    pointer-events: none;

    background: white;
    border: none;
    cursor: pointer;
    /* color: white; */

    font-size: 5rem;
    opacity: 0;
    transition: 1s;
  }

  span {
    color: #000b;
    font-size: 3rem;
    position: fixed;
    bottom: 1em;
    opacity: 0;
    transition: 1s;
  }

  span.active {
    opacity: 1;
    transition-delay: 1.5s;
  }

  button.active {
    pointer-events: all;
    opacity: 1;
    transition-delay: 1.5s;
  }
</style>
