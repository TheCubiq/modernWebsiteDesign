<script>
  import { Badge, HeartHandshake } from "lucide-svelte";

  import ramenSoup from "/ramenSoup.svg";
</script>

<main role="main">
  <header>
    <a href="/" class="logo">soya</a>
    <!-- <a href="/">
      <span>menu</span>
      <span>ramens</span>
      <span>miso ramen</span>
    </a> -->
    <div class="path">
      <a href="/">menu</a>
      <a href="/">ramens</a>
      <a href="/">miso ramen</a>
    </div>
    <a href="/">search</a>
    <a href="/">cart (2)</a>
    <a href="/">
      <Badge size="1em" strokeWidth={1.25} />
    </a>
  </header>

  <nav>
    <ul>
      <li>
        <a href="/">about</a>
      </li>
      <li>
        <a href="/">menu</a>
      </li>
      <li>
        <a href="/">shop</a>
      </li>
      <li>
        <a href="/">order</a>
      </li>
    </ul>

    <ul>
      <li>
        <a href="">FB</a>
      </li>
      <li>
        <a href="">IG</a>
      </li>
    </ul>
  </nav>

  <section>
    <article>
      <!-- main -->
      <h1>Miso<br />Ramen</h1>
      <p>
        Embark on a culinary journey to Japan with our savory Miso Ramen, a
        steaming bowl of pure comfort and flavor.
      </p>
    </article>
    <img src={ramenSoup} alt="A bowl of ramen soup with a spoon and chopsticks" />
    <aside>
      <!-- ingredients -->
      Lorem ipsum, dolor sit amet reiciendis! Optio officiis, nobis fuga minima sed
      maiores fugiat, reprehenderit magni, nesciunt adipisci unde cumque sequi incidunt
      quasi quas porro vitae! Corporis sint deserunt provident eius voluptates eligendi
      rerum, totam quisquam dicta!
    </aside>
  </section>

  <aside id="noise" />
</main>

<style>
  main {
    font-size: 1.5rem;

    text-align: start;

    flex: 1;
    display: grid;
    /* place-items: center; */
    grid-template-columns: auto 4fr 4fr 1fr 1fr auto;
    /* grid-template-columns: auto 8fr 1fr 1fr auto; */
    grid-template-rows: auto 1fr;

    max-height: 100svh;

    /* gap:2px; */
  }

  main > *:not(:is(header, section)) {
    width: 100%;
    height: 100%;
    /* border: 1px solid red; */

    /* background-color: rgb(66, 66, 66); */
  }

  a,
  header {
    text-decoration: none;
    text-transform: uppercase;
  }

  header {
    display: grid;
    grid-template-columns: subgrid;
    grid-column: 1/-1;
    grid-row: 1/2;

    /* position: sticky;
    bottom: 100%; */

    border-bottom: 1px solid var(--clr-text);
  }

  /* 
   if it doesn't support subgrid, use this instead
  */

  @supports not (grid-template-columns: subgrid) {
    header {
      grid-template-columns: 1fr auto 1fr;
      /* color: aqua; */
    }
    header > :nth-child(2) {
      grid-column: span 2;
      border-bottom: 1px solid var(--clr-text);
    }
  }

  header > *:not(:last-child),
  nav {
    border-right: 1px solid var(--clr-text);
  }

  header > *,
  nav {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    padding-inline: 1rem;
    text-wrap: nowrap;
  }

  nav {
    gap: 1rem;
  }

  section {
    display: grid;
    grid-template-columns: subgrid;
    grid-column: 2/-1;
    grid-row: span 2;

    /* place-content: center; */

    overflow-x: hidden;
    overflow-y: auto;

    height: 100%;

    padding: var(--gap-lg);

    overflow: hidden;
  }

  article {
    /* position: sticky; */
    /* position: fixed; */
    /* top: auto; */
    z-index: 5;
    /* font-size: 1.5em; */

    max-width: 60ch;

    text-wrap: balance;

    position: relative;
  }

  /* article::before {
        transition: inherit;
        content: "";
        position: absolute;
        inset: 0;
        
        background-image: url("./ramenSoup.svg");
        
        background-size: cover;

        background-position: center;
        background-repeat: no-repeat;
    } */

  h1 {
    font-size: 10rem;
    margin: 0;
    padding: 0;
    line-height: 0.8;
    text-transform: uppercase;
  }

  aside {
    overflow-y: auto;
    grid-column: -4 / span 2;
  }

  .logo {
    font-size: 2.5rem;
    font-weight: bold;
    font-family: "Kashima Brush Demo";
  }

  #noise {
    /* background-color: black; */

    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='300' height='300'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='10' stitchTiles='stitch'/></filter><path d='M0,0h300v300h-300' filter='url(%23n)' opacity='0.4'/></svg>");

    position: fixed;
    inset: 0;
    z-index: -1;

    /* width: 100%;
    height: 100%; */

    filter: saturate(0);
  }

  nav {
    display: grid;
    grid-template-columns: subgrid;
    grid-template-rows: subgrid;
    grid-row: span 2;

    padding-block: 1em;
  }

  ul {
    list-style: none;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 1rem;
  }

  /* header > :nth-child(2) {
    justify-self: flex-start
  } */

  .path {
    /* display: flex; */
    flex-direction: row;
    justify-content: flex-start;

    grid-column: span 2;
    
    padding-inline-start: var(--gap-lg);
  }

  .path > a:not(:first-child)::before {
    content: "/";
    padding-inline: 0.5em;
  }

  section img {
    margin-inline-start: -34%;
    margin-block-start: -4rem;
    height: 100%;
    width: 100%;
  }
</style>
