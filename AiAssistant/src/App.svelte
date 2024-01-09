<script>
</script>

<main>

  <header>
    <svg xmlns="http://www.w3.org/2000/svg" width="47" height="19" fill="none">
      <g fill="currentColor">
        <path
          d="M32.698 1.162A2.375 2.375 0 0 1 34.74 0h7.539c1.84 0 2.982 2.004 2.042 3.588l-8.461 14.25A2.375 2.375 0 0 1 33.818 19h-7.539c-1.84 0-2.982-2.004-2.042-3.588l8.461-14.25ZM20.823 1.162A2.375 2.375 0 0 1 22.865 0h3.976c1.841 0 2.982 2.004 2.042 3.588l-8.46 14.25A2.375 2.375 0 0 1 18.38 19h-3.976c-1.84 0-2.982-2.004-2.042-3.588l8.461-14.25ZM11.323 1.162A2.375 2.375 0 0 1 13.365 0h1.601c1.841 0 2.982 2.004 2.042 3.588l-8.46 14.25A2.375 2.375 0 0 1 6.504 19h-1.6c-1.842 0-2.983-2.004-2.043-3.588l8.461-14.25Z" />
      </g>
    </svg>
    <a href="/">subscription</a>
    <a href="/">the finals released</a>
    <a href="/">en</a>
  </header>

  <section id="hero" class="corners">
    ai gen.2
  </section>
  <section id="slideshow">
    img
  </section>



</main>

<style>
  main {
    flex: 1;
    display: grid;
    place-items: center;
    max-height: 100vh;

    /* rad:2px; */
    background-color: var(--clr-bg);

    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr;

    padding: 1.5rem;
    gap: 1.5rem;

  }

  main > *{
    background-color: var(--clr-secondary);
    width: 100%;
    height: 100%;
  }

  header {
    width: 100%;
    height: auto;
    grid-column: 1 / -1;
    grid-row: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: var(--clr-secondary);

    z-index: 999;
    
    border-radius: var(--corner-radius);
  }

  header > * {
    background-color: var(--clr-bg);
  }

  section {
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: var(--corner-radius);
  }

  #slideshow {
    grid-column: 2;
    grid-row: 1 / -1;

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
