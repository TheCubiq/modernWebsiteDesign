<script>
    import SvgDefines from "./lib/SvgDefines.svelte";
</script>

<main>
    <div class="img-main">
        <svg class="ref-svg" height="100%" width="100%">
            <mask id="meta-mask">
                <use xlink:href="#masking-path" filter="url(#round)"></use>
            </mask>
        </svg>
    </div>
</main>

<SvgDefines />

<style>
    @import url("https://fonts.googleapis.com/css2?family=Manrope");

    main {
        /*   max-width: 30rem; */
        width: 100%;
        max-width: 80rem;
        height: 100%;

        position: relative;
        display: flex;

        /*   resize: both;
  overflow: auto; */

        padding: 2rem;
        /*   border-radius: 4.5rem; */
        border-radius: 1rem;
        border: 1px solid #1f1f37;

        background: linear-gradient(
                0deg,
                rgba(9, 9, 10, 0) 0%,
                rgba(9, 9, 10, 0) 100%
            ),
            url(https://i.imgur.com/2kGyIF8.png), no-repeat;

        backdrop-filter: blur(24px);
    }

    svg {
        position: absolute;
        z-index: -1;
        inset: 0;
    }

    symbol#masking-path {
        fill: transparent;
    }

    .img-main {
        height: 20rem;
        width: 10rem;

        max-width: 50rem;

        position: relative;

        flex: 1;

        background-image: url(https://i.imgur.com/7JQsjw1.png);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        mask-image: url(#meta-mask);
        mask-repeat: no-repeat;
        webkit-mask-repeat: no-repeat;
    }
</style>
