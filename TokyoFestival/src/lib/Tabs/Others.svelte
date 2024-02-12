<script>
    import Pill from "../Pill.svelte";
    import fishBowl from "../../assets/images/fishBowl.webp"
</script>

<section id="others" style="--bg-img:url({fishBowl})">
    <h1>Gold Fish Group Dance</h1>
    <Pill text="5:00 pm - 7:00 pm" />
</section>

<style>
    section {
        /* background-color: blueviolet; */
        /* grid-row: -1/-4;
        grid-column: -2/-1; */
        grid-area: others;

        border-radius: 3rem;
        border: 2px solid #20202b;

        /* backdrop-filter: blur(0); */
        overflow: hidden;

        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 2em;
        
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.6), transparent 20%);
        overflow: clip;
    }

    section::before {
        content: "";
        position: absolute;
        inset: 0;

        filter: brightness(0.8);

        z-index: -1;

        background: 
            linear-gradient(
                -90deg,
                rgba(0, 0, 0, 0.6),
                rgba(0, 0, 0, 0) 60%
            ),
            var(--bg-img)
            ;
        background-size: cover;
        background-position: center 70%;

        transition: 0.3s;
        transition-property: scale brightness;
    }

    section:hover::before {
        filter: brightness(1);
        scale: 1.1;
    }

    h1 {
        font-size: 2em;
        font-weight: normal;
        margin-bottom: 0.5em;
        max-width: 10ch;
        text-align: end;
    }
</style>
