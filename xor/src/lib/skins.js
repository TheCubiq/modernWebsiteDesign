const skins = [
  {
    origin: { x: 1, y: 1 },
    path: [
      { x: 0, y: 0 },
      { x: 2, y: 0 },
      { x: 0, y: 2 },
    ],
    skin: "triangle",
  },
  {
    origin: { x: 1, y: 1 },
    path: [
      { x: 0, y: 0 },
      { x: 2, y: 0 },
      { x: 2, y: 2 },
      { x: 0, y: 2 },
    ],
    skin: "square",
  },
  {
    origin: { x: 1, y: 1 },
    path: [
      { x: 0, y: 0 },
      { x: 2, y: 0 },
      { x: 3, y: 2 },
      { x: 1, y: 2 },
    ],
    skin: "parallel",
  },
  {
    origin: { x: 1, y: 1 },
    path: [
      { x: 1, y: 0 },
      { x: 2, y: 1 },
      { x: 1, y: 2 },
      { x: 0, y: 1 },
    ],
    skin: "rhombus",
  },
  {
    origin: { x: 2, y: 2 },
    path: [
      { x: 4, y: 2 },
      { x: 2, y: 4 },
      { x: 0, y: 2 },
      { x: 2, y: 0 },
    ],
    skin: "rhombus2",
  },
  {
    origin: { x: 2, y: 2 },
    path: [
      { x: 4, y: 4 },
      { x: 0, y: 4 },
      { x: 0, y: 0 },
      { x: 4, y: 0 },
    ],
    skin: "square2",
  },
  {
    origin: { x: 2, y: 2 },
    path: [
      { x: 0, y: 4 },
      { x: 0, y: 0 },
      { x: 4, y: 0 },
    ],
    skin: "triangle2_lt",
  },
  {
    origin: { x: 2, y: 2 },
    path: [
      { x: 4, y: 4 },
      { x: 0, y: 0 },
      { x: 4, y: 0 },
    ],
    skin: "triangle2_rt",
  },
  {
    origin: { x: 2, y: 2 },
    path: [
      { x: 4, y: 4 },
      { x: 0, y: 4 },
      { x: 4, y: 0 },
    ],
    skin: "triangle2_rb",
  },
  {
    origin: { x: 2, y: 2 },
    path: [
      { x: 4, y: 4 },
      { x: 0, y: 4 },
      { x: 0, y: 0 },
    ],
    skin: "triangle2_lb",
  },
  {
    origin: { x: 3, y: 3 },
    path: [
      { x: 6, y: 6 },
      { x: 6, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 6 },
    ],
    skin: "square3",
  },
  {
    origin: { x: 3, y: 3 },
    path: [
      { x: 3, y: 6 },
      { x: 6, y: 3 },
      { x: 3, y: 0 },
      { x: 0, y: 3 },
    ],
    skin: "rhombus3",
  },
  {
    origin: { x: 2, y: 2 },
    path: [
      { x: 5, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 5 },
    ],
    skin: "triangle3_lt",
  },
  {
    origin: { x: 4, y: 4 },
    path: [
      { x: 5, y: 5 },
      { x: 0, y: 5 },
      { x: 5, y: 0 },
    ],
    skin: "triangle3_rb",
  },
  {
    origin: { x: 3, y: 2 },
    path: [
      { x: 3, y: 0 },
      { x: 6, y: 3 },
      { x: 0, y: 3 },
    ],
    skin: "triangle3_t",
  },
  {
    origin: { x: 3, y: 1 },
    path: [
      { x: 3, y: 3 },
      { x: 6, y: 0 },
      { x: 0, y: 0 },
    ],
    skin: "triangle3_b",
  },
  {
    origin: { x: 1, y: 1 },
    path: [
      { x: 0, y: 0 },
      { x: 3, y: 0 },
      { x: 0, y: 3 },
    ],
    skin: "triangled2",
  },

  {
    origin: { x: 1, y: 2 },
    path: [
      { x: 0, y: 2 },
      { x: 2, y: 0 },
      { x: 2, y: 3 },
      { x: 0, y: 5 },
    ],
    skin: "rhomboid2_end",
  },
  {
    path: [
      { x: 0, y: 0 },
      { x: 0, y: 3 },
      { x: 2, y: 5 },
      { x: 2, y: 2 },
    ],
    origin: { x: 1, y: 3 },
    skin: "rhomboid2_start",
  },
  {
    path: [
      { x: 0, y: 0 },
      { x: 4, y: -4 },
      { x: 4, y: 0 },
      { x: 2, y: 2 },
    ],
    origin: { x: 2, y: 0 },
    skin: "trapezoid4_tr",
  },
  {
    path: [
      { x: 2, y: 0 },
      { x: 4, y: 2 },
      { x: 0, y: 6 },
      { x: 0, y: 2 },
    ],
    origin: { x: 2, y: 2 },
    skin: "trapezoid4_bl",
  },
  {
    path: [
      { x: 2, y: 0 },
      { x: 4, y: 2 },
      { x: 4, y: 6 },
      { x: 0, y: 2 },
    ],
    origin: { x: 2, y: 2 },
    skin: "trapezoid4_br",
  },
  {
    path: [
      { x: 0, y: 0 },
      { x: 4, y: 4 },
      { x: 2, y: 6 },
      { x: 0, y: 4 },
    ],
    origin: { x: 2, y: 4 },
    skin: "trapezoid4_tl",
  },
  {
    path: [
      { x: 2, y: 2 },
      { x: 4, y: 0 },
      { x: 0, y: 0 },
    ],
    origin: { x: 2, y: 1 },
    skin: "down4",
  },
  {
    path: [
      { x: 2, y: 0 },
      { x: 4, y: 2 },
      { x: 0, y: 2 },
    ],
    origin: { x: 2, y: 2 },
    skin: "up4",
  },
  {
    path: [
      { x: 0, y: 2 },
      { x: 2, y: 0 },
      { x: 2, y: 4 },
    ],
    origin: { x: 2, y: 2 },
    skin: "left2",
  },
  {
    path: [
      { x: 0, y: 0 },
      { x: 2, y: 2 },
      { x: 0, y: 4 },
    ],
    origin: { x: 0, y: 2 },
    skin: "right2",
  },
];
const editorSkins = {
  cross: {
    origin: { x: 0.5, y: 0.5 },
    path: [
      { x: 0.46, y: 0.21 },
      { x: 0.54, y: 0.21 },
      { x: 0.54, y: 0.46 },
      { x: 0.79, y: 0.46 },
      { x: 0.79, y: 0.54 },
      { x: 0.54, y: 0.54 },
      { x: 0.54, y: 0.79 },
      { x: 0.46, y: 0.79 },
      { x: 0.46, y: 0.54 },
      { x: 0.21, y: 0.54 },
      { x: 0.21, y: 0.46 },
      { x: 0.46, y: 0.46 },
    ],
  },

  poly: {
    origin: { x: 0.5, y: 0.5 },
    path: [
      { x: 0.46, y: 0.21 },
      { x: 0.54, y: 0.21 },
      { x: 0.79, y: 0.46 },
      { x: 0.79, y: 0.54 },
      { x: 0.54, y: 0.79 },
      { x: 0.46, y: 0.79 },
      { x: 0.21, y: 0.54 },
      { x: 0.21, y: 0.46 },
    ],
  },
  triangle: {
    origin: { x: 0.5, y: 0.5 },
    path: [
      { x: 0.46, y: 0.21 },
      { x: 0.54, y: 0.21 },
      { x: 0.54, y: 0.54 },
      { x: 0.21, y: 0.54 },
      { x: 0.21, y: 0.46 },
    ],
  },
};

export { skins, editorSkins };
