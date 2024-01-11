<!-- Franks Laboratory https://youtu.be/eExhAt8luvU -->
<svg height="0" width="0">
  <defs>
    <filter id='goo'>
      <feGaussianBlur in='SourceGraphic' stdDeviation='10' result='name' />
      <feColorMatrix in='name' mode='matrix' values='1 0 0 0 0
                0 1 0 0 0 
                0 0 1 0 0
                0 0 0 40 -15 ' result='aab' />
      <feComposite in="SourceGraphic" in2="aab" operator="atop"/>
    </filter>
  </defs>
</svg>