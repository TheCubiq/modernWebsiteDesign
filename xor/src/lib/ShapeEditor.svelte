<script>
  import { onMount } from "svelte";
  import Shape from "./Shape.svelte";
  import { ShapeEditorBoard } from "./objects";

  export let isOpen = false;

  export let board;

  export let blockSize = 1;

  const cross = {
    origin: { x: 0.5, y: 0.5 },
    path: [
      {x:0.46, y:0.21}, 
      {x:0.54, y:0.21}, 
      {x:0.54, y:0.46}, 
      {x:0.79, y:0.46}, 
      {x:0.79, y:0.54}, 
      {x:0.54, y:0.54}, 
      {x:0.54, y:0.79}, 
      {x:0.46, y:0.79}, 
      {x:0.46, y:0.54}, 
      {x:0.21, y:0.54}, 
      {x:0.21, y:0.46}, 
      {x:0.46, y:0.46},
    ],
  }

  onMount(() => {
    const editor = new ShapeEditorBoard();
  });

  

</script>

<Shape
  id={1}
  shapePos={{ x: 8, y: 8 }}
  boardPoints={board.boardPoints}
  {blockSize}
  shapeSkin={cross}
  hidden = {!isOpen}
/>