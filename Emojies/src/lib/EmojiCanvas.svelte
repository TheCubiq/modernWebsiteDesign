<script>
  import { writable } from "svelte/store";
  import { emojiList } from "./emojies";
  import { fade, scale } from "svelte/transition";


  
  const emojis = emojiList;

  let current = [0, 0],
    last = [0, 0];

  const getTouchingPos = (e) => {
    e = e.clientX ? e : e.touches[0];
    return [e.clientX, e.clientY];
  };

  function handleEmojiMove(e) {
    current = getTouchingPos(e);
    if (checkDistance(current, last)) {
      emojiCanvas.addEmoji(current[0], current[1]);
      last = current;
    }
  }

  function checkDistance(current, last) {
    let [x, y] = current;
    let [lastX, lastY] = last;
    let distance = Math.hypot(x - lastX, y - lastY);
    return distance > 50;
  }

  // create class emojiItem

  class EmojiItem {
    constructor(x, y, id) {
      this.x = x;
      this.y = y;
      this.emoji = this.generateEmoji();
      this.size = Math.random() * 2 + 1;
      this.rotation = Math.random() * 360;
      this.id = id;
    }

    generateEmoji() {
      return emojis[Math.floor(Math.random() * emojis.length)];

    }

  }

  // create class emojiCanvas

  class EmojiCanvas {
    constructor() {
      this.emojis$ = writable([]);
      this.emojiCount = 0;
    }

    addEmoji(x, y, emoji) {
      this.emojis$.update((emojis) => {

        if (emojis.length > 30) {
          emojis.shift();
        }

        return [...emojis, new EmojiItem(x, y, this.emojiCount++)];
      });
    }
  }

  const emojiCanvas = new EmojiCanvas();

  $: emojies = emojiCanvas.emojis$;
</script>

<svelte:window on:mousemove={handleEmojiMove} on:touchmove={handleEmojiMove} />

<div class="emoji-canvas">
  {#each $emojies as emoji (emoji.id)}
    <span
      style:--posX={emoji.x + "px"}
      style:--posY={emoji.y + "px"}
      style:--size={emoji.size + "em"}
      style:--rot={emoji.rotation + "deg"}

      transition:scale
      
      >{emoji.emoji}</span
    >
  {/each}
</div>

<style>
  .emoji-canvas {
    height: 100%;
    width: 100%;
  }

  span {
    font-size: var(--size, 1em);
    position: absolute;

    filter: drop-shadow(0 0 3px #000);

    
    transform: translate(-50%, -50%) rotate(var(--rot, 0deg));
    left: var(--posX);
    top: var(--posY);
    
    animation: pop-in 0.5s ease-out;
    pointer-events: none;
    user-select: none;
  }
</style>
