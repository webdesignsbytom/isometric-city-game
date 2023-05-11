import React, { useEffect, useState } from 'react';

function GameCanvasContainer() {
  // Starting Title Size
  const [startingTileNumber, setStartingTileNumber] = useState({
    y: 10,
    x: 10,
  });
  const [tileSize, setTileSize] = useState({
    y: 40,
    x: 40,
  });


  const [tileArray, setTileArray] = useState([]);
  const [totalUnlockedTiles, setTotalUnlockedTiles] = useState(0);
  const [tileIdNumber, setTileIdNumber] = useState(1);

  console.log('totalUnlockedTiles', totalUnlockedTiles);
  console.log('tileArray', tileArray);

  const useScript = () => {
    useEffect(() => {
      let canvasBgColour = `#00f000`;

      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      const container = document.querySelector('#game-container');
      container.appendChild(canvas);

      // Set size of canvas based on it parent
      var rect = canvas.parentNode.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;

      // Draw canvas
      context.fillStyle = canvasBgColour;
      context.fillRect(0, 0, canvas.width, canvas.height);
      
      // context.scale(1, 0.5);
      // context.rotate((45 * Math.PI) / 180);

      const startingTilePosition = {
        xpos: 0,
        ypos: 0,
      };

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
        constructor(id, xpos, ypos, xsize, ysize, colour) {
          this.id = id;
          this.xpos = xpos;
          this.ypos = ypos;
          this.xsize = xsize;
          this.ysize = ysize;
          this.colour = colour;
        }

        draw(context) {
          context.beginPath();
          context.fillStyle = this.colour;
          context.fillRect(this.xpos, this.ypos, this.xsize, this.ysize);
          context.fillStyle = this.colour;
          context.strokeRect(this.xpos, this.ypos, this.xsize, this.ysize);
          context.stroke();
        }

        update() {
          this.colour = 'red';
          this.draw(context);
        }
      }

      let tiles = [];

      function createTileArray(context) {
        console.log('createTileArray');
        let dx = startingTilePosition.xpos;
        let dy = startingTilePosition.ypos;
        let id = tileIdNumber;

        for (var y = 0; y < startingTileNumber.y; y++) {
          for (var x = 0; x < startingTileNumber.x; x++) {
            const newTile = new Tile(
              id,
              dx,
              dy,
              tileSize.x,
              tileSize.y,
              'white'
            );
            dy += 40;
            id++;
            newTile.draw(context);
            tiles.push(newTile);
          }
          dy = 0;
          dx += 40;
        }

        setTileArray(tiles);
      }

      canvas.addEventListener('click', (e) => {
        console.log('tileArr', tiles);

        var x = e.pageX - canvas.offsetLeft;
        var y = e.pageY - canvas.offsetTop;

        console.log('mouse.x', x);
        console.log('mouse.y', y);

        tiles.forEach(function (tile, index) {
          if (
            x < tile.xpos + 40 &&
            x >= tile.xpos &&
            y < tile.ypos + 40 &&
            y >= tile.ypos
          ) {
            tile.update();
            console.log('rect', rect);
          }
        });
      });

      function run(context) {
        createTileArray(context);
      }

      run(context);
    }, []);
  };

  return (
    <div id='game-container' className='grid absolute w-full h-full'>
      {useScript()}
    </div>
  );
}

export default GameCanvasContainer;
