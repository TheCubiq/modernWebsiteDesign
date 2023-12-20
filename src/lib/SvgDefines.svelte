<svg class="def" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="0" height="0">
    <defs>
      <!-- trying to round corners on the go: -->
      <filter id='round'>
        <feGaussianBlur id="blur-radius" in='SourceGraphic' stdDeviation='0.05' result='name' />
        <feColorMatrix in='name' mode='matrix' values='1 0 0 0 0
                  0 1 0 0 0 
                  0 0 1 0 0
                  0 0 0 80 -40' result='aab' />
      </filter>
      
      <mask id="masking-path" maskUnits="objectBoundingBox" maskContentUnits="objectBoundingBox">
        <path d="M.0478.0013.7512.0443V.245H.9477L.9996.8931 0 1 .0478.0013Z" fill="white" filter="url(#round)" />
      </mask>
      
      <!-- <animate
        xlink:href="#blur-radius"
        attributeName="stdDeviation"
        values="0;20;0"
        dur="1s"
        repeatCount="indefinite" /> -->
      
    </defs>
  </svg>