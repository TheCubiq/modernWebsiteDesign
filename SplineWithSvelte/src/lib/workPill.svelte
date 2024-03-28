<script>
  import { ArrowUpRight, Eye } from "lucide-svelte";

  export let name = "nothing";
  export let id = 0;
  export let url = "#";

  // export let data = {};

  export let switchScene = null;

  const switchMe = () => {
    if (switchScene) {
      switchScene(id);
    }
  };
</script>

<!-- type="button"  -->
<a 
  href={url}
  target="_blank"
  class="work-pill"
  on:mouseover={switchMe}
  on:focus={switchMe}
>
  <span class="inset-span">
    <Eye aria-hidden="true" />
    <span class="work-pill-text">{name}</span>
    <ArrowUpRight aria-hidden="true" />
  </span>
</a>

<style>
  @property --gradient-angle {
    syntax: "<angle>";
    initial-value: -15deg;
    inherits: false;
  }

  @keyframes rotation {
    0% {
      --gradient-angle: -15deg;
    }

    100% {
      --gradient-angle: 345deg;
    }
  }

  .work-pill {
    /* remove all button styles */
    text-decoration: none;
    background: none;
    border: none;
    padding: 0;
    font: inherit;

    color: var(--clr-accent);
    cursor: pointer;
    border-radius: 8px;
    
    padding-inline: 0.5em;
    
    display: inline-block;
    position: relative;
    
    font-weight: 600;
    
    --_bg-y: -0.05em;
  }

  .work-pill:before {
    filter: blur(4px);
    transform: translate(0, 0);
  }
  .work-pill:before,
  .work-pill:after {
    content: "";
    border-radius: inherit;
    background: conic-gradient(
      from var(--gradient-angle),
      #aaa3,
      #aaa7,
      #aaaf,
      #aaa7,
      #aaa3
    );
    opacity: 0.4;
    /* height: 24px; */
    transition: opacity 0.5s;
    animation: 5s linear infinite rotation;
    position: absolute;
    inset: 0;
    inset-block: var(--_bg-y);
  }

  .work-pill::before {
    filter: blur(4px);
    transform: translateZ(0);
  }

  .inset-span {
    overflow: visible;
  }

  .inset-span:after {
    content: "";
    z-index: 1;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background: #1118;
    border-radius: 7px;
    position: absolute;

    --_inset: .075em;

    inset: var(--_inset);
    inset-block: calc(var(--_inset) + var(--_bg-y));
  }

  .work-pill-text {
    z-index: 2;

    font-size: 15px;
    position: relative;
  }

  :global(.work-pill .lucide) {
    height: 1em;
    width: 1em;
    z-index: 2;
    position: relative;
    margin-bottom: -0.16em;

    transition: 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  }

  :global(
      .work-pill .lucide:first-of-type,
      .work-pill:hover .lucide:last-of-type
    ) {
    opacity: 1;
    margin-right: 0em;
    transform: translateX(0px);
  }

  :global(
      .work-pill:hover .lucide:first-of-type,
      .work-pill .lucide:last-of-type
    ) {
    opacity: 0;
    margin-right: -1em;
    transform: translateX(-5px);
  }

  /* max-width: 2em; */

  .work-pill:hover::after,
  .work-pill:hover::before {
    opacity: 0.8;
  }
</style>
