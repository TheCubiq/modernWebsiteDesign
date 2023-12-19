<script>
    import MaskedImage from "./lib/MaskedImage.svelte";
    import SvgDefines from "./lib/SvgDefines.svelte";
    import Data from "./lib/Tabs/Data.svelte";
</script>

<header>
    <h1>header</h1>
</header>
<main>
    <!-- <section class="main"> -->
        <MaskedImage mask="#masking-path">
            <!-- <img src="https://i.imgur.com/7JQsjw1.png" alt="" /> -->
        </MaskedImage>
    <!-- </section> -->
    <Data />
</main>

<SvgDefines />

<style>
    @import url("https://fonts.googleapis.com/css2?family=Manrope");

    main {
        /*   max-width: 30rem; */
        /* width: 100%;
        max-width: 80rem;
        height: 100%; */

        position: relative;
        /* display: flex; */
        flex:1;



        padding: 2rem;
    }

    main {

        /* min-block-size: 100vb; */

        display: grid;
        grid-template-columns: 5fr 2fr 5fr;
        grid-template-rows: repeat(8, 1fr);
    }

    section.main {
        grid-column: span 2;
        grid-row: span 6;

        background-color: color-mix(in lab, red 20%, transparent);
    }

    img {

        grid-column: span 2;
        grid-row: span 6;

        inline-size: unset;
        block-size: unset;

        object-fit: cover;

        place-self: stretch;
        
    }
</style>
