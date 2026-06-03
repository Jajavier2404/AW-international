import { useEffect, useRef } from 'react';

export default function WaterCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationId: number;
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;
    let time = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * Math.min(window.devicePixelRatio, 2);
      canvas.height = height * Math.min(window.devicePixelRatio, 2);
      ctx.scale(Math.min(window.devicePixelRatio, 2), Math.min(window.devicePixelRatio, 2));
    };

    resize();

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        targetMouseX = e.touches[0].clientX;
        targetMouseY = e.touches[0].clientY;
      }
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    const draw = () => {
      time += 0.008;
      mouseX += (targetMouseX - mouseX) * 0.03;
      mouseY += (targetMouseY - mouseY) * 0.03;

      ctx.clearRect(0, 0, width, height);

      // Create deep ocean gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, '#0a3d5c');
      gradient.addColorStop(0.3, '#0d4f6e');
      gradient.addColorStop(0.6, '#0a3d5c');
      gradient.addColorStop(1, '#081e30');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Draw animated wave layers
      const drawWaveLayer = (
        offsetY: number,
        amplitude: number,
        frequency: number,
        speed: number,
        opacity: number,
        color: string
      ) => {
        ctx.beginPath();
        ctx.moveTo(0, height);
        for (let x = 0; x <= width; x += 2) {
          const distFromMouse = Math.sqrt((x - mouseX) ** 2 + (offsetY - mouseY) ** 2);
          const ripple = Math.sin(distFromMouse * 0.02 - time * 3) * Math.exp(-distFromMouse * 0.003) * 15;
          const waveY =
            offsetY +
            Math.sin(x * frequency + time * speed) * amplitude +
            Math.sin(x * frequency * 2.3 + time * speed * 1.4) * amplitude * 0.5 +
            ripple;
          ctx.lineTo(x, waveY);
        }
        ctx.lineTo(width, height);
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.globalAlpha = opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
      };

      // Multiple wave layers for depth
      drawWaveLayer(height * 0.15, 20, 0.003, 1.2, 0.12, '#1a6b8a');
      drawWaveLayer(height * 0.25, 25, 0.004, 1.0, 0.15, '#1e7a9a');
      drawWaveLayer(height * 0.38, 30, 0.0025, 0.8, 0.18, '#2188aa');
      drawWaveLayer(height * 0.52, 35, 0.0035, 1.1, 0.22, '#1a7a9a');
      drawWaveLayer(height * 0.68, 28, 0.002, 0.9, 0.25, '#0f5a7a');
      drawWaveLayer(height * 0.85, 22, 0.004, 1.3, 0.3, '#0a4a6a');

      // Mouse ripple ring effect
      for (let r = 1; r <= 4; r++) {
        const radius = ((time * 60 + r * 80) % 400);
        const alpha = Math.max(0, 0.15 * (1 - radius / 400));
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(78, 205, 196, ${alpha})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // Highlight shimmer lines
      ctx.globalAlpha = 0.06;
      for (let i = 0; i < 5; i++) {
        const y = height * (0.2 + i * 0.15) + Math.sin(time * 0.7 + i * 1.3) * 30;
        const gradient = ctx.createLinearGradient(0, y - 10, 0, y + 10);
        gradient.addColorStop(0, 'transparent');
        gradient.addColorStop(0.5, '#4ecdc4');
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, y - 10, width, 20);
      }
      ctx.globalAlpha = 1;

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
