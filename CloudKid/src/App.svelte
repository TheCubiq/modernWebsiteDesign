<script>
  import SvgDefines from "./lib/svgDefines.svelte";
  import CloudKidFace from "/src/assets/cloud-kid-face.svg";

  let isLoaded = false;

  function handleLoad() {
    isLoaded = true;
  }

</script>

<main>
  <img
    on:load={handleLoad}
    class:intro={isLoaded}
    class="full"
    src="https://source.unsplash.com/random/1960x1080/?liquid"
    alt="background"
  />
  <img class="logo" src={CloudKidFace} alt="CloudKid Face" />
</main>

<SvgDefines />

<style>
  main {
    flex: 1;

    display: grid;
    place-items: center;

    grid-template-areas: "stack";

    position: relative;

    overflow: hidden;
  }

  main * {
    grid-area: stack;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .intro {
    animation: fadeIn 2s forwards;
  }

  .full {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
    opacity: 0;
  }

  .logo {
    mix-blend-mode: difference;
    z-index: 2;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  main::before {
    content: "";
    position: absolute;
    inset: -50vmax;
    -webkit-filter: url(#distort);
    filter: url(#distort);
    animation: rotate 50s linear infinite;
    transform-origin: center 60%;
    -webkit-backdrop-filter: blur(0);
    backdrop-filter: blur(0);
    z-index: 1;
  }

  img {
    height: 1rem;
  }
</style>
