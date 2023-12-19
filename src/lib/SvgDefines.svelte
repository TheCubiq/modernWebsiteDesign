<svg class="def" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" >
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

      <symbol viewBox="0 0 24 24" preserveAspectRatio="none" id="youtube" fill="white" >
        <path d="M2.50001 17C1.80143 13.7033 1.80143 10.2967 2.50001 7C2.5918 6.66521 2.76914 6.36007 3.01461 6.11461C3.26008 5.86914 3.56522 5.69179 3.90001 5.6C9.26346 4.71146 14.7366 4.71146 20.1 5.6C20.4348 5.69179 20.7399 5.86914 20.9854 6.11461C21.2309 6.36007 21.4082 6.66521 21.5 7C22.1986 10.2967 22.1986 13.7033 21.5 17C21.4082 17.3348 21.2309 17.6399 20.9854 17.8854C20.7399 18.1309 20.4348 18.3082 20.1 18.4C14.7366 19.2887 9.26344 19.2887 3.90001 18.4C3.56522 18.3082 3.26008 18.1309 3.01461 17.8854C2.76914 17.6399 2.5918 17.3348 2.50001 17Z" />
        <path d="M10 15L15 12L10 9V15Z" />
      </symbol>
      
      <!-- <animate
        xlink:href="#blur-radius"
        attributeName="stdDeviation"
        values="0;20;0"
        dur="1s"
        repeatCount="indefinite" /> -->
      
    </defs>
  </svg>