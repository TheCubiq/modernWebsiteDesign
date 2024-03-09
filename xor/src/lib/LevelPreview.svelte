<script>
  import { onDestroy } from "svelte";
  import ShapePreview from "./ShapePreview.svelte";
  import { BOARD_SIZE } from "./constants";
  import { findCenterFromShapes, relativeToCenter } from "./helperFunctions";
  import { skins } from "./stores";


  export let level;

  let skinsLocal = {};

  const unsubscribe = skins.subscribe((value) => {
    skinsLocal = value;
  });

  const centeredPreview = (level) => {
    const finalCenter = findCenterFromShapes(level);

    const finalCenteredAnchor = relativeToCenter(finalCenter, {
      x: BOARD_SIZE / 2 + 0.5,
      y: BOARD_SIZE / 2 + 0.5,
    });

    return level.map((shape, i) => ({
      ...shape,
      pos: relativeToCenter(shape.pos, finalCenteredAnchor),
    }));
  };

  onDestroy(() => {
    unsubscribe();
  });
</script>

{#each centeredPreview(level) as shape}
  <ShapePreview
    zoom={1.5}
    shapePos={shape.pos}
    shapeSkin={skinsLocal[shape.skin]}
  />
{/each}
