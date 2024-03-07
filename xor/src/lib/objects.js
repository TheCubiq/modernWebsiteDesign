import { writable } from "svelte/store";

export let skins = writable({});

const roundNum = (n, m) => Math.round(n * 10 ** m) / 10 ** m;

let skinsLocal = {};

const unsubscribe = skins.subscribe((value) => {
  skinsLocal = value;
});

class ShapeEditorBoard {
  constructor() {
    this.shapePoints$ = writable([]);
    this.actionButtons = [];
    this.removePoints = false;
    this.originPoint = new ShapeItem(this, 0, { x: 8, y: 8 }, "origin");
    this.startPoint = new ShapeItem(this, 0, { x: 7, y: 7 }, "start");
    this.initPoints();
  }

  initPoints() {
    const points = [
      { x: 8, y: 6 },
      { x: 10, y: 9 },
      { x: 6, y: 9 },
    ];
    points.forEach((point) => {
      this.addPoint(point);
    });
  }

  addPoint(coords, name = "edit") {
    this.shapePoints$.update((shapes) => {
      const newShape = new ShapeItem(this, shapes.length + 1, coords, name);

      // return [...shapes, coords];

      return [...shapes, newShape];
    });
  }

  toggleRemoveMode = () => {
    this.removePoints = !this.removePoints;
    return this.removePoints;
  };

  processRemovePoints = () => {
    this.shapePoints$.update((shapes) => {
      return shapes.filter((shape) => !shape.markRemove);
    });
  };

  addButton(btn) {
    this.actionButtons.push({ ...btn });
  }

  checkBoardState(point) {
    if (this.removePoints) {
      console.log("remove mode", point);
      point.markRemove = true;
      this.processRemovePoints();
      return;
    }

    this.shapePoints$.update((shapes) => {
      return shapes;
    });
  }

  getJSON(shapes) {
    // relative to startPoint
    const relativePoints = shapes.map((shape) => ({
      x: shape.pos.x - this.startPoint.pos.x,
      y: shape.pos.y - this.startPoint.pos.y,
    }));

    // origin is relative to startPoint
    const origin = {
      x: this.originPoint.pos.x - this.startPoint.pos.x,
      y: this.originPoint.pos.y - this.startPoint.pos.y,
    };

    return JSON.stringify({
      points: relativePoints,
      origin,
    });
  }
}

class ShapeItem {
  constructor(board, id, pos, skin) {
    this.id = id;
    this.pos = pos || { x: 8, y: 8 };
    this.skin = skin || "square";
    this.boardRef = board;
    this.markRemove = false;
  }

  setPos(pos) {
    this.pos = pos;
    const ref = this.boardRef;
    const me = ref instanceof ShapeEditorBoard ? this : null;
    ref.checkBoardState(me);
  }

  loadSkin() {
    return skinsLocal[this.skin];
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
        .map(({ pos, skin }) => ({ pos, skin }))
    );
  }

  checkBoardState(log = false) {
    this.boardShapes$.update((shapes) => {
      if (log) console.log("ExportBoard: " + this.getJSON(shapes));
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
          f_shape.skin === shape.skin && this.areCoordsSame(point, f_shape.pos)
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
