<script>
  import * as THREE from 'three';
  // console.log(THREE)

  import images from './lib/images';
  import { onMount } from 'svelte';
  
  import frag from './lib/shaders/fragment.glsl?raw';
  import vert from './lib/shaders/vertex.glsl?raw';

  const lerp = (start, end, t) => start * (1 - t) + end * t;

  // textures for the mesh
  const loadedTextures = images.map((image) => {
    const texture = new THREE.TextureLoader().load(image);
    // texture.minFilter = THREE.LinearFilter;
    return texture;
  });


  
  let list,
      links = [];

  let innerWidth = 0,
      innerHeight = 0,

      mouse = {x: 0, y: 0},

      hovering = false;

  $: aspect = innerWidth / innerHeight;

  const entries = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about'},
    { name: 'Projects', url: '/projects' },
    { name: 'Contact', url: '/contact' }
  ];

  class Webgl {
    constructor(el){
      this.links = links;
      this.scene = new THREE.Scene();
      this.perspective = 1000; // z axis distance
      this.sizes = new THREE.Vector2(0, 0); // mesh size
      this.offset = new THREE.Vector2(0, 0); // mesh pos
      this.uniforms = {
        uTexture: { value: null },
        uAlpha: { value: 0.0 },
        uOffset: { value: new THREE.Vector2(0.0, 0.0) },
      };
      this.links.forEach((link, i) => {
        link.addEventListener('mouseenter', () => {
          this.onMouseEnter(i);
        });
      })
      this.linksHovering = false;
    }

    init() {
      this.setupRenderer(el);
      this.setupCamera();
      this.setupMesh();
      this.render();
      this.resize();
    }

    onMouseEnter(i) {
      // console.log('hovering', i);
      this.uniforms.uTexture.value = loadedTextures[i];
    }

    setupRenderer(el) {
      this.renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        canvas: el
      });

      this.renderer.setSize(innerWidth, innerHeight);
      this.renderer.setPixelRatio(window.devicePixelRatio);
    }

    resize() {
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
    };

    setupCamera(el) {
      // let fov = 2 * Math.atan((innerHeight / 2) / this.perspective) * (180 / Math.PI);
      let fov = (180 * (2 * Math.atan(innerHeight / 2 / this.perspective))) / Math.PI;
      this.camera = new THREE.PerspectiveCamera(fov, aspect, 0.1, 1000);
      this.camera.position.set(0, 0, this.perspective);
    }

    setupMesh() {
      this.geometry = new THREE.PlaneGeometry(1, 1, 32, 32);
      // this.material = new THREE.MeshBasicMaterial({color: 0xff0000});
      this.material = new THREE.ShaderMaterial({
        uniforms: this.uniforms,
        vertexShader: vert,
        fragmentShader: frag,
        transparent: true,
        // depthTest: false,
        // depthWrite: false,
      });
      this.mesh = new THREE.Mesh(this.geometry, this.material);
      this.sizes.set(250, 350);
      this.mesh.scale.set(this.sizes.x, this.sizes.y, 20);
      this.mesh.position.set(this.offset.x, this.offset.y, 0);
      this.scene.add(this.mesh);
    }

    render() {

      // offset (smooth mouse follow)
      this.offset.x = lerp(this.offset.x, mouse.x, 0.05);
      this.offset.y = lerp(this.offset.y, mouse.y, 0.05);

      // velocity kinda
      this.uniforms.uOffset.value.set(
        (mouse.x - this.offset.x) * 0.0005,
        -(mouse.y - this.offset.y) * 0.0005,
      )

      
      this.mesh.position.set(this.offset.x - (innerWidth / 2), -this.offset.y + (innerHeight/ 2), 0);
      this.uniforms.uAlpha.value = lerp(
        this.uniforms.uAlpha.value,
        hovering ? 1.0 : 0.0,
        0.05
      );

      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(this.render.bind(this));
    }

    checkElementHovering(el) {
      const rect = el.getBoundingClientRect();       
      return mouse.x > rect.left && mouse.x < rect.right && mouse.y > rect.top && mouse.y < rect.bottom;
    }
    
    updateHovering(){
      
      const parentHover = this.checkElementHovering(list);

      if (parentHover) {
        this.linksHovering = links.some((link, i) => {
          const hovering = this.checkElementHovering(link);
          if(hovering){
            this.onMouseEnter(i);
          }
          return hovering;
        }) 
      }

      hovering = parentHover;
    }



  }
  let el;

  const getTouchingPos = (e) => {
    e = e.clientX ? e : e.touches[0];
    return {x : e.clientX, y : e.clientY};
  };

  const handleMouseMove = (e) => {
    mouse = getTouchingPos(e);
    // const {x, y} = 
    // mouse.x = x;
    // mouse.y = y;
    webgl.updateHovering();
  }


  const webgl = new Webgl(el);
  onMount(() => {
    webgl.init()
  });

</script>

<svelte:window bind:innerWidth bind:innerHeight />

<main on:mousemove={handleMouseMove} on:touchmove={handleMouseMove}>

  
  <canvas bind:this={el}></canvas>
  <ul 
  bind:this={list} 
  >
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
    font-size: 2.5rem;
    padding: 2em;

    grid-template-areas: "stack";
  }

  main > * {
    grid-area: stack;
  }

  canvas {
    pointer-events: none;
    position: fixed;
    inset: 0;
  }

  ul {
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
