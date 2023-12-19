<script>
    import SvelteLogo from "../assets/svelte.svg";
</script>

<div class="mask-wrapper">
    <!-- <slot /> -->
    <div class="helper child"></div>


    <svg xmlns="http://www.w3.org/2000/svg" class="child">
        <!-- <defs> -->
            <mask id="meta-mask" maskUnits="userSpaceOnUse" preserveAspectRatio="none">
                <use href="#masking-path" xlink:href="#masking-path" 
                ></use>
                <!-- filter="url(#round)" -->
            </mask>
            <!-- <image href="https://i.imgur.com/TGQl5tZ.png" src="https://i.imgur.com/TGQl5tZ.png" width="100%" height="100%" preserveAspectRatio="none" /> -->
        <!-- </defs> -->
    </svg>

    <!-- <svg xmlns="http://www.w3.org/2000/svg" class="child" preserveAspectRatio="none" height="100%" width="100%"> -->
        <!-- <mask id="meta-mask" preserveAspectRatio="none"> -->
            <!-- <use href="#masking-path" preserveAspectRatio="none" height="837" width="650" xlink:href="#masking-path" ></use> -->
            <!-- <rect x="0" y="0" width="837" height="650" fill="url(#masking-path)"/> -->
            <!-- filter="url(#round)" -->
        <!-- </mask> -->
        <!-- <image href="https://i.imgur.com/TGQl5tZ.png" src="https://i.imgur.com/TGQl5tZ.png" width="100%" height="100%" preserveAspectRatio="none" /> -->
    <!-- </svg> -->
</div>

<style>
    .mask-wrapper {

        grid-column: span 2;
        grid-row: span 6;

        /* height: 100%; */
        /* position: relative; */

        display: grid;
        grid-template-columns: 1fr;

        /* mask-image: url("#meta-mask"); */
        mask-image: url("../assets/path.svg");

        mask-repeat: no-repeat;
        mask-size: 100% 100%;
        -webkit-mask-clip: content-box;
        mask-clip: content-box;


        /* position: relative; */

    }

    
    .child {
        grid-row-start: 1;
        grid-column-start: 1;

        inline-size: 100%;
        block-size: 100%;

        block-size: 100%;
        /* min-block-size: 20vb; */

    object-fit: cover;

place-self: stretch;
    }
    

    .helper{
        background-image: url("https://i.imgur.com/TGQl5tZ.png");
        background-size: cover;
        background-position: center;

    }
    /* use {
        filter: url(#round);
    } */
</style>