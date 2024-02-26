<script>
  import Shape from "./Shape.svelte";

  let boardSize = 21;
  
  let cursorPos = { x: 0, y: 0 };
  
  let data = [
    { id: 1, name: "Shape 1", pos: { x: 0, y: 100 } },
    { id: 2, name: "Shape 2", pos: { x: 50, y: 0 } },
    { id: 3, name: "Shape 3", pos: { x: 100, y: 200 } },
    // { id: 4, name: "Shape 4", pos: { x: 14, y: 0 } },
  ];

  const getMousePos = (e) => {
    const pos = (e.touches) ? e.touches[0] : e;
    return {x: pos.clientX, y: pos.clientY};
  };

  $: console.log(data);


  const handleMouseMove = (e) => {
    // console.log(e);
    cursorPos = getMousePos(e);
  };

</script>


<div class="board">
  
  <svg 
    width="100%" 
    height="100%" 
    viewBox="0 0 100 100" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {#each Array(boardSize) as _, i}
      <!-- <line 
        x1="0" 
        y1={(i * 100 / boardSize)} 
        x2="100" 
        y2={(i * 100 / boardSize)} 
        stroke="white" 
      />
      <line 
        x1={(i * 100 / boardSize)} 
        y1="0" 
        x2={(i * 100 / boardSize)} 
        y2="100" 
        stroke="white" 
      /> -->

      {#each Array(boardSize) as _, j}
          <circle 
            cx={(j * 100 / (boardSize-1))} 
            cy={(i * 100 / (boardSize-1))} 
            r="1" 
            fill="black"
          />
      {/each}
    {/each}
  </svg>

  {#each data as shape}
    <Shape {shape} shapePos={shape.pos} {cursorPos} />
  {/each}
</div>

<style>
  .board {
    flex: 1;
    max-width: 36rem;
    aspect-ratio: 1;
    /* background: #000; */

    position: relative;
    
  }

  svg {
    position: absolute;
    inset: 0;
  }

</style>
