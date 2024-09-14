'use client'
import React, { useEffect, useRef } from 'react';

const MatrixRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const fontSize = 10;
    let columns = Math.max(1, Math.floor(canvas.width / fontSize));
    const drops: number[] = new Array(columns).fill(1);

    const alphabet = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    // Adjust frame rate (lower value means slower animation)
    const FRAME_RATE = 1000 / 20; // Changed from 20 to 10 for slower animation

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0F0';
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Slow down rain drop movement
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.99) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const animate = () => {
      draw();
      setTimeout(() => requestAnimationFrame(animate), FRAME_RATE);
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.max(1, Math.floor(canvas.width / fontSize));
      drops.length = columns;
      for (let x = 0; x < columns; x++) {
        drops[x] = 1;
      }
    };

    resizeCanvas();

    window.addEventListener('resize', resizeCanvas);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="fixed inset-0 z-[-1]"/>
  );
};

export default MatrixRain;