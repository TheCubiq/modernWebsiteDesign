<script>
    import MaskedImage from "./lib/MaskedImage.svelte";
    import SvgDefines from "./lib/SvgDefines.svelte";
    import Data from "./lib/Tabs/Data.svelte";
    import Events from "./lib/Tabs/Events.svelte";
    import Navigation from "./lib/Tabs/Header.svelte";
    import Hero from "./lib/Tabs/Hero.svelte";
    import Others from "./lib/Tabs/Others.svelte";
</script>


<Navigation />
<main>
    <Hero />
    <Data />
    <Events />
    <Others />
</main>

<SvgDefines />

<style>
    @import url("https://fonts.googleapis.com/css2?family=Manrope");

    main {
        flex:1;
        padding: var(--card-padding);
    }

    main {
        display: grid;
        /* grid-template-columns: 5fr 2fr 5fr;
        grid-template-rows: repeat(8, 1fr); */

        grid-template-columns: 
            [hero-start data-start events-start others-start] 1fr;
            /* [hero-start data-start] 5fr 
            [data-end] 2fr 
            [events-start others-start hero-end] 5fr 
            [events-end others-end]; */

        /* grid-auto-rows: 100%; */
        
        grid-template-rows: 
            [hero-start] 80vh
            [hero-end events-start] 30vh 
            [events-end data-start] 20vh
            [data-end others-start] 20vh
            [events-end];

        position: relative;

        column-gap: 1em;
    }

    @media (min-width: 48rem) {
        main {
            grid-template-columns: 
                [hero-start data-start] 5fr 
                [data-end] 2fr 
                [events-start others-start hero-end] 5fr 
                [events-end others-end];

            grid-template-rows: 
                [hero-start events-start] 5fr 
                [events-end others-start] 1fr 
                [data-start hero-end] 2fr 
                [others-end data-end];
        }
    }

    main::before {
        content: "";
        position: fixed;
        /* inset: 1em; */

        height: 12rem;
        top: -8rem;
        justify-self: center;

        aspect-ratio: 1;
        border-radius: 99em;

        grid-column: 2/3;
        grid-row: 1/3;

        filter: url(#glow);

        background-color: #F44F3B;
    
    }
</style>
