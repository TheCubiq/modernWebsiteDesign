<script>
  import { MoveDown } from "lucide-svelte";
  import {
    desiredPosition,
    requestedUpdate,
    selectedSection,
    scrollerData,
  } from "../stores";

  const sectionDescription = [
    [
      "Works. A collection of recent <span class='intro-dash'></span> ish",
      "work by Cubiq.",
      "Currently working with Twitter.",
      "Currently working with Twitter.",
    ],
    [
      "F37. Design direction for the",
      "Manchester based foundry's new site.",
      "Direction and Design.",
    ],
    [
      "Nomad. A new website for the",
      "London based branding agency.",
      "Direction and Design.",
    ],
    [
      "DeepMind. Unused website for the",
      "leaders in machine learning and applied AI.",
      "Direction & Design at Koto.",
    ],
    [
      "Notice. A <a target='_blank' href='#'>web app</a> that lets talent",
      "share their availability directly with clients.",
      "Design & Development.",
    ],
    [
      "Easings. Generate, test and share",
      "custom easing <a target='_blank' href='#'>curves</a> and <a target='_blank' href='#'>box-shadows</a>.",
      "Design & Development.",
    ],
    [
      "Want. A minimal savings app for",
      "London based fintech start-up Banked.",
      "Direction & Design at Banked.",
    ],
    [
      "Koto. A new <a target='_blank' href='#'>website</a> for the",
      "Berlin, London & LA based studio.",
      "Direction & Design at Koto.",
    ],
    [
      "OnSite. A freelance <a target='_blank' href='#'>marketplace</a>",
      "matching talent with high quality work.",
      "Design & Development.",
    ],
    [
      "10x. Brand, product and website",
      "design for a financial technology start-up.",
      "Direction & Design at 10x.",
    ],
    [
      "Follow. A personal <a target='_blank' href='#'>site</a> playing",
      "with physics engines and social APIs.",
      "Design & Development.",
    ],
    [
      "Photographs. A site showing",
      "the photographs I occasionally take.",
      "Design & Development.",
    ],
    [
      "Thread. Product design for an",
      "online stylist and ecommerce start-up.",
      "Direction & Design at Thread.",
    ],
    [
      "SuperHi. Product design for an",
      "online coding community and school.",
      "Direction and Design.",
    ],
    [
      "Nonagrams. A minimal iOS game",
      "of the classic nine letter word puzzle.",
      "Direction and Design.",
    ],
    [
      "IO. A browser plug-in concept",
      "nudging you to spend less time online.",
      "Direction and Design.",
    ],
    [
      "Kindeo. App and website design",
      "for a new digital memory box start-up.",
      "Direction & Design at Elsewhen.",
    ],
    [
      "INT. A new website design for the",
      "creative inspiration blog It's Nice That.",
      "Direction and Design.",
    ],
    [
      "Airbnb. Website and app design",
      "as part of the 2014 Airbnb rebrand.",
      "Design at Design Studio.",
    ],
    [
      "Google. Various work for the",
      "world's largest advertising company.",
      "Direction & Design at <a href='#'>Elsewhen</a>.",
    ],
    [
      "Archive. Other bits of work",
      "I have completed over the years.",
      "Direction and Design.",
    ],
  ];
  const getPos = (obj) => {
    return obj.getBoundingClientRect().top;
  };

  let descriptionLines = [];

  $: firstLine = descriptionLines[0];

  let innerHeight;


  let hero;

  $: if (firstLine || innerHeight) {
    $scrollerData.lineCount = descriptionLines.filter(Boolean).length;
    $desiredPosition = getPos(hero);
    $requestedUpdate = false;
  }

  $: ({ linePositions, selectedId, closedNav } = $scrollerData);

  const px = (n) => {
    if (selectedId === -1 || n === null) return "0px";
    return `${n}px`;
  };
</script>

<svelte:window bind:innerHeight />

<section id="hero">

  <button
    on:click={() => ($scrollerData.closedNav = !closedNav)}
    class:closed={closedNav}
    class="nav"></button
  >

  <article bind:this={hero}>
    {#key $requestedUpdate}
      {#each sectionDescription[$selectedSection] as description, i}
        <p style:--y={px(linePositions[i])} bind:this={descriptionLines[i]}>
          {@html description}
        </p>
      {/each}
    {/key}
  </article>

  <MoveDown />
</section>

<style>
  p {
    transform: translateY(var(--y));
  }

  :global(#hero a) {
    color: var(--clr-bg);
  }

  button {
    position: fixed;
    top: 1em;
    left: 1em;

    min-width: 2em;
    aspect-ratio: 1;
    border-radius: 99em;

    background-color: var(--clr-text);

    z-index: 100;
    box-shadow: none;
    border: none;

    cursor: pointer

  }

  .closed {
    background-color: var(--clr-bg);
  }


  section {
    background-color: var(--clr-text);
    color: var(--clr-bg);

    display: grid;
    grid-template-columns: 1fr auto;

    height: 100vh;
    align-items: end;
    justify-items: start;
    text-align: start;
    padding: var(--padding);
  }
</style>
