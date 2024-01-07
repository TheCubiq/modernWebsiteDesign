<script>
</script>

<main role="main">
  <header>
    <a href="/">logo</a>
    <p>path</p>
    <p>search</p>
    <p>cart</p>
    <p>happi</p>
  </header>
  <nav>
    <a href="">about</a>
    <a href="">menu</a>
    <a href="">shop</a>
    <a href="">order</a>
  </nav>
  <section>
    <article>main</article>
    <aside>
      <!-- ingredients -->
      Lorem ipsum, dolor sit amet reiciendis! Optio officiis, nobis fuga minima sed
      maiores fugiat, reprehenderit magni, nesciunt adipisci unde cumque sequi incidunt
      quasi quas porro vitae! Corporis sint deserunt provident eius voluptates eligendi
      rerum, totam quisquam dicta!
    </aside>
  </section>
</main>

<style>
  main {
    font-size: 1.5rem;
    
    text-align: start;

    flex: 1;
    display: grid;
    /* place-items: center; */
    grid-template-columns: auto 8fr 1fr 1fr auto;
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

  header {
    display: grid;
    grid-template-columns: subgrid;
    grid-column: 1/-1;
    grid-row: 1/2;

    position: sticky;
    bottom: 100%;

    border-bottom: 1px solid var(--clr-text);
  }

  header > *:not(:last-child),
  nav {
    border-right: 1px solid var(--clr-text);

    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  section {
    display: grid;
    grid-template-columns: subgrid;
    grid-column: 2/-1;

    /* place-content: center; */


    overflow-x: hidden;
    overflow-y: auto;

    height: 100%;

    padding: 1em;
  }
  
  article {
    /* position: sticky; */
    /* position: fixed; */
    /* top: auto; */
    z-index: 5;
  }

  aside {
    overflow-y: auto;
    grid-column: -4/span 2;
  }
</style>
