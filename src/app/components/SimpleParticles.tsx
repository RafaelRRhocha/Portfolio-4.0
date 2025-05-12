'use client';

import { useEffect, useRef } from 'react';

const SimpleParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<Particle> = [];

    // Configuração do canvas para preencher o contêiner
    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
        createParticles();
      }
    };

    // Criação de partículas
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      type: 'star' | 'ship';
      twinkleSpeed: number;
      twinklePhase: number;
      baseSize: number;

      constructor() {
        const canvasWidth = canvas?.width || 300;
        const canvasHeight = canvas?.height || 300;

        this.type = Math.random() > 0.95 ? 'ship' : 'star';
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;

        if (this.type === 'star') {
          this.baseSize = Math.random() * 2 + 0.5;
          this.size = this.baseSize;
          this.speedX = (Math.random() - 0.5) * 0.1;
          this.speedY = (Math.random() - 0.5) * 0.1;
          this.color = '#ffffff';
          this.twinkleSpeed = Math.random() * 0.05 + 0.02;
          this.twinklePhase = Math.random() * Math.PI * 2;
        } else {
          this.baseSize = Math.random() * 2 + 2;
          this.size = this.baseSize;
          this.speedX = (Math.random() - 0.3) * 2;
          this.speedY = (Math.random() - 0.5) * 0.5;
          this.color = '#4a9eff';
          this.twinkleSpeed = 0;
          this.twinklePhase = 0;
        }
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        const canvasWidth = canvas?.width || 300;
        const canvasHeight = canvas?.height || 300;

        if (this.type === 'star') {
          this.twinklePhase += this.twinkleSpeed;
          this.size = this.baseSize * (0.8 + Math.sin(this.twinklePhase) * 0.2);
        }

        if (this.x > canvasWidth) {
          this.x = 0;
        } else if (this.x < 0) {
          this.x = canvasWidth;
        }
        if (this.y > canvasHeight) {
          this.y = 0;
        } else if (this.y < 0) {
          this.y = canvasHeight;
        }
      }

      draw() {
        if (!ctx) return;

        if (this.type === 'star') {
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.moveTo(this.x + this.size * 2, this.y);
          ctx.lineTo(this.x - this.size, this.y - this.size);
          ctx.lineTo(this.x - this.size, this.y + this.size);
          ctx.closePath();
          ctx.fill();
        }
      }
    }

    const createParticles = () => {
      particles = [];
      const canvasWidth = canvas?.width || 300;
      const canvasHeight = canvas?.height || 300;
      const particleCount = Math.floor((canvasWidth * canvasHeight) / 20000);
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const connectParticles = () => {
      if (!ctx) return;
      const maxDistance = 100;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          if (particles[a].type === 'ship' && particles[b].type === 'ship') {
            const dx = particles[a].x - particles[b].x;
            const dy = particles[a].y - particles[b].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < maxDistance) {
              const opacity = 0.3 * (1 - distance / maxDistance);
              ctx.strokeStyle = `rgba(74, 158, 255, ${opacity})`;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(particles[a].x, particles[a].y);
              ctx.lineTo(particles[b].x, particles[b].y);
              ctx.stroke();
            }
          }
        }
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    // Inicializar
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute size-full"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default SimpleParticles;
