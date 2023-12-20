<script>

    import Stat from "../Stat.svelte";

    export let events = [
        {
            name: "Main",
            time: "5:00 pm - 7:00 pm",
            image: "https://i.imgur.com/qvykxBe.png"
        },
        {
            name: "Quiver Dance",
            time: "5:00 pm - 7:00 pm",
            image: "https://i.imgur.com/wHILIjl.png"
        },
        {
            name: "Golden Road",
            time: "5:00 pm - 7:00 pm",
            image: "https://i.imgur.com/7awMHXd.png"
        }
    ]
</script>

<section id="events" class="mask">
    <div class="event-wrapper">
        {#each events as event}
            <article style="--bg-img:url({event.image})">
                <h1>{event.name}</h1>
            </article>
        {/each}
    </div>
    <ul>
        {#each events as event}
            <Stat name={event.name}>
                <span>{event.time}</span>
            </Stat>
        {/each}
    </ul>
</section>

<style>

    :root {
        --bg-img: 'https://i.imgur.com/20Q7JDm.png';
    }

    section {
        grid-column: -1/-2;
        grid-row: 1/6;
        margin: 1em;
        
        /* display: flex; */

        transition: 0.3s;


        margin-right: -10%;
        /* margin-bottom: -10%; */

        display: grid;
        grid-template-rows: 1fr auto;
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
        justify-content: space-evenly;

        border-radius: 1.5em;
        border: 2px solid #20202B;

        background: rgba(20, 20, 21, 0.60);

        backdrop-filter: blur(30px);

        z-index: 1;

        padding: 1em;
        margin: 1rem;

        /* background-color: red; */
    }

    article {
        flex-grow: 1;
        flex-basis: 33%;
        transition: 0.3s;
    }

    article:hover {
        flex-basis: 60%;
    }

    article {
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
        border-radius: 2em;
        /* background-image: url("https://i.imgur.com/20Q7JDm.png"); */
        background-image: var(--bg-img);
        
        background-size: cover;
        background-position: center;
        filter: brightness(0.5);
        transition: 0.3s;
    }
    article:hover::before {
        filter: brightness(1);
    }

    h1 {
        position: absolute;
        font-size: 1.5rem;

        /* inset: 0; */
        /* grid-row: middleY;
        grid-column: middleX; */




        left:80%;
        top: 10%;

        transform-origin: center left;

        transform: rotate(90deg);
        
        transition: .3s;
        line-break: normal;
        
        white-space: nowrap;
    }

    ul span {

        font-size: .8rem;

        white-space: nowrap;

        padding: .1em;
        padding-inline: 1em;
        border-radius: 5em;

        border: 1px solid #757391;

        background: rgba(117, 115, 145, 0.10);

        backdrop-filter: blur(12px);
    }

    article {
        /* margin-inline: .5em; */
        border-radius: 1em;
    }
    
    article:hover h1 {
        /* transform: rotate(-90deg) translateY(-100%) ; */
        /* animation-direction: alternate; */
        /* transition: slide 0.3s ease-in-out; */

        /* grid-row: middleX;
        grid-column: middleY; */

        top: 10%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-0deg);

    }

    article:nth-child(1):hover > h1 {
        left: calc(50% + 2.2rem);
    }

    .mask {
        --masking-path: none;
        --masking-path: url("#blob2");
    }

    @keyframes slide {
        
        to {
            transform: rotate(-90deg);
        }
    }
</style>