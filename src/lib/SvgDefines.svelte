<svg xmlns="http://www.w3.org/2000/svg" height="1" width="1" viewBox="0 0 1 1">
    <defs>
      <!-- trying to round corners on the go: -->
      <filter id='round'>
        <feGaussianBlur id="blur-radius" in='SourceGraphic' stdDeviation='20' result='name' />
        <feColorMatrix in='name' mode='matrix' values='1 0 0 0 0
                  0 1 0 0 0 
                  0 0 1 0 0
                  0 0 0 30 -15' result='aab' />
      </filter>
      
      <symbol id="masking-path" viewBox="0 0 837 650" preserveAspectRatio="none">
        <path d="M40.0266 0.776855L629 28.7955V146.207H793.416L837 580.273L0 649.652L40.0266 0.776855Z" fill="white" />
      </symbol>
      
      <!-- <animate
        xlink:href="#blur-radius"
        attributeName="stdDeviation"
        values="0;20;0"
        dur="1s"
        repeatCount="indefinite" /> -->
      
    </defs>
  </svg>