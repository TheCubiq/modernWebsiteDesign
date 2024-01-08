<script>
</script>

<main>
  <div class="card">
    <div>do stuff there</div>
  </div>
</main>

<style>
  main {
    flex: 1;
    display: grid;
    place-items: center;
    max-height: 100vh;

    /* rad:2px; */
    background-color: var(--clr-bg);
  }

  .card {
    width: 10rem;
    height: 20rem;

    position: relative;

    border-radius: var(--rad);
    
    /* background: red; */
    
    display: flex;
    
    z-index: 0;
    --rad: 1rem;
  }

  .card > div {
    flex: 1;
    border-radius: var(--rad);
    background: var(--clr-bg);
  }

  .card::before {
    content: "";
    position: absolute;
    --inset: -2px;
    --radi: calc(var(--rad) - var(--inset));
    inset: var(--inset);
    border-radius: var(--radi);
    --offset: 10px;
    --off-radi: calc(var(--radi) + var(--offset));
    --circ: var(--clr-text) var(--off-radi), transparent var(--off-radi);
    background: 
      radial-gradient(circle at left top, var(--circ)),
      radial-gradient(circle at right top, var(--circ)),
      radial-gradient(circle at left bottom, var(--circ)),
      radial-gradient(circle at right bottom, var(--circ));
    z-index: -1;
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
