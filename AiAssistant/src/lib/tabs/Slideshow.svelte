<script>
  import FeatureBlob from "../FeatureBlob.svelte";
</script>

<section id="slideshow">
  <img src="https://i.imgur.com/OdRYIJN.jpg" alt="" />

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
