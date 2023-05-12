import React, { useEffect } from 'react';

function CanvasBg() {
  const useScript = () => {
    useEffect(() => {
        let canvasBgColour = `#00f00050`;

        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        const container = document.querySelector('#bg-container');
        container.appendChild(canvas);
  
        // Set size of canvas based on it parent
        var rect = canvas.parentNode.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
  
        // Draw canvas
        context.fillStyle = canvasBgColour;
        context.fillRect(0, 0, canvas.width, canvas.height);
    });
  };
  return (
    <div id='bg-container' className='grid absolute w-full h-full'>
      {useScript()}
    </div>
  );
}

export default CanvasBg;
