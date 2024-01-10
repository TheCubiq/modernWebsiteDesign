<script>
</script>

<main>
  <header>
    <ul class="left">
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="47"
          height="19"
          fill="none"
        >
          <g fill="currentColor">
            <path
              d="M32.698 1.162A2.375 2.375 0 0 1 34.74 0h7.539c1.84 0 2.982 2.004 2.042 3.588l-8.461 14.25A2.375 2.375 0 0 1 33.818 19h-7.539c-1.84 0-2.982-2.004-2.042-3.588l8.461-14.25ZM20.823 1.162A2.375 2.375 0 0 1 22.865 0h3.976c1.841 0 2.982 2.004 2.042 3.588l-8.46 14.25A2.375 2.375 0 0 1 18.38 19h-3.976c-1.84 0-2.982-2.004-2.042-3.588l8.461-14.25ZM11.323 1.162A2.375 2.375 0 0 1 13.365 0h1.601c1.841 0 2.982 2.004 2.042 3.588l-8.46 14.25A2.375 2.375 0 0 1 6.504 19h-1.6c-1.842 0-2.983-2.004-2.043-3.588l8.461-14.25Z"
            />
          </g>
        </svg>
      </li>
      <li>
        <a href="/">subscription</a>
      </li>
      <li>
        <a href="/">the finals released</a>
      </li>
    </ul>
    <ul class="right">
      <li>
        <a href="/">en</a>
      </li>
    </ul>
  </header>

  <section id="hero" class="corners">ai gen.2</section>
  <section id="slideshow">img</section>
</main>

<style>
  main {
    flex: 1;
    display: grid;
    place-items: center;
    max-height: 100vh;

    /* rad:2px; */
    background-color: var(--clr-bg);

    /* grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr; */

    /* grid-template-columns: [header-start] 1fr [slideshow-start] 1fr [header-end slideshow-end];
    grid-template-rows: [header-start slideshow-start] auto [header-end] 1fr [slideshow-end]; */

    grid-template-columns: [header-start hero-start slideshow-start] 1fr [header-end hero-end slideshow-end];
    grid-template-rows: 
      [header-start] auto 
      [header-end hero-start] 1fr 
      [hero-end slideshow-start] 1fr [slideshow-end];

    padding: 1.5rem;
    column-gap: var(--spacing);
    row-gap: var(--spacing-half);
  }

  @media (min-width: 48rem) {
    main {
      grid-template-columns: 
        [header-start hero-start] 1fr 
        [hero-end slideshow-start] 1fr [header-end slideshow-end];
      grid-template-rows: 
        [header-start slideshow-start] auto 
        [header-end hero-start] 1fr [hero-end slideshow-end];
    }
  }

  main > section {
    background-color: var(--clr-secondary);
    width: 100%;
    height: 100%;
  }

  header {
    width: 100%;
    height: auto;

    /* grid-column: 1 / -1;
    grid-row: 1; */

    grid-area: header;

    display: flex;
    justify-content: space-between;

    align-items: flex-start;

    z-index: 999;

    border-radius: var(--corner-radius);

    gap: var(--spacing);
  }

  /* header > * {
    background-color: var(--clr-bg);
  } */

  header > ul {
    display: flex;
    /* justify-content: space-between; */
    align-items: center;

    flex-basis: 50%;

    flex-wrap: wrap;
    justify-content: space-evenly;
    column-gap: var(--spacing-half);

    list-style: none;
  }

  header > ul.left > :last-child {
    /* justify-content: flex-start; */
    display: flex;
    justify-self: flex-end;
  }

  header > ul.left > :last-child {
    display: flex;
    flex: 1;
    justify-content: flex-end;
  }



  header > ul.right {
    justify-content: flex-end;
  }

  ul a {
    padding: 0.5em;
    background-color: var(--clr-secondary);
    /* background-color: red; */
    line-height: 1;
    border-radius: 1em;

    text-wrap: nowrap;
  }

  ul li {
    display: flex;

    /* background: blue; */
    background: var(--clr-bg);
    padding: 0.5em;
  }

  .left li {
    border-radius: var(--corner-radius);
    padding-inline: 0;
  }

  .right li {
    border-bottom-left-radius: .75em;
  }

  section {
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: var(--corner-radius);
  }

  #hero {

    grid-area: hero;
  }

  #slideshow {
    /* grid-column: 2;
    grid-row: 1 / -1; */

    grid-area: slideshow;

    position: relative;

    /* background-color: var(--clr-bg); */
  }

  #slideshow::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("https://i.imgur.com/OdRYIJN.jpg");
    background-size: cover;
    background-position: center;
    border-radius: var(--corner-radius);
    /* z-index: -1; */
  }

  .corners {
    position: relative;

    z-index: 0;
  }

  .corners::after {
    content: "";
    position: absolute;
    inset: 0em;
    z-index: -1;
    border-radius: var(--corner-radius);
    background: inherit;

    transition: 0.1s;
  }

  .corners::before {
    content: "";
    position: absolute;

    --stroke-width: 0.17em;
    inset: calc(var(--stroke-width) * -1);

    --radi: calc(var(--corner-radius) + var(--stroke-width));
    border-radius: var(--radi);

    --over-length: 20px;
    --off-radi: calc(var(--radi) + var(--over-length));

    --circ: var(--clr-primary) var(--off-radi), transparent var(--off-radi);

    background: radial-gradient(circle at left top, var(--circ)),
      radial-gradient(circle at right top, var(--circ)),
      radial-gradient(circle at left bottom, var(--circ)),
      radial-gradient(circle at right bottom, var(--circ));
    z-index: -2;

    scale: 1;
  }

  /* background: linear-gradient(
    0deg,
    transparent var(--rad),
    #000 var(--rad),
    #000 calc(100% - var(--rad)),
    transparent calc(100% - var(--rad))
  ),
  linear-gradient(
    90deg,
    transparent var(--rad),
    #000 var(--rad),
    #000 calc(100% - var(--rad)),
    transparent calc(100% - var(--rad))
  ); */
</style>
