import { writable } from "svelte/store";
import { areCoordsSame, findCenterFromShapes, relativeToCenter } from "./helperFunctions";
import { skins } from "./stores";


let skinsLocal = {};

const unsubscribe = skins.subscribe((value) => {
  skinsLocal = value;
});

const usedIds = {};

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

  removeAllPoints() {
    this.shapePoints$.set([]);
  }

  addPoint(coords, name = "edit") {
    this.shapePoints$.update((shapes) => {
      const newShape = new ShapeItem(this, shapes.length + 1, coords, name);
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
      point.markRemove = true;
      this.processRemovePoints();
      return;
    }

    this.shapePoints$.update((shapes) => {
      return shapes;
    });
  }

  getJSON(shapes) {
    if (!shapes) {
      this.shapePoints$.update((s) => {
        shapes = s;
        return s;
      });
    }
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
      path: relativePoints,
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
    this.uniqueId = this.generateUniqueId();
  }

  generateUniqueId() {
    let random = "0"
    while (usedIds[random] || random === "0") {
      random = Math.random().toString(36).substr(2, 9);
    }
    usedIds[random] = true;
    return this.skin + "-" + this.id + "-" + random;
  }

  setPos(pos) {
    this.pos = pos;
    const ref = this.boardRef;
    ref.checkBoardState(this);
  }

  loadSkin() {
    if (!skinsLocal[this.skin]) {
      console.log("Skin not found: ", this.skin)
      this.skin = "square";
    }
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
    this.removeShapes = false;
    this.boardEditEnabled = false;
  }

  toggleRemoveMode = () => {
    this.removeShapes = !this.removeShapes;
    return this.removeShapes;
  };

  toggleEditBoard = () => {
    this.boardEditEnabled = !this.boardEditEnabled;
    return this.boardEditEnabled;
  };

  addShape(skin = "square", pos) {
    // sadly not crossbrowser supported
    // const skin = prompt("Enter the name of the shape", "square"); 
    this.boardShapes$.update((shapes) => {
      const newShape = new ShapeItem(this, shapes.length + 1, pos, skin);

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

    this.final = level.final
  }

  getJSON(shapes) {
    return JSON.stringify(
      shapes
        // filter out the boardRef
        .map(({ pos, skin }) => ({ pos, skin }))
    );
  }

  checkBoardState(ref, log = false) {
    this.boardShapes$.update((shapes) => {
      
      if (log) console.log("ExportBoard: " + this.getJSON(shapes));


      if (this.removeShapes) {
        ref.markRemove = true;
        shapes = shapes.filter((shape) => !shape.markRemove);
      }

      if (this.boardEditEnabled) {
        return shapes;
      }

      this.levelCompleted$.update(() => this.checkLevelCompletion(shapes));
      
      return shapes;
    });
  }

  checkLevelCompletion(shapeData) {
    const final = this.final;

    const center = findCenterFromShapes(shapeData);
    const finalCenter = findCenterFromShapes(final);

    const relativeFinalPoints = final.map((shape) => ({
      skin: shape.skin,
      pos: relativeToCenter(shape.pos, finalCenter),
    }));

    return shapeData.every((shape, i) => {
      const point = relativeToCenter(shape.pos, center);
      return relativeFinalPoints.some(
        (f_shape) =>
          f_shape.skin === shape.skin && areCoordsSame(point, f_shape.pos)
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
