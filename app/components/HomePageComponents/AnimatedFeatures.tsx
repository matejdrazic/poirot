import React, { useRef, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card"

const AnimatedFeatures: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  function BitcoinIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727" />
      </svg>
    )
  }
  
  
  function DonutIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
  }
  
  
  function LineChartIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </svg>
    )
  }
  
  
  function LockIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    )
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const numDots = 70;
    const radius = 150;
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
    <div className='flex flex-col items-center justify-center  gap-16 mb-20'>
      <p className='bg-transparent border-2 border-indigo-500 w-fit p-3 text-center rounded-2xl text-md italic font-semibold'>Making the difference with Poirot</p>
      <h1 className="mb-4 ml-4 bg-gradient-to-r from-indigo-800 to-purple-400 font-bold inline-block text-transparent bg-clip-text text-6xl text-center font-extrabold">Mainnet-Ready Code Begins Here</h1>
    </div>



    <section className='flex items-center justify-center mb-36'>
      <div style={{ position: 'relative', width: '400px', height: '400px' }}>
        <canvas ref={canvasRef} width={400} height={400} className='' />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'rgba(255, 255, 255, 0.5)', padding: '20px', borderRadius: '8px' }}>
            <div className='flex flex-col gap-8'>
                <div className='flex flex-row gap-16'>
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center p-6 w-40">
                        <LockIcon/>
                        <p className="text-lg my-4">Security Experts</p>
                        <p className="text-sm font-semibold"></p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center p-6 w-40">
                        <BitcoinIcon/>
                        <p className="text-lg my-4">Popular Cryptocurrencies</p>
                        <p className="text-sm font-semibold">dads</p>
                      </CardContent>
                    </Card>
                </div>
                <div className='flex flex-row gap-16'>
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center p-6 w-40">
                        <DonutIcon/>
                        <p className="text-lg my-4">asodjasdjas</p>
                        <p className="text-sm font-semibold">dads</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center p-6 w-40">
                        <LineChartIcon/>
                        <p className="text-lg my-4">dasdasda</p>
                        <p className="text-sm font-semibold">dads</p>
                      </CardContent>
                    </Card>
                </div>
            </div>
        </div>
      </div>
    </section>
  </>
  );
};

export default AnimatedFeatures;
