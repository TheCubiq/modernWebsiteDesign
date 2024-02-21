<script>

    import Pill from "../Pill.svelte";
import Stat from "../Stat.svelte";

import event1 from "../../assets/images/anime4_Dojo2.webp"
import event2 from "../../assets/images/anime5_Dojo3.webp"
import event3 from "../../assets/images/anime1_Lanterns.webp"
  import Widget from "../Widget.svelte";

    export let events = [
        {
            name: "Main Event",
            time: "5:00 pm - 7:00 pm",
            image: event1
        },
        {
            name: "Quiver Dance",
            time: "5:00 pm - 7:00 pm",
            image: event2
        },
        {
            name: "Golden Road",
            time: "5:00 pm - 7:00 pm",
            image: event3
        }
    ]
</script>

<section id="events" class="mas_k">
    <div class="event-wrapper">
        {#each events as event}
            <article style="--bg-img:url({event.image})">
                <aside></aside>
                <h1 data-event-name={event.name}>{event.name}</h1>
                <!-- <Pill text={event.time} /> -->
                <Widget/>
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
        --bg-img: '';
    }

    section {
        /* grid-column: -1/-2;
        grid-row: 1/6; */

        grid-area: events;

        margin-block: 1em;

        
        /* margin-bottom: -10%; */

        display: grid;
        grid-template-rows: 1fr auto;

        /* max-width: 70rem; */
        overflow-x: auto;

        scroll-snap-type: x mandatory;

        scroll-behavior: smooth;

        container: scrollview / inline-size;

        /* resize: both;
        overflow: auto; */

        /* border-radius: 2em; */

        /* overflow: visible; */
    }

    @media (min-width: 48rem) {
        section {
            /* margin-right: -10%; */
        }
     }

    .event-wrapper {
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: 100%;
        gap: 1em;
    }

    /* ul {
        grid-column: 1;
        grid-row: 2/-1;

        flex:1;
        display: flex;

        border-radius: 1.5em;
        border: 2px solid #20202B;

        background: rgba(20, 20, 21, 0.60);

        backdrop-filter: blur(30px);

        z-index: 1;

        padding: 1em;
        margin: 1rem;

        gap: .5em;
    } */

    
    /* article {
        cursor: pointer;
        display: flex;
        line-break: anywhere;

        position: relative;

        border-radius: 2em;
        overflow: clip;
        padding-block: 1em;
    } */
    article {
        grid-column: span 1;
        min-width: 100%;
        transition: 0.3s;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.6), transparent 20%);
        scroll-snap-align: start;
    }

    /* article:hover { */
        /* flex-basis: 60%; */
        /* flex-grow: 3; */
        /* flex: 2 */
        /* min-width: 20rem; */
    /* } */

    /* .event-wrapper:has(article:hover) article:not(:hover) {
        min-width: 0em;
    } */

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
        
        border-radius: 2em;
        /* overflow: clip; */
        /* overflow: hidden; */

        /* padding: 1em; */

        scroll-snap-align: start;

        position: relative;

        min-width: 0;

    }

    :global(article > .widget-main) {
        grid-area: widget;
    }

    
    @container scrollview (width > 30rem) {
        /* article {
            flex:1
            min-width: 0rem;
        } */
        /* article:hover {
            flex: 2;
        } */
    }



    article > aside {
        grid-area: backdrop;
        position: relative;
        overflow: hidden;
        border-radius: 2em;
        
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
    article:hover > aside::before  {
        filter: brightness(.9);
        scale:1.1;
    }



    h1 {
        /* flex:1; */
        /* margin-inline-end: -2em; */
        padding-inline-start: 2em;
        
        transition: .3s;
        line-break: normal;
        
        white-space: nowrap;

        font-size: 1.7rem;
        /* margin-inline-end: -2em; */
        color: transparent;

        grid-area: eventname;

    }


    h1::after, h1::before {
        transition: inherit;
    }

    h1::before {
        transition-delay: .2s;
        color: var(--clr-text);
        font-weight: normal;
        content: attr(data-event-name);
        font-size: 1.5rem;
        position: absolute;
        transform: translateX(100%) rotate(90deg) translateX(0%);
        
        position: absolute;
        right:1.25rem;
        top:2.5rem;
        transform-origin: left;
    }

    article:hover h1::before {
        top: 1rem;
        opacity: 0;
    }

    article:hover h1 {
        transition-delay: .4s;
        /* margin: 0em; */
        padding-inline-start: 0em;
        color: var(--clr-text);
    }

    article:nth-child(1) h1 {
        /* padding-inline-start: calc(5rem); */
    }

    .mask {
        --masking-path: url("../../assets/masks/mask2.svg");
    }
</style>