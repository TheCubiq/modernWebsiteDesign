import PocketBase from "pocketbase";

import { levels as localLevels } from "./levels.js";

const pb = new PocketBase("https://db.cubiq.dev/");


export const toSvgPath = (array) => {
  if (array?.length < 2) return "M 0 0 Z";
  return (
    array
      .map((point, i) => {
        return `${i === 0 ? "M" : "L"} ${point.x} ${point.y}`;
      })
      .join(" ") + " Z"
  );
};

const roundNum = (n, m) => Math.round(n * 10 ** m) / 10 ** m;

export const nameSkins = (list) => {
  const items = list.map(({ skin, path, origin }) => ({
    [skin]: { path, origin },
  }));
  const s = Object.assign({}, ...items);
  return s;
};

export const findCenterFromShapes = (shapes) => {
  const diff = shapes.reduce(
    (acc, shape) => ({
      x: acc.x + shape.pos.x,
      y: acc.y + shape.pos.y,
    }),
    { x: 0, y: 0 }
  );

  return {
    x: diff.x / shapes.length,
    y: diff.y / shapes.length,
  };
};

export const loadLevelCount = async () => {
  const list = await pb
    .collection("levels")
    .getList(1, 1)
    .catch((e) => console.error(e));
  const { totalItems } = list || { totalItems: 0 };
  return totalItems;
};

import { levels } from "./stores.js";
import { DB_LOCAL } from "./constants.js";

// $: levelsStorage = $levels;
let levelsCache = {};

const unsubscribe = levels.subscribe((value) => {
  levelsCache = value;
});

// export const preloadNextLevels = async (levelCount) => {
//   return pb
//     .collection("levels")
//     .getList(1, levelCount, { filter: "levelId>0" })

// }
export const loadLevelFromDB = async (levelId) => {
  const prefix = "lid_" + levelId;
  if (levelsCache[prefix]) {
    console.log("Level loaded from cache: " + prefix);
    return levelsCache[prefix];
  }

  if (DB_LOCAL) {
    console.log("local, loading the full db (" + localLevels.length + ")" );
    levels.update((ls) => {
      return localLevels.reduce((acc, l) => {
        acc["lid_" + l.levelId] = l;
        return acc;
      }, ls);
      // return localLevels.forEach((l) => {
      //   ls["lid_" + l.levelId] = l;
      // });
    });
    return levelsCache[prefix];
  }

  return pb
    .collection("levels")
    .getFirstListItem("levelId=" + levelId)
    .then((level) => {
      console.log("Level loaded from Online DB: " + prefix);
      // debugger;
      levels.update((ls) => {
        ls[prefix] = level;
        return ls;
      });
      return level;
    })
    .catch((e) => {
      console.error(e);
      throw e;
    });
};

export const loadSkins = async () => {
  const list = await pb
    .collection("skins")
    .getFullList()
    .catch((e) => {
      console.error(e);
      throw e;
    });
  return nameSkins(list);
};

export const relativeToCenter = (p, center) => {
  return {
    x: roundNum(p.x - center.x, 2),
    y: roundNum(p.y - center.y, 2),
  };
};

export const areCoordsSame = (a, b) => {
  return a.x === b.x && a.y === b.y;
};
