import React, { useEffect } from 'react';

function BigCanvas() {
  const useScript = () => {
    useEffect(() => {
      let canvasBgColour = `#00f00050`;
      let canvasFgColour = `blue`;
      let canvas, cf, ntiles, tileWidth, tileHeight, map, tool;

      const bgCanvas = document.createElement('canvas');
      const fgCanvas = document.createElement('canvas');
      const contextbg = bgCanvas.getContext('2d');
      const contextfg = fgCanvas.getContext('2d');
      const bg = document.querySelector('#bg-container');
      const fg = document.querySelector('#fg-container');
      fg.appendChild(fgCanvas);
      bg.appendChild(bgCanvas);

      // Set size of canvas based on it parent
      var rect = bgCanvas.parentNode.getBoundingClientRect();
      bgCanvas.width = rect.width;
      bgCanvas.height = rect.height;

      // Draw canvas
      contextbg.fillStyle = canvasBgColour;
      contextbg.fillRect(0, 0, bgCanvas.width, bgCanvas.height);
      contextfg.fillStyle = canvasFgColour;
      contextfg.fillRect(0, 0, bgCanvas.width, bgCanvas.height);

      const texture = new Image();

      tool = [0, 0];

      map = [
        [
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
        ],
        [
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
        ],
        [
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
        ],
        [
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
        ],
        [
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
        ],
        [
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
        ],
        [
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
        ],
      ];

      let w = 910;
      let h = 462;
      let texWidth = 12;
      let texHeight = 6;
      ntiles = 7;
      tileWidth = 128;
      tileHeight = 64;


      // fg.addEventListener('mousemove', viz)
      // fg.addEventListener('contextmenu', e => e.preventDefault())
      // fg.addEventListener('mouseup', unclick)
      // fg.addEventListener('mousedown', click)
      // fg.addEventListener('touchend', click)
      // fg.addEventListener('pointerup', click)

      const drawMap = () => {
        contextbg.clearRect(-w, -h, w * 2, h * 2);
        for (let i = 0; i < ntiles; i++) {
          for (let j = 0; j < ntiles; j++) {
            drawImageTile(contextbg, i, j, map[i][j][0], map[i][j][1]);
          }
        }
      };

      const drawTile = (c, x, y, color) => {
        c.save();
        c.translate(((y - x) * tileWidth) / 2, ((x + y) * tileHeight) / 2);
        c.beginPath();
        c.moveTo(0, 0);
        c.lineTo(tileWidth / 2, tileHeight / 2);
        c.lineTo(0, tileHeight);
        c.lineTo(-tileWidth / 2, tileHeight / 2);
        c.closePath();
        c.fillStyle = color;
        c.fill();
        c.restore();
      };

      const drawImageTile = (c, x, y, i, j) => {
        c.save();
        c.translate(((y - x) * tileWidth) / 2, ((x + y) * tileHeight) / 2);
        j *= 130;
        i *= 230;
        c.drawImage(texture, j, i, 130, 230, -65, -130, 130, 230);
        c.restore();
      };

      drawMap();
    });
  };
  return (
    <>
      <div id='bg-container' className='grid absolute w-full h-full'>
        {useScript()}
      </div>
      <div
        id='fg-container'
        className='grid absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2'
      >
        {useScript()}
      </div>
    </>
  );
}

export default BigCanvas;
