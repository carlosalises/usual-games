import React, { useEffect, useRef } from 'react'

export default function Figure({wrongLetters}) {
    
    const canvasRef = useRef(null)
    const ctxRef = useRef(null);
    let current = 0;
    const errors = wrongLetters.length;
    
    useEffect(() => {

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctxRef.current = ctx
        canvas.width = 120;
        canvas.height = 160;
        paintEstructure(ctx);
        
        if(errors > current){
            paintHangMan(ctx, errors)
            current++;
        }
    });
    
    function paintEstructure(ctx){
        
        ctx.fillStyle = 'black';
        ctx.scale(20, 20);
        ctx.fillRect(0, 7, 4, 1);
        ctx.fillRect(1, 0, 1, 8);
        ctx.fillRect(2, 0, 3, 1);
        ctx.fillRect(4, 1, 1, 1);
      }

      function paintHangMan (ctx, errors)  {

        const paintings = {
            1: { x: 3.5, y: 2, width: 2, height: 1.5 },

            2: { x: 4, y: 3, width: 1, height: 3 },

            3: { x: 3, y: 4, width: 1, height: 1 },

            4: { x: 5, y: 4, width: 1, height: 1 },

            5: { x: 3, y: 5.8, width: 1, height: 1 },

            6: { x: 5, y: 5.8, width: 1, height: 1 },

            default: { x: 0, y: 0, width: 0, height: 0 } 
        };

        for (let i = 0; i < errors; i++) {
            const paintAction = paintings[i] || paintings.default;
            ctx.fillRect(paintAction.x, paintAction.y, paintAction.width, paintAction.height);
        }
    
        const paintAction = paintings[errors] || paintings.default;
        ctx.fillRect(paintAction.x, paintAction.y, paintAction.width, paintAction.height);
      
        
      };
  
    return (
        <canvas ref={canvasRef} id="ahorcado-canvas">

        </canvas>
  )
}
