<section id="slideshow">img</section>

<style>
   #slideshow {
    grid-area: slideshow;
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
</style>