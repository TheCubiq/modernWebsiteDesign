<svg>
  <defs>
    <filter id="distort">
      <feTurbulence
        id="turbo"
        type="fractalNoise"
        numOctaves="1"
        result="warp"
        baseFrequency="0.015"
      />
      <feDisplacementMap
        xChannelSelector="R"
        yChannelSelector="G"
        scale="30"
        in="SourceGraphic"
        in2="warp"
      />
    </filter>
  </defs>
</svg>

<style>
  svg {
   position: absolute;
   /* visibility: hidden; */
   pointer-events: none;
  }
</style>
