
<div class="mask-wrapper">
    <slot />
</div>

<style>
    .mask-wrapper {
        /* grid-column: span 2;
        grid-row: span 6; */

        /* -webkit-mask-image: url("#masking-path");
        mask-image: url("#masking-path"); */
        /* -webkit-mask: url("#masking-path"); */
        /* mask: url("#masking-path"); */
        mask: url("../assets/maskingPath1.svg")

        /* mask-repeat: no-repeat;
        mask-size: 100% 100%;
        -webkit-mask-clip: content-box;
        mask-clip: content-box; */
    }    
</style>
