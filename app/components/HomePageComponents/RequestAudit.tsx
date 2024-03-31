import React, { useRef, useEffect } from 'react';
import RequestAuditContent from './RequestAuditContent';

const RequestAudit = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const numDots = 70;
    const radius = 190;
    let angle = 0;

    const drawDot = (x: number, y: number) => {
      ctx?.beginPath();
      ctx?.arc(x, y, 2, 0, 2 * Math.PI);
      ctx && (ctx.fillStyle = 'blue');
      ctx?.fill();
    };

    const animate = () => {
      ctx?.clearRect(0, 0, canvas?.width || 0, canvas?.height || 0);

      const centerX = canvas?.width ? canvas.width / 2 : 0;
      const centerY = canvas?.height ? canvas.height / 2 : 0;

      for (let i = 0; i < numDots; i++) {
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        drawDot(x, y);
        angle += (2 * Math.PI) / numDots;
      }

      angle += 0.002; // Adjust speed here
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Clean up
    return () => cancelAnimationFrame(animationRef.current || 0);
  }, []);

  return (
    <>
      <section className='flex flex-col items-center justify-center mt-72 mb-12'>
        <div style={{ position: 'relative', width: '400px', height: '400px'}}>
          <canvas ref={canvasRef} width={400} height={400} style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} />
          <div style={{ width:'', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'rgba(255, 255, 255, 0.5)', padding: '20px', borderRadius: '8px' }}>
            <RequestAuditContent/>
          </div>
        </div>
      </section>
    </>
  )
}

export default RequestAudit;
