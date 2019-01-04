module.exports = (prefield, add) => {
  const posi = {
    x: add.x,
    y: add.y,
  };
  // prettier-ignore
  const directions =[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
  const around = directions.map((val) => [val[0] + posi.x, val[1] + posi.y]);

  // 周囲8マスかつ重複がなければtrueを返す
  for (let i = 0; i < prefield.length; i += 1) {
    const { x, y } = prefield[i];
    for (let k = 0; k < around.length; k += 1) {
      if (x === around[k][0] && y === around[k][1]) {
        if (posi.x === x && posi.y === y) {
          return false;
        }
        return true;
      }
    }
  }
  return false;
};
