
<script>
  export let text = "Z - ring - $200";
</script>

<div class="wrapper">
  <div class="goome">
    <div class="circle"></div>
    <a href="/" class="text-container">
      <span>{text}</span>
    </a>
  </div>
</div>

<style>

  :root {
    --x: 50%;
    --y: 50%;
    --text-x: 0%;
    --text-y: 0%;
  }

  .circle {
    background: var(--clr-secondary);
    width: 1.5em;
    height: 1.5em;
    border-radius: 50%;
  }

  .wrapper::before {
    content: "";
    position: absolute;
    inset: -0.3em;
    background: #ffffff33;

    backdrop-filter: blur(10px);

    border-radius: 50%;

    z-index: -2;
  }

  .wrapper::after {
    content: "";
    position: absolute;
    inset: 0.3em;

    background: radial-gradient(150% 150% at 0% 0%, #65ffbe 5%, transparent 50%),
      radial-gradient(150% 150% at 100% 100%, #65ffbe 5%, transparent 50%),
      var(--accent, #4d9ba2);

    border-radius: 50%;

    z-index: 1;

    scale: 1;

    transition: 0.4s cubic-bezier(0, 0.3, 0.33, 0.95);
  }

  .wrapper:hover::after {
    scale: 0.9;
    rotate: -180deg;
  }

  .wrapper {

    font-size: 2em;

    display: flex;
    position: relative;
    cursor: pointer;

    z-index: 0;

    --s:1;

    position: absolute;
    left: var(--x);
    top: var(--y);
    transform: scale(var(--s)) translate(-50%, -50%);

    transition: 0.2s;

  }

  .wrapper:active {
    --s: .9;
  }

  .goome {
    filter: url(#goo);
  }

  span {
    line-height: 1;
  }

  .text-container {
    position: absolute;
    min-height: 1em;
    /*   width: 5em; */

    /* --offset: 1; */
    --offset: 0;

    /* left: var(--offset); */
    /* bottom: calc(50% - var(--offset)); */

    left: calc(50% + (var(--text-x) * var(--offset)));
    top: calc(50% + (var(--text-y) * var(--offset)));

    display: flex;
    align-items: center;

    padding: 0.2em;

    background: var(--clr-secondary);
    /*   border-radius: var(--round); */

    /* transform-origin: left top; */

    translate: -50% -50%;

    transform: scale(0);
    opacity: 0;

    transition: 0.4s cubic-bezier(0, 0.3, 0.33, 0.95);
  }

  .wrapper:hover .text-container {
    transform: scale(1);
    --offset: 1;
    opacity: 1;
  }

  .text-container span {
    user-select: none;
    font-size: 0.5em;

    opacity: .8;

    white-space: nowrap;
    overflow-wrap: normal;
    text-transform: uppercase;
  }
</style>
