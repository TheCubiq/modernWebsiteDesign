<script>
  import { blur } from "svelte/transition";
</script>

<header transition:blur={{ duration: 1000 }}>
  <ul class="left">
    <li>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="47"
        height="19"
        fill="none"
      >
        <g fill="currentColor">
          <path
            d="M32.698 1.162A2.375 2.375 0 0 1 34.74 0h7.539c1.84 0 2.982 2.004 2.042 3.588l-8.461 14.25A2.375 2.375 0 0 1 33.818 19h-7.539c-1.84 0-2.982-2.004-2.042-3.588l8.461-14.25ZM20.823 1.162A2.375 2.375 0 0 1 22.865 0h3.976c1.841 0 2.982 2.004 2.042 3.588l-8.46 14.25A2.375 2.375 0 0 1 18.38 19h-3.976c-1.84 0-2.982-2.004-2.042-3.588l8.461-14.25ZM11.323 1.162A2.375 2.375 0 0 1 13.365 0h1.601c1.841 0 2.982 2.004 2.042 3.588l-8.46 14.25A2.375 2.375 0 0 1 6.504 19h-1.6c-1.842 0-2.983-2.004-2.043-3.588l8.461-14.25Z"
          />
        </g>
      </svg>
    </li>
    <li>
      <a href="#">subscription</a>
    </li>
    <li>
      <a href="#">the finals released</a>
    </li>
  </ul>
  <ul class="right">
    <li class="corners">
      <a href="#">en</a>
    </li>
  </ul>
</header>

<style>
  header {
    width: 100%;
    height: auto;

    /* grid-column: 1 / -1;
    grid-row: 1; */

    grid-area: header;

    display: flex;
    justify-content: space-between;

    /* align-items: flex-start; */

    z-index: 999;

    border-radius: var(--corner-radius);

    gap: var(--spacing);

    position: sticky;
    top: 0;
  }

  header::before {
    content: "";
    position: absolute;
    inset: 0;

    /* background: var(--clr-bg); */
    z-index: -1;

    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

    mask-image: linear-gradient(black 80%, transparent);
    -webkit-mask-image: -webkit-linear-gradient(black 80%, transparent);
    /* -webkit-mask-clip: content-box; */
  }

  header > ul {
    display: flex;
    /* justify-content: space-between; */
    align-items: center;

    flex-basis: 50%;

    /* flex-wrap: wrap; */
    /* justify-content: space-evenly; */
    column-gap: var(--spacing-half);

    list-style: none;
  }

  header > ul.right {
    justify-content: flex-end;
  }

  ul a {
    padding: 0.5em;
    background-color: var(--clr-secondary);
    /* background-color: red; */
    line-height: 1;
    border-radius: 1em;

    text-wrap: nowrap;

    opacity: 0.8;
  }

  ul li {
    display: flex;
    padding: 0.5em;
  }

  .left > li:not(:is(:first-child, :nth-child(2))) {
    display: none;
  }

  .left li {
    border-radius: var(--corner-radius);
    padding-inline: 0;
  }

  .right li {
    background: var(--clr-bg);
  }

  .corners {
    --radius: 0.75em;
    border-bottom-left-radius: var(--radius);
    position: relative;
  }

  .corners::before,
  .corners::after {
    content: "";
    position: absolute;
    /* inset: 0; */

    width: var(--radius);
    height: var(--radius);

    background: radial-gradient(
      100% 100% at 0% 100%,
      transparent calc(100% - 0.3px) /* antialiasing */,
      var(--clr-bg) 100%
    );
  }

  .corners::before {
    top: 0;
    left: calc(var(--radius) * -1);
  }

  .corners::after {
    right: 0;
    bottom: calc(var(--radius) * -1);
  }

  @media (min-width: 48rem) {
    header > ul.left > li {
      display: flex !important;
    }

    .left > :last-child {
      flex: 1;
      justify-content: flex-end;
    }
  }
</style>
