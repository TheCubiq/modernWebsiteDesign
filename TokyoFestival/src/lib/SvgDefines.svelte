<svg
  class="def"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  width="0"
  height="0"
>
  <defs>
    <!-- trying to round corners on the go: -->
    <filter id="round">
      <feGaussianBlur
        id="blur-radius"
        in="SourceGraphic"
        stdDeviation="0.04"
        result="name"
      />
      <feColorMatrix
        in="name"
        mode="matrix"
        values="1 0 0 0 0
                  0 1 0 0 0 
                  0 0 1 0 0
                  0 0 0 80 -40"
        result="aab"
      />
    </filter>

    <filter id='goo'>
      <feGaussianBlur in='SourceGraphic' stdDeviation='0.04' result='name' />
      <feColorMatrix in='name' mode='matrix' values='1 0 0 0 0
                0 1 0 0 0 
                0 0 1 0 0
                0 0 0 80 -40 ' result='aab' />
<!--       <feBlend in='SourceGraphic' in2='aab' /> -->
      <feComposite in="SourceGraphic" in2="aab" operator="atop"/>
    </filter>

    <filter id="glow" filterUnits="userSpaceOnUse">
      <feMorphology in="mask" result="dilated" operator="dilate" radius="10"
      ></feMorphology>
      <feGaussianBlur in="dilated" result="blurred" stdDeviation="20"
      ></feGaussianBlur>
      <feMerge>
        <feMergeNode in="blurred"></feMergeNode>
        <feMergeNode in="SourceGraphic"></feMergeNode>
      </feMerge>
    </filter>

    <mask
    id="masking-path"
    maskContentUnits="objectBoundingBox"
    >

      <!-- <rect width="1" height="1" fill="url(#gradientSVG)" />
      <linearGradient x2="0" y2="1" id="gradientSVG">
        <stop offset="25%" stop-color="white" />
        <stop offset="50%" stop-color="black" />
      </linearGradient> -->
      <path
        d="M.0478.0013.7512.0443V.245H.9477L.9996.8931 0 1 .0478.0013Z"
        fill="white"
        filter="url(#round)"
      />
    </mask>
    <mask
    id="blob2"
    maskUnits="objectBoundingBox"
    maskContentUnits="objectBoundingBox"
    >
      <path d="M1 0H.15V.15H0V1H1Z" fill="white" filter="url(#round)" />
    </mask>

    <!-- <animate
        xlink:href="#blur-radius"
        attributeName="stdDeviation"
        values="0;0.08;0"
        dur="3s"
        repeatCount="indefinite" /> -->
  </defs>
</svg>

<style>
  svg {
    width: 100%;
    height: 100%;
    position: absolute;
    pointer-events: none;
  }
</style>
