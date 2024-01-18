<script>
  export let text = "empty";
  export let href = "#";
</script>

<a {href}>
  <span aria-label={text} />
</a>

<style>
  a {
    /*   background: #FFFFFF33; */

    --padding: 0.4em;

    padding: 0 var(--padding);
    font-size: 2rem;
    border-radius: 0.2em;
    overflow: hidden;

    position: relative;
    color: transparent;

    max-height: calc(1em + var(--padding));

    max-width: min-content;

    flex-direction: column;
    display: flex;
  }

  a > span::after,
  a span::before {
    content: attr(aria-label);
    content: attr(aria-label) / "";
    color: white;
    transition: inherit;
    opacity: 1;

    white-space: nowrap;

    line-height: 1em; /* important for proper sizing */

    /*   background: red; */
  }

  a span {
    display: flex;
    flex-direction: column;

    /* unu not that pretty xd  */
    --off: calc(var(--padding) / 2);

    margin: var(--off) 0;

    /*   transition: all .2s ease-out; */
    transition: all 0.4s cubic-bezier(0, 0.3, 0.33, 0.95);
  }

  a:hover span {
    transform: translateY(-1em);
  }

  a:active:hover span {
    opacity: 1;
    translate: 0.2em 0;
  }

  a > span::after,
  a:hover > span::before {
    opacity: 0;
  }

  a:hover > span::after {
    opacity: 0.7;
  }
</style>
