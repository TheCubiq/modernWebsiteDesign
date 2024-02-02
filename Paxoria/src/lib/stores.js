import { writable } from 'svelte/store';

export const selectedOffset = writable(0);
export const selectedSection = writable(0);
export const desiredPosition = writable(0);
export const descriptionPositions = writable({
  closedNav: false,
  selectedId: -1,
  lineCount: 0,
  linePositions: [],
});
export const waitForChange = writable(false);
