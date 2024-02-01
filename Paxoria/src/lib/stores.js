import { writable } from 'svelte/store';

export const selectedOffset = writable(0);
export const selectedId = writable(0);
export const desiredPosition = writable(0);
export const descriptionPositions = writable([]);
export const waitForChange = writable(false);
