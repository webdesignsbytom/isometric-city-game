import React, { useEffect } from 'react';

function GameCanvasContainer() {
  const useScript = (url) => {
    useEffect(() => {
        
      let canvasBgColour = `#00f000`;

      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      const container = document.querySelector('#game-container');

      container.appendChild(canvas);

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
      // If click hits an enemy. They run the 'clicked()' function
      canvas.addEventListener('click', (e) => {
        var x = e.pageX - canvas.offsetLeft;
        var y = e.pageY - canvas.offsetTop;
      });

      // Redraw each frame of the screen
    //   function updateSwarm() {
    //     requestAnimationFrame(updateSwarm);
    //     context.clearRect(0, 0, canvas.width, canvas.height);
    //     enemySwarmArray.forEach((algae) => {
    //       algae.update();
    //     });
    //   }

      function run() {
      }

      run();
    }, [url]);
  };

  return (
    <div id='game-container' className='grid absolute w-full h-full'>
      {useScript()}
    </div>
  );
}

export default GameCanvasContainer;
