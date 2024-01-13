<script>
  import AppleLogo from "/apple-logo.svg";
</script>

<section id="hero" class="corners">
  <nav>
      <a href="/">home</a>
      <a href="/">inside</a>
      <a href="/">leave</a>
  </nav>

  <h1>ai gen.2 starsets new pic.dawn</h1>

  <ul>
    <li>
      <a href="/">explore apparel</a>
    </li>
    <li>
      <a href="/">news & blog</a>
    </li>
    <li>
      <img src="{AppleLogo}" alt="" />
      <a href="/">get the app</a>
    </li>
  </ul>

  <!-- ai gen.2 -->
</section>

<style>

#hero {

  grid-area: hero;

  display: grid;

  align-items: flex-start;

  padding: .75rem;

  /* grid-template-columns: 
    [nav-start buttons-start] 1fr [nav-end buttons-end] 1fr [end]; */
}

ul, nav {
  list-style: none;

  display: flex;
  column-gap: var(--spacing);
}

ul {
  
  flex-direction: column;

  row-gap: var(--spacing-half);
}


li {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.375rem;

  white-space: nowrap;

  border-radius: 0.75rem;
  border: 1px solid var(--Text, #000);

  padding: 0.375rem 0.75rem;
}






ul::after {
  /* content: "---"; */
  content: '';

  --size: .2em;
  
  background: radial-gradient(
    50% 50% at 50% 50%,
    var(--clr-text) calc(var(--size) - .5px), /*   antialiasing   */
    transparent var(--size)
  );
  background-size: 1em 1em;
  background-repeat: space;
  background-position: center;

  margin-inline: auto;

  margin-block: -.5em;

  width: 3em;
  height: 1em;

  /* flex: 1; */
  order: 98;
}

li:last-child {
  order: 99;
}









li img {
  height: .85em;
}
  
  .corners {
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
</style>