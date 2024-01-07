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
        grid-template-columns: 5fr 2fr 5fr;
        grid-template-rows: repeat(8, 1fr);
        position: relative;

        column-gap: 1em;
    }

    main::before {
        content: "";
        position: absolute;
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
