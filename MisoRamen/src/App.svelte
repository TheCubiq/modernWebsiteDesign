<script>
</script>

<main>
  <header>
    <p>logo</p>
    <p>path</p>
    <p>search/cart</p>
    <p>happi</p>
  </header>
  <nav>nav</nav>
  <section>
    <article>main</article>
    <article>
      <!-- ingredients -->
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa corporis blanditiis est excepturi quam optio repellat quae reprehenderit reiciendis! Optio officiis, nobis fuga minima sed maiores fugiat, reprehenderit magni, nesciunt adipisci unde cumque sequi incidunt quasi quas porro vitae! Corporis sint deserunt provident eius voluptates eligendi rerum, totam quisquam dicta!
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa corporis blanditiis est excepturi quam optio repellat quae reprehenderit reiciendis! Optio officiis, nobis fuga minima sed maiores fugiat, reprehenderit magni, nesciunt adipisci unde cumque sequi incidunt quasi quas porro vitae! Corporis sint deserunt provident eius voluptates eligendi rerum, totam quisquam dicta!
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa corporis blanditiis est excepturi quam optio repellat quae reprehenderit reiciendis! Optio officiis, nobis fuga minima sed maiores fugiat, reprehenderit magni, nesciunt adipisci unde cumque sequi incidunt quasi quas porro vitae! Corporis sint deserunt provident eius voluptates eligendi rerum, totam quisquam dicta!
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa corporis blanditiis est excepturi quam optio repellat quae reprehenderit reiciendis! Optio officiis, nobis fuga minima sed maiores fugiat, reprehenderit magni, nesciunt adipisci unde cumque sequi incidunt quasi quas porro vitae! Corporis sint deserunt provident eius voluptates eligendi rerum, totam quisquam dicta!
    </article>
  </section>
</main>

<style>
  main {
    flex: 1;
    display: grid;
    place-items: center;
    grid-template-columns: auto 4fr 1fr auto;
    grid-template-rows: auto 1fr;

    max-height: 100vh;

    /* gap:2px; */
    background-color: black;
  }

  main *:not(:is(header,section)) {
    width: 100%;
    height: 100%;
    /* border: 1px solid red; */
    
    /* background-color: rgb(66, 66, 66); */
  }

  main > * {
  }

  nav {
    /* display: grid; */
    /* grid-template-columns: subgrid; */
    /* grid-row: 1/-1;
    grid-column: 1/2; */
    border-right: 1px solid white;

    /* position: sticky; */
    /* top:0; */

    /* max-height: 100svh; */

    /* display: flex; */

    /* align-items: center; */
  }

  header {
    display: grid;
    grid-template-columns: subgrid;
    grid-column: 1/-1;
    grid-row: 1/2;

    position: sticky;
    bottom: 100%;

    border-bottom: 1px solid white;
  }

  header > * {
    border-right: 1px solid white;
  }

  section {
    display: grid;
    grid-template-columns: subgrid;
    grid-column: span 3;

    overflow-x: hidden;
    overflow-y: scroll;
    
    height: 100%;
  }
</style>
