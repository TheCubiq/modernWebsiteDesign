<script>
  export let text = "empty";
</script>

<div class="wrapper">
  <slot />
  <div class="link">
    <span aria-label={text} />
  </div>
</div>

<style>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex:1;
}

.link {
    /*   background: #FFFFFF33; */

    --padding: 0.4em;

    padding: 0 var(--padding);
    /* font-size: 2rem; */
    border-radius: 0.2em;
    overflow: hidden;

    position: relative;
    color: transparent;

    max-height: calc(1em + var(--padding));

    max-width: min-content;

    align-items: flex-start;

    /* flex-direction: column; */
    /* display: flex; */
  }

  .link > span::after,
  .link span::before {

    pointer-events: none;

    content: attr(aria-label);
    content: attr(aria-label) / "";
    color: var(--clr-btn-text,var(--clr-text));
    transition: inherit;
    opacity: 1;

    white-space: nowrap;

    line-height: 1em; /* important for proper sizing */

    /*   background: red; */
  }

  .link span {
    display: flex;
    flex-direction: column;

    /* unu not that pretty xd  */
    --off: calc(var(--padding) / 2);

    margin: var(--off) 0;

    /*   transition: all .2s ease-out; */
    transition-timing-function: 
      cubic-bezier(0, 0.3, 0.33, 0.95);
    transition-property: opacity, transform, letter-spacing;
    transition-duration: .3s, .3s, .1s;
  }

  .wrapper:hover span {
    transform: translateY(-1em);
  }

  .wrapper:active:hover span {
    opacity: 1;
    /* translate: 0.2em 0; */
    letter-spacing: 0.1em;
  }

  .link > span::after,
  .wrapper:hover span::before {
    opacity: 0;
  }

  .wrapper:hover span::after {
    opacity: 0.7;
  }
</style>
