<script>
  import { fly } from "svelte/transition";
  import FeatureBlob from "../FeatureBlob.svelte";
  import { quintOut } from "svelte/easing";

  import image from "/src/assets/AiModel.webp";

</script>

<section 
transition:fly|global={{ 
  delay: 700,
  duration: 700,
  x: 50,
  opacity: 0,
  easing: quintOut,
}}

id="slideshow">
  <img src={image} alt="aiStuff" />

  <FeatureBlob
    text="Z - ring - $200"
    --x="25%"
    --y="60%"
    --text-x="190%"
    --text-y="60%"
  />
  <FeatureBlob
    text="holo lens - $50"
    --x="70%"
    --y="30%"
    --text-x="-200%"
    --text-y="-60%"
  />

  <!-- <p>test</p> -->
</section>

<style>
  #slideshow {
    grid-area: slideshow;
    overflow: hidden;
    border-radius: var(--corner-radius);
    z-index: 0;

    justify-content: flex-start;
    align-items: flex-start;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    min-height: 0%;
    position: absolute;
    z-index: -1;
  }
</style>
