<script>
    import MaskedImage from "./lib/MaskedImage.svelte";
    import SvgDefines from "./lib/SvgDefines.svelte";
    import Data from "./lib/Tabs/Data.svelte";
    import Hero from "./lib/Tabs/Hero.svelte";
</script>

<header>
    <h1>header</h1>
</header>
<main>
    <Hero />
    <Data />
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
    }
</style>
