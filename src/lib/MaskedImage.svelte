
<div class="mask-wrapper">
    <!-- <slot /> -->
    <div class="helper child"></div>
</div>

<style>
    .mask-wrapper {
        grid-column: span 2;
        grid-row: span 6;

        display: grid;
        grid-template-columns: 1fr;

        -webkit-mask-image: url("#masking-path");
        mask-image: url("#masking-path");

        mask-repeat: no-repeat;
        mask-size: 100% 100%;
        -webkit-mask-clip: content-box;
        mask-clip: content-box;
    }
    .child {
        grid-row-start: 1;
        grid-column-start: 1;

        inline-size: 100%;
        block-size: 100%;

        object-fit: cover;

        place-self: stretch;
    }
    .helper {
        background-image: url("https://i.imgur.com/TGQl5tZ.png");
        background-size: cover;
        background-position: center;
    }
</style>
