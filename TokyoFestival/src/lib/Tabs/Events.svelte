<script>
  import Pill from "../Pill.svelte";
  import Stat from "../Stat.svelte";

  import event1 from "../../assets/images/anime4_Dojo2.webp";
  import event2 from "../../assets/images/anime5_Dojo3.webp";
  import event3 from "../../assets/images/anime1_Lanterns.webp";
  import Widget from "../Widget.svelte";

  export let events = [
    {
      name: "Main Event",
      time: "5:00 pm - 7:00 pm",
      image: event1,
    },
    {
      name: "Quiver Dance",
      time: "5:00 pm - 7:00 pm",
      image: event2,
    },
    {
      name: "Golden Road",
      time: "5:00 pm - 7:00 pm",
      image: event3,
    },
  ];
</script>

<section id="events" class="mask">
  <div class="event-wrapper">
    {#each events as event}
      <article style="--bg-img:url({event.image})">
        <aside></aside>
        <h1 data-event-name={event.name}>{event.name}</h1>
        <!-- <Pill text={event.time} /> -->
        <Widget desc={event.name} />
      </article>
    {/each}
  </div>
  <!-- <ul>
        {#each events as event}
            <Stat name={event.name}>
                <Pill text={event.time} />
            </Stat>
        {/each}
    </ul> -->
</section>

<style>
  :root {
    --bg-img: "";
  }

  section {
    grid-area: events;

    display: grid;
    grid-template-rows: 1fr;
    overflow-x: auto;
    overflow-y: hidden;

    scroll-snap-type: x mandatory;

    scroll-behavior: smooth;

    container: scrollview / inline-size;

    /* resize: both;
        overflow: auto; */
  }

  @media (min-width: 48rem) {
    section {
      margin-right: -10%;
      margin-block: 1em;
    }
  }

  .event-wrapper {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 100%;
  }
  article {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.6), transparent 20%);
    scroll-snap-align: start;
  }

  article {
    display: grid;
    grid-template-columns:
      [backdrop-start eventname-start] 1fr
      [widget-start] auto
      [backdrop-end eventname-end widget-end];
    grid-template-rows:
      [backdrop-start eventname-start] 1fr
      [widget-start] auto
      [backdrop-end eventname-end widget-end];

    scroll-snap-align: start;

    position: relative;

    min-width: 0;
  }

  :global(#events article > .widget-main) {
    grid-area: widget;
    position: absolute !important;

    bottom: -5em;
    right: 0;

    transition: 0.5s;
    transform-origin: bottom right;
    transform: rotateX(90deg);
    perspective: 1000px;
  }

  :global(#events article:is(:hover, :focus-within) > .widget-main) {
    bottom: 0em;
    transition-delay: 0.5s;

    transform: rotateX(0deg);
  }
  :global(#events article:focus-within *) {
    transition: none;
  }

  @container scrollview (width > 30rem) {
    .event-wrapper {
      overflow: hidden;
      grid-template-columns: 1fr 1fr 1fr;
      --_open: 3fr;
      gap: 1em;
      transition: 0.5s;
    }

    .event-wrapper:has(article:nth-child(1):is(:hover, :focus-within)) {
      grid-template-columns: var(--_open) 1fr 1fr;
    }
    .event-wrapper:has(article:nth-child(2):is(:hover, :focus-within)) {
      grid-template-columns: 1fr var(--_open) 1fr;
    }
    .event-wrapper:has(article:nth-child(3):is(:hover, :focus-within)) {
      grid-template-columns: 1fr 1fr var(--_open);
    }

    article,
    article > aside {
      border-radius: 2em;
    }

    article:nth-child(1) h1 {
      padding-inline-start: 5rem !important;
    }
  }

  article > aside {
    grid-area: backdrop;
    position: relative;
    overflow: hidden;
  }

  article > aside::before {
    content: "";

    display: block;

    position: absolute;
    inset: 0;
    /* border-radius: 2em; */
    /* background-image: url("https://i.imgur.com/20Q7JDm.png"); */
    background-image: var(--bg-img);
    background-size: cover;
    background-position: center;

    /* overflow: clip; */

    z-index: -1;

    filter: brightness(0.5);
    transition: 0.3s;
    transition-property: brightness scale;
  }

  article:is(:hover, :focus-within) > aside::before {
    filter: brightness(0.9);
    scale: 1.1;
  }

  h1 {
    /* flex:1; */
    /* margin-inline-end: -2em; */
    padding-inline-start: 2em;

    transition: 0.3s;
    line-break: normal;

    white-space: nowrap;

    font-size: 1.7rem;
    /* margin-inline-end: -2em; */
    color: transparent;

    grid-area: eventname;
  }

  h1::after,
  h1::before {
    transition: inherit;
  }

  h1::before {
    transition-delay: 0.2s;
    color: var(--clr-text);
    font-weight: normal;
    content: attr(data-event-name);
    font-size: 1.5rem;
    position: absolute;
    transform: translateX(100%) rotate(90deg) translateX(0%);

    position: absolute;
    right: 1.25rem;
    top: 2.5rem;
    transform-origin: left;
  }

  article:is(:hover, :focus-within) h1::before {
    top: 1rem;
    opacity: 0;
  }

  article:is(:hover, :focus-within) h1 {
    transition-delay: 0.4s;
    /* margin: 0em; */
    padding-inline-start: 0em;
    color: var(--clr-text);
  }

  .mask {
    --masking-path: url("../../assets/masks/mask2.svg");
  }
</style>
