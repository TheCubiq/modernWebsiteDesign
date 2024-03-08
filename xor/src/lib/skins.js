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
