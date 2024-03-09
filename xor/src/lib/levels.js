export const levels = [
  {
    levelId: 0,
    final: [
      { pos: { x: 8, y: 8 }, skin: "square2" },
      { pos: { x: 8, y: 8 }, skin: "rhombus2" },
    ],
    start: [
      { pos: { x: 8, y: 5 }, skin: "square2" },
      { pos: { x: 8, y: 11 }, skin: "rhombus2" },
    ],
  },
  {
    levelId: 1,
    final: [
      { pos: { x: 8, y: 8 }, skin: "square2" },
      { pos: { x: 7, y: 7 }, skin: "square2" },
      { pos: { x: 9, y: 9 }, skin: "square2" },
    ],
    start: [
      { pos: { x: 3, y: 8 }, skin: "square2" },
      { pos: { x: 8, y: 8 }, skin: "square2" },
      { pos: { x: 13, y: 8 }, skin: "square2" },
    ],
  },

  {
    levelId: 2,
    final: [
      { pos: { x: 7, y: 7 }, skin: "triangle2_rb" },
      { pos: { x: 9, y: 9 }, skin: "triangle2_lt" },
      { pos: { x: 8, y: 8 }, skin: "square3" },
    ],
    start: [
      { pos: { x: 9, y: 12 }, skin: "triangle2_rb" },
      { pos: { x: 7, y: 12 }, skin: "triangle2_lt" },
      { pos: { x: 8, y: 5 }, skin: "square3" },
    ],
  },

  {
    // checkerBoard
    levelId: 3,
    final: [
      { pos: { x: 7, y: 6 }, skin: "triangle3_b" },
      { pos: { x: 7, y: 10 }, skin: "triangle3_t" },
      { pos: { x: 7, y: 8 }, skin: "rhombus3" },
    ],
    start: [
      { pos: { x: 10, y: 11 }, skin: "triangle3_t" },
      { pos: { x: 10, y: 5 }, skin: "triangle3_b" },
      { pos: { x: 5, y: 8 }, skin: "rhombus3" },
    ],
  },

  {
    // frog
    levelId: 4,
    final: [
      { pos: { x: 9, y: 9 }, skin: "triangled2" },
      { pos: { x: 9, y: 9 }, skin: "triangle3_lt" },
      { pos: { x: 8, y: 8 }, skin: "square2" },
    ],
    start: [
      { pos: { x: 11, y: 10 }, skin: "triangled2" },
      { pos: { x: 8, y: 4 }, skin: "triangle3_lt" },
      { pos: { x: 6, y: 10 }, skin: "square2" },
    ],
  },
  {
    // bar
    levelId: 5,
    final: [
      { pos: { x: 8, y: 8 }, skin: "square2" },
      { pos: { x: 8, y: 9 }, skin: "square2" },
      { pos: { x: 8, y: 7 }, skin: "square2" },
    ],
    start: [
      { pos: { x: 8, y: 8 }, skin: "square2" },
      { pos: { x: 12, y: 8 }, skin: "square2" },
      { pos: { x: 4, y: 8 }, skin: "square2" },
    ],
  },

  {
    // 2 arrows
    levelId: 6,
    final: [
      { pos: { x: 8, y: 7 }, skin: "triangle3_t" },
      { pos: { x: 8, y: 12 }, skin: "triangle3_b" },
      { pos: { x: 8, y: 11 }, skin: "rhombus3" },
    ],
    start: [
      { pos: { x: 10, y: 11 }, skin: "triangle3_t" },
      { pos: { x: 10, y: 5 }, skin: "triangle3_b" },
      { pos: { x: 5, y: 8 }, skin: "rhombus3" },
    ],
  },

  {
    // bird
    levelId: 7,
    final: [
      { pos: { x: 8, y: 8 }, skin: "triangled2" },
      { pos: { x: 8, y: 8 }, skin: "triangle3_lt" },
      { pos: { x: 8, y: 8 }, skin: "square2" },
    ],
    start: [
      { pos: { x: 11, y: 10 }, skin: "triangled2" },
      { pos: { x: 8, y: 4 }, skin: "triangle3_lt" },
      { pos: { x: 6, y: 10 }, skin: "square2" },
    ],
  },

  {
    // windows
    levelId: 8,
    final: [
      { pos: { x: 7, y: 8 }, skin: "rhombus3" },
      { pos: { x: 8, y: 9 }, skin: "rhombus3" },
      { pos: { x: 9, y: 8 }, skin: "rhombus3" },
      { pos: { x: 8, y: 7 }, skin: "rhombus3" },
    ],
    start: [
      { pos: { x: 4, y: 8 }, skin: "rhombus3" },
      { pos: { x: 8, y: 12 }, skin: "rhombus3" },
      { pos: { x: 12, y: 8 }, skin: "rhombus3" },
      { pos: { x: 8, y: 4 }, skin: "rhombus3" },
    ],
  },

  {
    // pickaxe
    levelId: 9,
    final: [
      { pos: { x: 7, y: 9 }, skin: "square2" },
      { pos: { x: 9, y: 9 }, skin: "square2" },
      { pos: { x: 7, y: 7 }, skin: "square2" },
    ],
    start: [
      { pos: { x: 8, y: 8 }, skin: "square2" },
      { pos: { x: 12, y: 8 }, skin: "square2" },
      { pos: { x: 4, y: 8 }, skin: "square2" },
    ],
  },
  {
    // lying tree
    levelId: 10,
    final: [
      { pos: { x: 8, y: 8 }, skin: "rhombus2" },
      { pos: { x: 7, y: 8 }, skin: "rhomboid2_end" },
      { pos: { x: 7, y: 8 }, skin: "rhomboid2_start" },
    ],
    start: [
      { pos: { x: 8, y: 8 }, skin: "rhombus2" },
      { pos: { x: 4, y: 7 }, skin: "rhomboid2_end" },
      { pos: { x: 12, y: 8 }, skin: "rhomboid2_start" },
    ],
  },

  {
    // bookmark
    levelId: 11,
    final: [
      { pos: { x: 8, y: 11 }, skin: "trapezoid4_tr" },
      { pos: { x: 8, y: 7 }, skin: "trapezoid4_bl" },
      { pos: { x: 8, y: 11 }, skin: "rhombus2" },
    ],
    start: [
      { pos: { x: 3, y: 8 }, skin: "trapezoid4_tr" },
      { pos: { x: 13, y: 8 }, skin: "trapezoid4_bl" },
      { pos: { x: 8, y: 8 }, skin: "rhombus2" },
    ],
  },

  {
    // crown
    levelId: 12,
    final: [
      { pos: { x: 8, y: 9 }, skin: "down4" },
      { pos: { x: 8, y: 6 }, skin: "trapezoid4_br" },
      { pos: { x: 8, y: 6 }, skin: "trapezoid4_bl" },
      { pos: { x: 8, y: 8 }, skin: "rhombus2" },
    ],
    start: [
      { pos: { x: 8, y: 5 }, skin: "down4" },
      { pos: { x: 11, y: 7 }, skin: "trapezoid4_br" },
      { pos: { x: 5, y: 7 }, skin: "trapezoid4_bl" },
      { pos: { x: 8, y: 10 }, skin: "rhombus2" },
    ],
  },

  {
    // keyhole
    levelId: 13,
    final: [
      { pos: { x: 9, y: 9 }, skin: "up4" },
      { pos: { x: 7, y: 9 }, skin: "up4" },
      { pos: { x: 8, y: 8 }, skin: "triangle3_t" },
    ],
    start: [
      { pos: { x: 8, y: 9 }, skin: "up4" },
      { pos: { x: 8, y: 12 }, skin: "up4" },
      { pos: { x: 8, y: 5 }, skin: "triangle3_t" },
    ],
  },

  {
    // owl
    levelId: 14,
    final: [
      { pos: { x: 8, y: 9 }, skin: "down4" },
      { pos: { x: 8, y: 7 }, skin: "triangle3_t" },
      { pos: { x: 8, y: 7 }, skin: "rhombus2" },
    ],
    start: [
      { pos: { x: 5, y: 10 }, skin: "down4" },
      { pos: { x: 8, y: 5 }, skin: "triangle3_t" },
      { pos: { x: 11, y: 9 }, skin: "rhombus2" },
    ],
  },

  {
    // fish
    levelId: 15,
    final: [
      { pos: { x: 9, y: 8 }, skin: "rhombus2" },
      { pos: { x: 7, y: 8 }, skin: "rhombus2" },
      { pos: { x: 8, y: 9 }, skin: "trapezoid4_tl" },
      { pos: { x: 8, y: 7 }, skin: "trapezoid4_bl" },
    ],
    start: [
      { pos: { x: 11, y: 11 }, skin: "rhombus2" },
      { pos: { x: 6, y: 4 }, skin: "rhombus2" },
      { pos: { x: 11, y: 7 }, skin: "trapezoid4_tl" },
      { pos: { x: 6, y: 8 }, skin: "trapezoid4_bl" },
    ],
  },

  {
    // zigzag
    levelId: 16,
    final: [
      { pos: { x: 8, y: 9 }, skin: "triangle2_rt" },
      { pos: { x: 8, y: 7 }, skin: "triangle2_lb" },
      { pos: { x: 8, y: 8 }, skin: "down4" },
      { pos: { x: 8, y: 9 }, skin: "up4" },
    ],
    start: [
      { pos: { x: 11, y: 8 }, skin: "triangle2_rt" },
      { pos: { x: 5, y: 8 }, skin: "triangle2_lb" },
      { pos: { x: 6, y: 7 }, skin: "down4" },
      { pos: { x: 10, y: 10 }, skin: "up4" },
    ],
  },

  {
    // home
    levelId: 17,
    final: [
      { pos: { x: 8, y: 9 }, skin: "triangle2_rt" },
      { pos: { x: 8, y: 9 }, skin: "triangle2_lb" },
      { pos: { x: 8, y: 10 }, skin: "down4" },
      { pos: { x: 8, y: 7 }, skin: "up4" },
      { pos: { x: 8, y: 9 }, skin: "rhombus2" },
    ],
    start: [
      { pos: { x: 12, y: 8 }, skin: "triangle2_rt" },
      { pos: { x: 4, y: 8 }, skin: "triangle2_lb" },
      { pos: { x: 8, y: 3 }, skin: "down4" },
      { pos: { x: 8, y: 14 }, skin: "up4" },
      { pos: { x: 8, y: 8 }, skin: "rhombus2" },
    ],
  },

  {
    // butterfly
    levelId: 18,
    final: [
      { pos: { x: 9, y: 7 }, skin: "trapezoid4_bl" },
      { pos: { x: 7, y: 9 }, skin: "trapezoid4_tr" },
      { pos: { x: 7, y: 10 }, skin: "down4" },
      { pos: { x: 9, y: 7 }, skin: "up4" },
    ],
    start: [
      { pos: { x: 11, y: 5 }, skin: "trapezoid4_bl" },
      { pos: { x: 5, y: 11 }, skin: "trapezoid4_tr" },
      { pos: { x: 8, y: 3 }, skin: "down4" },
      { pos: { x: 8, y: 14 }, skin: "up4" },
    ],
  },

  {
    // emerald
    levelId: 19,
    final: [
      { pos: { x: 8, y: 6 }, skin: "trapezoid4_bl" },
      { pos: { x: 8, y: 10 }, skin: "trapezoid4_tr" },
      { pos: { x: 8, y: 7 }, skin: "down4" },
      { pos: { x: 8, y: 10 }, skin: "up4" },
      { pos: { x: 8, y: 8 }, skin: "rhombus2" },
    ],
    start: [
      { pos: { x: 5, y: 5 }, skin: "trapezoid4_bl" },
      { pos: { x: 11, y: 11 }, skin: "trapezoid4_tr" },
      { pos: { x: 11, y: 6 }, skin: "down4" },
      { pos: { x: 5, y: 11 }, skin: "up4" },
      { pos: { x: 8, y: 8 }, skin: "rhombus2" },
    ],
  },

  {
    // crab
    levelId: 20,
    final: [
      { pos: { x: 8, y: 7 }, skin: "rhombus2" },
      { pos: { x: 6, y: 9 }, skin: "right2" },
      { pos: { x: 10, y: 9 }, skin: "left2" },
      { pos: { x: 8, y: 6 }, skin: "down4" },
      { pos: { x: 8, y: 9 }, skin: "rhombus2" },
    ],
    start: [
      { pos: { x: 8, y: 13 }, skin: "rhombus2" },
      { pos: { x: 6, y: 10 }, skin: "right2" },
      { pos: { x: 10, y: 10 }, skin: "left2" },
      { pos: { x: 8, y: 8 }, skin: "down4" },
      { pos: { x: 8, y: 4 }, skin: "rhombus2" },
    ],
  },

  {
    // fountain
    levelId: 21,
    final: [
      { pos: { x: 8, y: 8 }, skin: "rhombus2" },
      { pos: { x: 8, y: 10 }, skin: "trapezoid4_tl" },
      { pos: { x: 8, y: 6 }, skin: "trapezoid4_bl" },
      { pos: { x: 8, y: 11 }, skin: "down4" },
    ],
    start: [
      { pos: { x: 12, y: 8 }, skin: "rhombus2" },
      { pos: { x: 9, y: 5 }, skin: "trapezoid4_tl" },
      { pos: { x: 7, y: 10 }, skin: "trapezoid4_bl" },
      { pos: { x: 4, y: 8 }, skin: "down4" },
    ],
  },

  {
    // bird
    levelId: 22,
    final: [
      { pos: { x: 8, y: 7 }, skin: "down4" },
      { pos: { x: 8, y: 8 }, skin: "up4" },
      { pos: { x: 10, y: 8 }, skin: "left2" },
      { pos: { x: 8, y: 8 }, skin: "right2" },
    ],
    start: [
      { pos: { x: 8, y: 6 }, skin: "down4" },
      { pos: { x: 8, y: 11 }, skin: "up4" },
      { pos: { x: 11, y: 8 }, skin: "left2" },
      { pos: { x: 5, y: 8 }, skin: "right2" },
    ],
  },

  {
    // lollipop
    levelId: 23,
    final: [
      { pos: { x: 8, y: 8 }, skin: "triangle2_rt" },
      { pos: { x: 8, y: 8 }, skin: "triangle2_lb" },
      { pos: { x: 8, y: 7 }, skin: "down4" },
      { pos: { x: 8, y: 10 }, skin: "up4" },
      { pos: { x: 8, y: 8 }, skin: "rhombus2" },
    ],
    start: [
      { pos: { x: 11, y: 7 }, skin: "triangle2_rt" },
      { pos: { x: 5, y: 9 }, skin: "triangle2_lb" },
      { pos: { x: 5, y: 6 }, skin: "down4" },
      { pos: { x: 11, y: 11 }, skin: "up4" },
      { pos: { x: 8, y: 8 }, skin: "rhombus2" },
    ],
  },

  {
    // ribbon
    levelId: 24,
    final: [
      { pos: { x: 8, y: 10 }, skin: "rhombus3" },
      { pos: { x: 8, y: 11 }, skin: "left2" },
      { pos: { x: 8, y: 11 }, skin: "right2" },
      { pos: { x: 8, y: 7 }, skin: "up4" },
      { pos: { x: 8, y: 8 }, skin: "down4" },
    ],
    start: [
      { pos: { x: 8, y: 8 }, skin: "rhombus3" },
      { pos: { x: 4, y: 8 }, skin: "left2" },
      { pos: { x: 12, y: 8 }, skin: "right2" },
      { pos: { x: 8, y: 4 }, skin: "up4" },
      { pos: { x: 8, y: 13 }, skin: "down4" },
    ],
  },
];
