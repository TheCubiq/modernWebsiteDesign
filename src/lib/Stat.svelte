<script>

    import { BookText } from "lucide-svelte";
    export let name = "users";
</script>
<li>
    <span>{name}</span>
    <slot />
</li>

<style>
    li {
        display: flex;
        align-items: flex-start;
        flex-direction: column;

        font-size: 1.5rem;

        margin-inline: auto;

    }
    span {
        font-size: .7em;
        opacity: .5;
        margin-bottom: .5em;
    }

    li > :not(span) {
        flex:1;
        display: flex;
        align-items: center;
        /* gap: 0.3em; */
        text-decoration: none;

    }
</style>