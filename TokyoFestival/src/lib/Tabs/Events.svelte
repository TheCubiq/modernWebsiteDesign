<script>

    import Pill from "../Pill.svelte";
import Stat from "../Stat.svelte";

import event1 from "../../assets/images/anime4_Dojo2.webp"
import event2 from "../../assets/images/anime5_Dojo3.webp"
import event3 from "../../assets/images/anime1_Lanterns.webp"

    export let events = [
        {
            name: "Main",
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

<section id="events" class="mask">
    <div class="event-wrapper">
        {#each events as event}
            <article style="--bg-img:url({event.image})">
                <h1 data-event-name={event.name}>{event.name}</h1>
            </article>
        {/each}
    </div>
    <ul>
        {#each events as event}
            <Stat name={event.name}>
                <!-- <span>{event.time}</span> -->
                <Pill text={event.time} />
            </Stat>
        {/each}
    </ul>
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

        margin-right: -10%;
        /* margin-bottom: -10%; */

        display: grid;
        grid-template-rows: 1fr auto;

        /* max-width: 70rem; */
        /* overflow-x: scroll; */
    }

    .event-wrapper {
        display: flex;
        flex:1;
        gap: .8em;
        grid-column: 1;
        grid-row: 1/-1;
    }

    ul {
        grid-column: 1;
        grid-row: 2/-1;

        flex:1;
        display: flex;
        /* gap: 1.5em; */
        /* justify-content: space-evenly; */

        border-radius: 1.5em;
        border: 2px solid #20202B;

        background: rgba(20, 20, 21, 0.60);

        backdrop-filter: blur(30px);

        z-index: 1;

        padding: 1em;
        margin: 1rem;

        /* overflow-x: scroll; */

        gap: .5em;

        /* background-color: red; */
    }

    article {
        flex-grow: 1;
        flex-basis: 33%;

        transition: 0.3s;
        transition-property: flex-basis;

        background: linear-gradient(180deg, rgba(0, 0, 0, 0.6), transparent 20%);
    }

    article:hover {
        flex-basis: 60%;
    }

    article {
        cursor: pointer;
        display: flex;
        /* align-items: flex-end; */
        /* justify-content: center; */
        line-break: anywhere;

        position: relative;
    }
    /* article:nth-child(even) {
        background-color: blue;
    } */

    article::before {
        content: "";
        position: absolute;
        inset: 0;
        /* border-radius: 2em; */
        /* background-image: url("https://i.imgur.com/20Q7JDm.png"); */
        background-image: var(--bg-img);
        
        z-index: -1;

        background-size: cover;
        background-position: center;
        filter: brightness(0.5);
        transition: 0.3s;
        transition-property: brightness scale;
    }
    article:hover::before {
        filter: brightness(.9);
        scale:1.1;
    }

    
            /* inset: 0; */
            /* grid-row: middleY;
            grid-column: middleX; */
    h1 {
        /* position: absolute; */
        flex:1;
        margin-inline-end: -2em;

        /* transform-origin: center left; */

        
        transition: .3s;
        line-break: normal;
        
        white-space: nowrap;

        font-size: 1.7rem;
        margin-inline-end: -2em;
        /* opacity: 0; */
        color: transparent;
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
        /* left: calc(100% - 1em); */
        
        position: absolute;
        right:1.25rem;
        top:2.5rem;
        transform-origin: left;
        /* margin-block-start: 1em; */
    }

    article:hover h1::before {
        /* transform: translateX(100%) rotate(0deg) translateX(-100%); */
        top: 1rem;
        opacity: 0;
    }

    article:hover h1 {
        transition-delay: .4s;
        margin: 0em;
        color: var(--clr-text);
    }

    article {
        /* margin-inline: .5em; */
        border-radius: 2em;
        overflow: clip;
        padding-block: 1em;
    }

    article:nth-child(1) {
        /* left: calc(50% + 2.2rem); */
        padding-inline-start: calc(5rem);

    }

    .mask {
        --masking-path: none;
        /* --masking-path: url("#blob2"); */
        --masking-path: url("../../assets/masks/mask2.svg");
    }
</style>