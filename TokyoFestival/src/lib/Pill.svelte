<script>
    export let text;
</script>

<span>{text}</span>

<style>
    span {
        font-size: .8rem;

        white-space: nowrap;

        padding: .1em;
        padding-inline: 1em;
        border-radius: 5em;

        border: 1px solid #757391;

        background: rgba(117, 115, 145, 0.10);

        backdrop-filter: blur(12px);
    }
</style>