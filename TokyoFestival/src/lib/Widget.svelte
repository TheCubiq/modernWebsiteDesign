<script>
  import { Droplet, Map, MapPin, Moon, MoveUpRight, Wind } from "lucide-svelte";

  export let place;
  export let date;
  export let weather;
  export let desc = "Tokyo's Kanda Matsuri";
</script>

<div class="widget-main mask">
  <span>
    <Map size="1em" />
    Nukikiku Ona St.
  </span>
  <span>
    <Moon size="1em" />
    07 p.m
  </span>
  <span>
    <Droplet size="1em" />
    88%
  </span>
  <span>
    <Wind size="1em" />
    5m/s
  </span>
  <div class="data">
    <h1>{desc}</h1>
    <span>|</span>
    <h2>
      Oct, 2024
      <span>02</span>
    </h2>
  </div>

  
  <a href="#">
    <MoveUpRight size="1em" />
  </a>
</div>

<style>
  .widget-main {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1em;

    margin: 0.5em;
    
    position: relative;
    
    mask: none;
    
    --_rad: 2rem;
    --_p: .5rem;
    padding: var(--_p);
    
  }

  .widget-main::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    z-index: -1;
    background: #0001;
    backdrop-filter: blur(30px);

    border-radius: var(--_rad);

    mask: var(--masking-path);

    mask-size: 100% 100%;

    mask-repeat: no-repeat;

  }


  span {
    white-space: nowrap;
    line-height: 1;
    margin: 0;
    padding: 0;
    height: fit-content;
  }

  :global(.widget-main span > svg) {
    vertical-align: top;
  }

  .widget-main > span:nth-child(1) {
    grid-column: span 3;
    text-align: end;
    padding-inline-end: 1em;
  }

  .widget-main > .data {
    grid-column: span 3;

    display: grid;
    grid-template-columns: 1fr auto 1fr;

    background: white;

    --_text-color: black;

    align-items: end;
    justify-items: center;
    align-content: center;

    border-radius: calc(var(--_rad) - var(--_p));
  }

  .data > * {
    color: var(--_text-color);
  }

  h1,
  h2 {
    font-size: 1rem;
    width: min-content;
    align-self: center;
  }

  h2 > span {
    font-size: 4rem;
    line-height: 1;
  }

  .mask {
    --masking-path: url("../assets/masks/mask4.svg");
  }

  a {
    position: absolute;
    top: 0;
    left: 0;

    text-decoration: none;
    color: black;

    line-height: 1;

    display: flex;
    justify-content: center;
    align-items: center;


    width: 2em;
    aspect-ratio: 1;
    border-radius: 99em;
    background-color: white;


    margin-block-start: -.5em;



    /* padding-inline-start: 1em;
    padding-left: 1em; */

  }
</style>
