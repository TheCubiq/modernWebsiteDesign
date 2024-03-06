import { writable } from "svelte/store";

export let skins = writable({})

const roundNum = (n, m) => Math.round(n * 10 ** m) / 10 ** m;


let skinsLocal = {}  

const unsubscribe = skins.subscribe(value => {
  skinsLocal = value;
});

class ShapeEditorBoard {
  constructor() {
    this.shapePoints = writable([]);
  }

  addShape(pos, name) {
    this.shapePoints.update((shapes) => {
      const newShape = new ShapeItem(this, shapes.length + 1, pos, name);

      return [...shapes, newShape];
    });
  }

  checkBoardState() {
  }
}

class ShapeItem {
  constructor(board, id, pos, skin) {
    this.id = id;
    this.pos = pos || { x: 8, y: 8 };
    this.skin = skin || "square";
    this.boardRef = board;
  }

  setPos(pos) {
    this.pos = pos;
    this.boardRef.checkBoardState();
  }

  loadSkin() {
    return skinsLocal[this.skin]
  }
}

class Board {
  constructor(size) {
    this.boardSize = size || 15;
    this.boardShapes$ = writable([]);
    this.boardPoints = this.generateBoardSnapPoints(this.boardSize);
    this.currentLevel = 1;
    this.final = [];
    this.levelCompleted$ = writable(false);
  }

  addShape(pos, name) {
    this.boardShapes$.update((shapes) => {
      const newShape = new ShapeItem(this, shapes.length + 1, pos, name);

      return [...shapes, newShape];
    });
  }

  setupLevel(level, levelId) {
    this.currentLevel = levelId + 1;
    this.boardShapes$.set(
      level.start.map(
        (shape, i) => new ShapeItem(this, i, shape.pos, shape.skin)
      )
    );

    this.finalCenter = this.findCenterFromShapes(level.final);

    const finalCenteredAnchor = this.relativeToCenter(this.finalCenter, {
      x: this.boardSize / 2 + 0.5,
      y: this.boardSize / 2 + 0.5,
    });

    this.final = level.final.map((shape, i) => {
      return new ShapeItem(
        null,
        i,
        this.relativeToCenter(shape.pos, finalCenteredAnchor),
        shape.skin
      );
    });
  }

  findCenterFromShapes(shapes) {
    const diff = shapes.reduce(
      (acc, shape) => {
        return {
          x: acc.x + shape.pos.x,
          y: acc.y + shape.pos.y,
        };
      },
      { x: 0, y: 0 }
    );

    return {
      x: diff.x / shapes.length,
      y: diff.y / shapes.length,
    };
  }

  relativeToCenter(p, center) {
    return {
      x: roundNum(p.x - center.x, 2),
      y: roundNum(p.y - center.y, 2),
    };
  }

  getJSON(shapes) {
    return JSON.stringify(
      shapes
        // filter out the boardRef
        .map(({ boardRef, id, ...shape }) => shape)
    );
  }

  checkBoardState(log = false) {
    this.boardShapes$.update((shapes) => {
      if (log) console.log(this.getJSON(shapes));
      else this.levelCompleted$.update(() => this.checkLevelCompletion(shapes));
      return shapes;
    });
  }

  areCoordsSame(p1, p2) {
    return p1.x === p2.x && p1.y === p2.y;
  }

  checkLevelCompletion(shapeData) {
    const final = this.final;

    const center = this.findCenterFromShapes(shapeData);
    const finalCenter = this.findCenterFromShapes(final);

    const relativeFinalPoints = final.map((shape) => ({
      skin: shape.skin,
      pos: this.relativeToCenter(shape.pos, finalCenter),
    }));

    return shapeData.every((shape, i) => {
      const point = this.relativeToCenter(shape.pos, center);
      return relativeFinalPoints.some(
        (f_shape) =>
          f_shape.skin === shape.skin &&
          this.areCoordsSame(point, f_shape.pos)
      );
    });
  }

  generateBoardSnapPoints(boardSize) {
    const isInCircle = (x, y, ratio) => {
      return Math.sqrt(x ** 2 + y ** 2) <= ratio;
    };

    return Array(boardSize)
      .fill()
      .map((_, i) =>
        Array(boardSize)
          .fill()
          .map((_, j) => ({ x: i + 0.5, y: j + 0.5 }))

          // remove points outside of circle
          .filter((point, _) => {
            return isInCircle(
              point.x / boardSize - 0.5,
              point.y / boardSize - 0.5,
              0.5
            );
          })
      );
  }
}

export { Board, ShapeEditorBoard };
