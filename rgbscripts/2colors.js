(() => {
  let algo = new Object();
  algo.apiVersion = 4;
  algo.name = "2colors";
  algo.author = "Taichi Goto";
  algo.acceptColors = 2;
  algo.properties = new Array();

  let colors = new Array(algo.acceptColors);

  algo.rgbMapSetColors = (rawColors) => {
    if (!Array.isArray(rawColors)) {
      return;
    }
    for (let i = 0; i < algo.acceptColors; i++) {
      if (i < rawColors.length) {
        colors[i] = rawColors[i];
      } else {
        colors[i] = 0;
      }
    }
  };

  algo.rgbMap = (width, height, rgb, step) => {
    let map = new Array(height);
    for (let y = 0; y < height; y++) {
      map[y] = new Array(width);
      for (let x = 0; x < width; x++) {
        const rand = Math.floor(Math.random() * 2);
        if (rand === 0) {
          map[y][x] = colors[0];
        } else {
          map[y][x] = colors[1];
        }
      }
    }
    return map;
  };

  algo.rgbMapStepCount = (width, height) => {
    return 2;
  };

  // Development tool access
  if (typeof window !== "undefined") {
    window.testAlgo = algo;
  }
  return algo;
})();
