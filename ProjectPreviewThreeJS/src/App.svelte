<script>

  import images from './lib/images';
  const entries = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Projects', url: '/projects' },
    { name: 'Contact', url: '/contact' }
  ];

</script>

<main>

  
  <ul>
    {#each entries as link, i}
      <li bind:this={links[i]}>
        <a href={link.url}>{link.name}</a>
      </li>
    {/each}
  </ul>
</main>

<style>
  main {
    background: var(--clr-bg);

    display: grid;
    place-items: center;
    font-size: 1.5rem;

    grid-template-areas: "stack";
  }

  :global(main > *) {
    grid-area: stack;
  }

  ul {
    padding: 2em;
    list-style: none;
    display: flex; 
    flex-direction: column;
    gap: 2em;
    justify-self: stretch;
  }

  li {
    flex:1;
    position: relative;
    border-bottom: solid 1px var(--clr-primary);
  }

  a {
    text-decoration: none;
    color: inherit;
  }
</style>
