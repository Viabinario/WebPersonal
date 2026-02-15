import { useRef, useEffect, useState } from 'react';

const BOIDS_COUNT = 500;
const PERCEPTION_RADIUS = 28;
const SEPARATION_RADIUS = 10;
const SEPARATION_WEIGHT = 1.2;
/** Más alineación → vuelo coordinado tipo bandada, menos errático */
const ALIGNMENT_WEIGHT = 1.15;
const COHESION_WEIGHT = 1.25;
/** Poco ruido en cohesión → masa más compacta y fluida, como estorninos */
const COHESION_NOISE = 0.06;
/** Velocidad moderada para que se formen y deshagan cúmulos de forma legible */
const MAX_SPEED = 1.35;
/** Tamaño del píxel cuadrado (1 = un pixel) */
const PIXEL_SIZE = 2;
/** Pequeña deriva aleatoria por partícula → variación, sin mover el plano */
const WANDER_STRENGTH = 0.14;
/** Cada cuántos frames se dispara una dispersión global (≈18s) */
const DISPERSION_INTERVAL = 1200;
/** Frames que dura la fase de dispersión (≈1.2s) */
const DISPERSION_DURATION = 72;
const DISPERSION_FORCE = 1.5;
/** Ruido angular en la dispersión: 0 = radial puro, 1 = muy orgánico */
const DISPERSION_ANGLE_NOISE = 0.85;

export type Boid = { x: number; y: number; vx: number; vy: number };

export interface StarlingMurmurationProps {
  /** Color de los puntos (default #000000) */
  color?: string;
  /** Opacidad 0–1 (default 1 = color sólido ##000000) */
  opacity?: number;
  /** Clases del contenedor */
  className?: string;
}

/**
 * Partículas que se mueven y se empujan entre sí; forman nubes/cúmulos/bandadas de forma aleatoria.
 * Solo fuerzas entre vecinos: separación, alineación, cohesión; dispersión periódica para deshacer y reagrupar.
 */
export function StarlingMurmuration({
  color = '#5A3E26',
  opacity = 1,
  className = '',
}: StarlingMurmurationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const boidsRef = useRef<Boid[]>([]);
  const rafRef = useRef<number>(0);
  const frameRef = useRef(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setSize = () => {
      const w = Math.max(1, container.clientWidth);
      const h = Math.max(1, container.clientHeight);
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
      if (boidsRef.current.length !== BOIDS_COUNT && w > 10 && h > 10) {
        boidsRef.current = Array.from({ length: BOIDS_COUNT }, () => ({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
        }));
      }
      return { w, h };
    };

    const wrap = (v: number, max: number) => ((v % max) + max) % max;

    const tick = () => {
      const { w, h } = setSize();
      const boids = boidsRef.current;
      frameRef.current += 1;
      const t = frameRef.current;

      const cx = boids.reduce((s, b) => s + b.x, 0) / boids.length;
      const cy = boids.reduce((s, b) => s + b.y, 0) / boids.length;

      const newBoids: Boid[] = boids.map((b, i) => {
        let sepX = 0,
          sepY = 0,
          alignX = 0,
          alignY = 0,
          cohX = 0,
          cohY = 0;
        let neighbors = 0;
        for (let j = 0; j < boids.length; j++) {
          if (i === j) continue;
          const o = boids[j];
          let dx = o.x - b.x;
          let dy = o.y - b.y;
          dx = dx > w / 2 ? dx - w : dx < -w / 2 ? dx + w : dx;
          dy = dy > h / 2 ? dy - h : dy < -h / 2 ? dy + h : dy;
          const d = Math.hypot(dx, dy) || 0.001;
          if (d < PERCEPTION_RADIUS) {
            neighbors++;
            if (d < SEPARATION_RADIUS) {
              sepX -= dx / d;
              sepY -= dy / d;
            }
            alignX += o.vx;
            alignY += o.vy;
            cohX += dx;
            cohY += dy;
          }
        }
        if (neighbors > 0) {
          alignX /= neighbors;
          alignY /= neighbors;
          cohX /= neighbors * 62;
          cohY /= neighbors * 62;
          cohX += (Math.random() - 0.5) * COHESION_NOISE;
          cohY += (Math.random() - 0.5) * COHESION_NOISE;
        }

        /** Factores suaves → inercia, cambios de rumbo graduales (estorninos, no mosquitos) */
        const forceScale = 0.065;
        let vx =
          b.vx +
          SEPARATION_WEIGHT * sepX * forceScale +
          ALIGNMENT_WEIGHT * (alignX - b.vx) * forceScale +
          COHESION_WEIGHT * cohX * forceScale;
        let vy =
          b.vy +
          SEPARATION_WEIGHT * sepY * forceScale +
          ALIGNMENT_WEIGHT * (alignY - b.vy) * forceScale +
          COHESION_WEIGHT * cohY * forceScale;

        /** Dispersión global: todos a la vez, luego se reagrupan en cúmulos por cohesión/alineación entre vecinos */
        const inDispersion = (t % DISPERSION_INTERVAL) < DISPERSION_DURATION;
        if (inDispersion) {
          let dx = b.x - cx;
          let dy = b.y - cy;
          const dist = Math.hypot(dx, dy) || 0.001;
          dx /= dist;
          dy /= dist;
          const angle = Math.atan2(dy, dx);
          const noiseAngle = angle + (Math.random() - 0.5) * Math.PI * 2 * DISPERSION_ANGLE_NOISE;
          const dispMag = DISPERSION_FORCE * (0.7 + Math.random() * 0.6);
          vx += Math.cos(noiseAngle) * dispMag;
          vy += Math.sin(noiseAngle) * dispMag;
        } else {
          vx += (Math.random() - 0.5) * WANDER_STRENGTH;
          vy += (Math.random() - 0.5) * WANDER_STRENGTH;
        }

        const speed = Math.hypot(vx, vy) || 0.001;
        if (speed > MAX_SPEED) {
          vx = (vx / speed) * MAX_SPEED;
          vy = (vy / speed) * MAX_SPEED;
        }
        let x = b.x + vx;
        let y = b.y + vy;
        x = wrap(x, w);
        y = wrap(y, h);
        return { x, y, vx, vy };
      });
      boidsRef.current = newBoids;

      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = color;
      ctx.globalAlpha = opacity;
      newBoids.forEach((b) => {
        const px = Math.floor(b.x);
        const py = Math.floor(b.y);
        ctx.fillRect(px, py, PIXEL_SIZE, PIXEL_SIZE);
      });
      ctx.globalAlpha = 1;
      rafRef.current = requestAnimationFrame(tick);
    };

    if (paused) {
      const ro = new ResizeObserver(() => setSize());
      ro.observe(container);
      return () => ro.disconnect();
    }
    setSize();
    rafRef.current = requestAnimationFrame(tick);
    const ro = new ResizeObserver(() => setSize());
    ro.observe(container);
    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, [color, opacity, paused]);

  return (
    <div
      ref={containerRef}
      role="button"
      tabIndex={0}
      onClick={() => setPaused((p) => !p)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setPaused((p) => !p); } }}
      className={className || 'absolute inset-0 overflow-hidden cursor-pointer'}
      style={{ pointerEvents: 'auto' }}
      aria-label={paused ? 'Reanudar animación' : 'Pausar animación'}
      title={paused ? 'Clic para reanudar' : 'Clic para pausar'}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
