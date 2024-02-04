import { writable } from 'svelte/store';

export const selectedOffset = writable(0);
export const selectedSection = writable(0);
export const desiredPosition = writable(0);
export const requestedUpdate = writable(false);
export const scrollerData = writable({
  isPlaying: false,
  closedNav: false,
  selectedId: -1,
  lineCount: 0,
  linePositions: [],
});
