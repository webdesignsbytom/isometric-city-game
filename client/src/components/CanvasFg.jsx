import React, { useEffect } from 'react';

function CanvasFg() {

  const useScript = () => {

    useEffect(() => {
      let canvasBgColour = `red`;
      let tool, ntiles, tileWidth, tileHeight, map;

      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      const container = document.querySelector('#fg-container');
      container.appendChild(canvas);

      // Set size of canvas based on it parent
      var rect = canvas.parentNode.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;

      // Draw canvas
      context.fillStyle = canvasBgColour;
      context.fillRect(0, 0, canvas.width, canvas.height);

      // Create grid
      //   Variables
      tool = [0, 0];
      ntiles = 7;
      tileWidth = 128;
      tileHeight = 64;
      map = [
		[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],
		[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],
		[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],
		[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],
		[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],
		[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],
		[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]
	]

    

      // cf = canvas.getContext('2d')
      // cf.translate(w/2,tileHeight*2)
      //   canvas.addEventListener('mousemove', viz);
      //   canvas.addEventListener('contextmenu', (e) => e.preventDefault());
      //   canvas.addEventListener('mouseup', unclick);
      //   canvas.addEventListener('mousedown', click);
      //   canvas.addEventListener('touchend', click);
      //   canvas.addEventListener('pointerup', click);
    });
  };
  return (
    <div
      id='fg-container'
      className='grid absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2'
    >
      {useScript()}
    </div>
  );
}

export default CanvasFg;
