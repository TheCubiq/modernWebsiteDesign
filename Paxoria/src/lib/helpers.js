// https://stackoverflow.com/a/17323608
// % in js is not modulo, it's remainder
export const mod = (n, m) => {
  return ((n % m) + m) % m;
};

export const lerp = (x, y, a) => x * (1 - a) + y * a;
