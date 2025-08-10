(() => {
  let algo = new Object();
  algo.apiVersion = 4;
  algo.name = "3colors";
  algo.author = "Taichi Goto";
  algo.acceptColors = 0;
  algo.properties = new Array();

  algo.properties.push(
    "name:color1|type:string|display:color1|write:setColor1|read:getColor1"
  );
  algo.setColor1 = (newval) => {
    algo.color1 = newval;
  };
  algo.getColor1 = () => {
    return algo.color1;
  };

  algo.properties.push(
    "name:color2|type:string|display:color2|write:setColor2|read:getColor2"
  );
  algo.setColor2 = (newval) => {
    algo.color2 = newval;
  };
  algo.getColor2 = () => {
    return algo.color2;
  };

  algo.properties.push(
    "name:color3|type:string|display:color3|write:setColor3|read:getColor3"
  );
  algo.setColor3 = (newval) => {
    algo.color3 = newval;
  };
  algo.getColor3 = () => {
    return algo.color3;
  };

  algo.rgbMapSetColors = (rawColors) => {};

  algo.rgbMap = (width, height, rgb, step) => {
    let map = new Array(height);
    for (let y = 0; y < height; y++) {
      map[y] = new Array(width);
      for (let x = 0; x < width; x++) {
        const rand = Math.floor(Math.random() * 3);
        if (rand === 0) {
          map[y][x] = parseInt(algo.color1, 16);
        } else if (rand === 1) {
          map[y][x] = parseInt(algo.color2, 16);
        } else {
          map[y][x] = parseInt(algo.color3, 16);
        }
      }
    }
    return map;
  };

  algo.rgbMapStepCount = (width, height) => {
    return 3;
  };

  // Development tool access
  if (typeof window !== "undefined") {
    window.testAlgo = algo;
  }
  return algo;
})();
