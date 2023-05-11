import React, { useEffect, useState } from 'react';

function GameCanvasContainer() {
  // Starting Title Size
  const [startingTileNumber, setStartingTileNumber] = useState({
    y: 10,
    x: 10,
  });
  const [tileSize, setTileSize] = useState({
    y: 20,
    x: 20,
  });
  const [startingTilePosition, setStartingTilePosition] = useState({
    xpos: 10,
    ypos: 10,
  });
  const [totalUnlockedTiles, setTotalUnlockedTiles] = useState(0);
  const [tileIdNumber, setTileIdNumber] = useState(1);

  console.log('totalUnlockedTiles', totalUnlockedTiles);
  console.log('startingTilePosition', startingTilePosition);

  const useScript = () => {
    useEffect(() => {
      let canvasBgColour = `#00f000`;

      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      const container = document.querySelector('#game-container');
      // canvas.style = "position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto; border:2px solid blue";
      container.appendChild(canvas);

      // Set size of canvas based on it parent
      var rect = canvas.parentNode.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;

      // Draw canvas
      context.fillStyle = canvasBgColour;
      context.fillRect(0, 0, canvas.width, canvas.height);

      // Mouse size
      let mouse = {
        x: null,
        y: null,
        radius: (canvas.height / 90) * (canvas.width / 90),
      };

      // Mouse position
      container.addEventListener('mousemove', function (e) {
        mouse.x = e.x;
        mouse.y = e.y;
      });

      // Listen for clicks
      canvas.addEventListener('click', (e) => {
        var x = e.pageX - canvas.offsetLeft;
        var y = e.pageY - canvas.offsetTop;
      });

      class Tile {
        constructor(id, xpos, ypos, xsize, ysize) {
          this.id = id;
          this.xpos = xpos;
          this.ypos = ypos;
          this.xsize = xsize;
          this.ysize = ysize;
        }

        draw(context) {
          context.beginPath();
          context.strokeRect(this.xpos, this.ypos, this.xsize, this.ysize);
          context.stroke();
        }
      }

      function createTileArray(context) {
        console.log('createTileArray');
        let dx = 0;
        let dy = 0;
        let id = tileIdNumber;

        for (var y = 0; y < startingTileNumber.y; y++) {
          for (var x = 0; x < startingTileNumber.x; x++) {
            const newTile = new Tile(id, dx, dy, tileSize.x, tileSize.y);
            dy += 20;
            id++;
            newTile.draw(context);
          }
          id++;
          dy = 0;
          dx += 20;
        }
      }

      function run(context) {
        createTileArray(context);
      }

      run(context);

      // function renderMap(context) {
      //   var dx = 0,
      //     dy = 0;
      //   context.save();

      //   context.scale(1, 0.5);
      //   context.rotate((45 * Math.PI) / 180);

      //   for (var y = 0; y < startingTileNumber.y; y++) {
      //     for (var x = 0; x < startingTileNumber.x; x++) {
      //       context.strokeRect(dx, dy, 40, 40);
      //       dx += 40;
      //     }
      //     dx = 0;
      //     dy += 40;
      //   }
      // }
      // renderMap(context);
    }, []);
  };

  return (
    <div id='game-container' className='grid absolute w-full h-full'>
      {useScript()}
    </div>
  );
}

export default GameCanvasContainer;
