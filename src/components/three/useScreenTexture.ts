import { useEffect, useState } from "react";
import * as THREE from "three";
import { stackLogos } from "./logos";

const W = 1280;
const H = 800;

/**
 * Builds a CanvasTexture for the laptop screen: a dark "desktop" with a glowing
 * grid of the tech-stack logos. SVGs load asynchronously and the texture is
 * redrawn (and flagged for GPU update) as each one arrives.
 */
export function useScreenTexture(): THREE.CanvasTexture {
  const [texture] = useState(() => {
    const canvas = document.createElement("canvas");
    canvas.width = W;
    canvas.height = H;
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 8;
    return tex;
  });

  useEffect(() => {
    const canvas = texture.image as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const ready: (HTMLImageElement | null)[] = stackLogos.map(() => null);

    // grid layout: 4 logos on top row, 3 centered below
    const cell = 168;
    const rowY = [H * 0.46, H * 0.74];
    const positions = stackLogos.map((_, i) => {
      const row = i < 4 ? 0 : 1;
      const count = row === 0 ? 4 : 3;
      const idx = row === 0 ? i : i - 4;
      const band = row === 0 ? W * 0.84 : W * 0.62;
      const startX = (W - band) / 2 + band / (count * 2);
      const step = band / count;
      return { x: startX + idx * step, y: rowY[row] };
    });

    const draw = () => {
      // background gradient
      const bg = ctx.createLinearGradient(0, 0, W, H);
      bg.addColorStop(0, "#0b0b11");
      bg.addColorStop(1, "#15151d");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);

      // subtle grid
      ctx.strokeStyle = "rgba(255,255,255,0.035)";
      ctx.lineWidth = 1;
      for (let x = 0; x <= W; x += 64) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, H);
        ctx.stroke();
      }
      for (let y = 0; y <= H; y += 64) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(W, y);
        ctx.stroke();
      }

      // brand corner glows
      const amber = ctx.createRadialGradient(120, 120, 0, 120, 120, 520);
      amber.addColorStop(0, "rgba(245,185,66,0.16)");
      amber.addColorStop(1, "rgba(245,185,66,0)");
      ctx.fillStyle = amber;
      ctx.fillRect(0, 0, W, H);
      const violet = ctx.createRadialGradient(W - 120, H - 120, 0, W - 120, H - 120, 560);
      violet.addColorStop(0, "rgba(124,92,255,0.18)");
      violet.addColorStop(1, "rgba(124,92,255,0)");
      ctx.fillStyle = violet;
      ctx.fillRect(0, 0, W, H);

      // top bar — terminal dots + label
      ctx.fillStyle = "rgba(255,255,255,0.18)";
      [["#ff5f57", 64], ["#febc2e", 96], ["#28c840", 128]].forEach(([c, x]) => {
        ctx.beginPath();
        ctx.fillStyle = c as string;
        ctx.globalAlpha = 0.85;
        ctx.arc(x as number, 64, 11, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;
      ctx.fillStyle = "rgba(244,244,245,0.55)";
      ctx.font = "500 30px 'Space Grotesk', system-ui, sans-serif";
      ctx.textBaseline = "middle";
      ctx.fillText("~/guilherme — stack", 168, 64);

      // section caption
      ctx.fillStyle = "rgba(161,161,170,0.6)";
      ctx.font = "600 26px 'Space Grotesk', system-ui, sans-serif";
      ctx.fillText("SALES · SYSTEMS · AI", 64, 150);

      // logos with brand glow
      stackLogos.forEach((logo, i) => {
        const img = ready[i];
        if (!img) return;
        const { x, y } = positions[i];
        ctx.save();
        ctx.shadowColor = logo.glow;
        ctx.shadowBlur = 55;
        ctx.drawImage(img, x - cell / 2, y - cell / 2, cell, cell);
        // second pass deepens the glow
        ctx.shadowBlur = 24;
        ctx.drawImage(img, x - cell / 2, y - cell / 2, cell, cell);
        ctx.restore();
      });

      texture.needsUpdate = true;
    };

    draw();

    const imgs = stackLogos.map((logo, i) => {
      const im = new Image();
      im.crossOrigin = "anonymous";
      const onload = () => {
        ready[i] = im;
        draw();
      };
      if (im.complete && im.naturalWidth) {
        im.src = logo.src;
        onload();
      } else {
        im.onload = onload;
        im.src = logo.src;
      }
      return im;
    });

    return () => {
      imgs.forEach((im) => {
        im.onload = null;
      });
    };
  }, [texture]);

  return texture;
}
