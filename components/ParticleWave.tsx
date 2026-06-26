"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const COLS = 90;
const ROWS = 55;
const SPACING = 0.36;

export function ParticleWave() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    const W = el.clientWidth;
    const H = el.clientHeight;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(W, H);
    el.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, W / H, 0.1, 200);
    camera.position.set(0, 13, 20);
    camera.lookAt(0, 0, 0);

    const count = COLS * ROWS;
    const positions = new Float32Array(count * 3);

    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const i = (r * COLS + c) * 3;
        positions[i]     = (c - COLS / 2) * SPACING;
        positions[i + 1] = 0;
        positions[i + 2] = (r - ROWS / 2) * SPACING;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.045,
      transparent: true,
      opacity: 0.22,
      sizeAttenuation: true,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    let animId: number;
    let t = 0;

    const tick = () => {
      animId = requestAnimationFrame(tick);
      t += 0.010;

      const pos = geometry.attributes.position as THREE.BufferAttribute;
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const i = r * COLS + c;
          const x = (c - COLS / 2) * SPACING;
          const z = (r - ROWS / 2) * SPACING;
          pos.setY(
            i,
            Math.sin(x * 0.65 + t) * Math.cos(z * 0.45 + t * 0.75) * 1.6
          );
        }
      }
      pos.needsUpdate = true;
      renderer.render(scene, camera);
    };

    tick();

    const onResize = () => {
      if (!el) return;
      const w = el.clientWidth;
      const h = el.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
