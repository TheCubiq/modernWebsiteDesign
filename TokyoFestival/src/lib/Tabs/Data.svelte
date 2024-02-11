<script>
    import Stat from "../Stat.svelte";

</script>
<section id="data">
    <!-- <h1>
        eyo
        <span>data</span>
    </h1> -->
    <ul>
        <Stat name="users">
            <p>15.6k</p>
        </Stat>
        <Stat name="users">
            <p>15.6k</p>
        </Stat>
        <Stat name="users">
            <p>15.6k</p>
        </Stat>
    </ul>
</section>

<style>
    section {
        /* grid-column: 1/2;
        grid-row: -1/-3; */

        grid-area: data;

        border-radius: var(--border-rad);

        background: rgba(20, 20, 21, 0.60);
        backdrop-filter: blur(30px);

        display: flex;
        align-items: center;
        justify-content: center;
        padding-block: 1.5em;
    }

    ul {
        flex:1;
        display: flex;
        /* gap: 1.5em; */
        justify-content: space-evenly;
        margin-block-end: -2em;
    }

    p {
        line-height: 1;
    }

    span {
        color: var(--clr-primary);
    }
</style>