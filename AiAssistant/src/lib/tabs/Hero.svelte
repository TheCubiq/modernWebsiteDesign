<section id="hero" class="corners">ai gen.2</section>

<style>

#hero {

grid-area: hero;
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