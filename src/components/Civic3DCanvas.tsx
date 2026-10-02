import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Layers, ShieldCheck, Zap, ToggleLeft, ToggleRight, Sparkles } from 'lucide-react';

export const Civic3DCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [activeNode, setActiveNode] = useState<string>('secretariat');

  useEffect(() => {
    if (reducedMotion || !mountRef.current) return;

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight || 320;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 9);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Group to hold the civic network
    const networkGroup = new THREE.Group();
    scene.add(networkGroup);

    // Center Core (State Directorate - Emerald/Gold)
    const coreGeo = new THREE.IcosahedronGeometry(1.2, 2);
    const coreMat = new THREE.MeshPhongMaterial({
      color: 0x0A2540,
      emissive: 0x07192C,
      specular: 0xD97706,
      shininess: 90,
      wireframe: true
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    networkGroup.add(coreMesh);

    // Inner Glowing Core
    const innerGeo = new THREE.SphereGeometry(0.7, 16, 16);
    const innerMat = new THREE.MeshBasicMaterial({ color: 0xF59E0B });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    networkGroup.add(innerMesh);

    // Orbiting Satellite Nodes (Citizen, Secretariat, Service)
    const satelliteNodes: THREE.Mesh[] = [];
    const colors = [0x38BDF8, 0x10B981, 0xD97706, 0x818CF8];
    const distances = [2.6, 3.2, 2.8, 3.5];

    for (let i = 0; i < 4; i++) {
      const satGeo = new THREE.SphereGeometry(0.35, 16, 16);
      const satMat = new THREE.MeshPhongMaterial({
        color: colors[i],
        emissive: colors[i],
        emissiveIntensity: 0.3,
        shininess: 100
      });
      const satMesh = new THREE.Mesh(satGeo, satMat);
      networkGroup.add(satMesh);
      satelliteNodes.push(satMesh);
    }

    // Concentric Ring Orbits
    const ringGeo = new THREE.RingGeometry(2.5, 2.54, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x0284C7,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.25
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 2.3;
    networkGroup.add(ringMesh);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xF59E0B, 2.0);
    dirLight1.position.set(5, 5, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x38BDF8, 1.5);
    dirLight2.position.set(-5, -5, 3);
    scene.add(dirLight2);

    // Interactive Mouse Tracking
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = mountRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Gentle group rotation
      networkGroup.rotation.y = elapsedTime * 0.2 + mouseX * 0.3;
      networkGroup.rotation.x = mouseY * 0.2;

      coreMesh.rotation.y = elapsedTime * 0.4;
      coreMesh.rotation.z = elapsedTime * 0.15;

      // Position satellites in orbit
      satelliteNodes.forEach((sat, idx) => {
        const angle = elapsedTime * 0.8 + (idx * Math.PI) / 2;
        const dist = distances[idx];
        sat.position.x = Math.cos(angle) * dist;
        sat.position.z = Math.sin(angle) * dist * 0.7;
        sat.position.y = Math.sin(angle * 2) * 0.6;
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight || 320;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [reducedMotion]);

  return (
    <div className="bg-[#0A2540] text-white rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-2xl border border-slate-700/60 my-10">
      {/* Background Lighting Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left Information Content */}
        <div className="max-w-md space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold border border-white/15">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Interactive 3D Civic Navigation</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
            Citizen → Secretariat → Directorate → Delivery
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Visualizing the interconnected flow between the citizen’s goal, local Grama/Ward Secretariats, District administration, and statutory state portals in Andhra Pradesh.
          </p>

          <div className="space-y-2 pt-2 text-xs">
            <div className="flex items-center space-x-2 text-slate-200">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
              <span><strong>Citizen Node:</strong> Intent extraction & document readiness</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-200">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span><strong>GSWS Secretariat:</strong> Biometrics & VRO field enquiry</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-200">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span><strong>Directorate Core:</strong> Tahsildar approval & DSC signing</span>
            </div>
          </div>

          {/* Reduced Motion Toggle */}
          <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between">
            <span className="text-xs text-slate-400">Reduced Motion Mode:</span>
            <button
              type="button"
              onClick={() => setReducedMotion(!reducedMotion)}
              className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center space-x-1"
            >
              {reducedMotion ? <ToggleRight className="w-5 h-5 text-amber-400" /> : <ToggleLeft className="w-5 h-5 text-slate-400" />}
              <span>{reducedMotion ? 'Enabled (Static)' : 'Active (3D)'}</span>
            </button>
          </div>
        </div>

        {/* Right 3D Viewport / Fallback */}
        <div className="w-full lg:w-1/2 h-72 sm:h-80 relative flex items-center justify-center rounded-2xl bg-[#07192C]/80 border border-slate-700/50 overflow-hidden shadow-inner">
          {reducedMotion ? (
            <div className="p-6 text-center space-y-4 max-w-sm">
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-900/60 border border-blue-400/40 flex items-center justify-center text-amber-400">
                <Layers className="w-8 h-8" />
              </div>
              <h4 className="text-sm font-bold text-white">Civic Architecture Model</h4>
              <p className="text-xs text-slate-300">
                Static accessibility layout enabled. Fully compatible with screen readers and low-power devices.
              </p>
            </div>
          ) : (
            <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
          )}

          <div className="absolute bottom-3 right-3 text-[10px] text-slate-400 bg-slate-900/60 px-2 py-1 rounded backdrop-blur-xs">
            WebGL Powered
          </div>
        </div>
      </div>
    </div>
  );
};
