<script>
  import { ArrowUpRight } from "lucide-svelte";
import Linkable from "./Linkable.svelte";

  export let title = "timeline";
  export let section = [];
</script>

<section id={title}>
  <h3>{title}</h3>
  <ul>
    {#each section as { name, url, date }}
      <li>
        <a href={url} target="_blank">
          <Linkable text={name} />
        </a>
        {#if date}
          <span>{date}</span>
        {/if}
      </li>
    {/each}
  </ul>
</section>

<style>
  

  section {
    counter-increment: sections;
    margin-bottom: 2rem;
  }

  ul {
    list-style: none;
    /* padding: 0; */
  }

  li {
    display: flex;
  }

  a {
    color: var(--clr-accent);
    text-decoration: none;
    font-weight: bold;
  }

  span {
    display: inline-flex;
    flex: 1;
    text-transform: uppercase;
  }

  span::before {
    content: "";
    flex: 1;

    border-bottom: dotted 3px var(--clr-text);
    margin-bottom: 0.4em;
    margin-inline: 0.4em;
    opacity: 0.2;
  }

  h3 {
    font-size: 0.7rem;
    color: var(--clr-accent);
    font-weight: lighter;
    text-transform: uppercase;
    margin-bottom: .5rem;
  }

  
  h3:before {
    content: "0" counter(sections) " ";
  }

</style>