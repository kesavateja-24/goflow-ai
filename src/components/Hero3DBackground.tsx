import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export interface Hero3DBackgroundProps {
  isFocused?: boolean;
  query?: string;
  hoveredCategory?: string | null;
  isTransitioning?: boolean;
}

// Procedural Canvas Texture Generator for 3D Documents
function createDocCanvasTexture(
  title: string, 
  subtitle: string, 
  headerColor: string, 
  statusText: string,
  statusColor: string
): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 680;
  const ctx = canvas.getContext('2d')!;

  // Paper card background
  ctx.fillStyle = '#FFFFFF';
  ctx.beginPath();
  ctx.roundRect(12, 12, 488, 656, 24);
  ctx.fill();

  // Subtle paper border
  ctx.strokeStyle = '#E2E8F0';
  ctx.lineWidth = 4;
  ctx.stroke();

  // Header band
  ctx.fillStyle = headerColor;
  ctx.beginPath();
  ctx.roundRect(14, 14, 484, 88, [22, 22, 0, 0]);
  ctx.fill();

  // Header Title
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 28px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillText(title, 36, 68);

  // Subtitle / Issuer
  ctx.fillStyle = '#64748B';
  ctx.font = 'bold 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillText(subtitle.toUpperCase(), 36, 140);

  // Decorative document lines (representing text content)
  ctx.fillStyle = '#E2E8F0';
  const linePaddings = [360, 420, 260, 390, 430, 310, 420, 280];
  linePaddings.forEach((w, i) => {
    ctx.beginPath();
    ctx.roundRect(36, 175 + i * 36, w, 12, 6);
    ctx.fill();
  });

  // Stamp / Verification Card at bottom
  ctx.fillStyle = '#F8FAFC';
  ctx.beginPath();
  ctx.roundRect(36, 490, 440, 130, 16);
  ctx.fill();
  ctx.strokeStyle = '#CBD5E1';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Watermark emblem inside stamp
  ctx.fillStyle = statusColor;
  ctx.beginPath();
  ctx.arc(76, 555, 24, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 22px sans-serif';
  ctx.fillText('✓', 68, 563);

  ctx.fillStyle = '#0F172A';
  ctx.font = 'bold 18px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillText(statusText, 116, 548);

  ctx.fillStyle = '#64748B';
  ctx.font = '13px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillText('OFFICIAL ANDHRA PRADESH CIVIC GATEWAY', 116, 574);

  const texture = new THREE.CanvasTexture(canvas);
  texture.generateMipmaps = true;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.needsUpdate = true;
  return texture;
}

export const Hero3DBackground: React.FC<Hero3DBackgroundProps> = ({
  isFocused = false,
  query = '',
  hoveredCategory = null,
  isTransitioning = false
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  
  // Interactive state references for animation loop
  const stateRef = useRef({
    isFocused,
    query,
    hoveredCategory,
    isTransitioning,
    transitionProgress: 0,
  });

  useEffect(() => {
    stateRef.current.isFocused = isFocused;
    stateRef.current.query = query;
    stateRef.current.hoveredCategory = hoveredCategory;
    stateRef.current.isTransitioning = isTransitioning;
  }, [isFocused, query, hoveredCategory, isTransitioning]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Detect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;

    // Dimensions
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 700;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 1000);
    camera.position.set(0, 0, 36);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ 
        alpha: true, 
        antialias: !isMobile, 
        powerPreference: 'high-performance' 
      });
    } catch {
      // Graceful fallback if WebGL is unavailable
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 2));
    renderer.shadowMap.enabled = false;
    container.appendChild(renderer.domElement);

    // 2. Cinematic Lighting System
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    // Key Navy directional light
    const keyLight = new THREE.DirectionalLight(0x0A2540, 1.4);
    keyLight.position.set(25, 25, 20);
    scene.add(keyLight);

    // Warm Gold progress accent light
    const goldLight = new THREE.DirectionalLight(0xF59E0B, 0.9);
    goldLight.position.set(-25, -15, 15);
    scene.add(goldLight);

    // Cyan high-tech rim light
    const cyanLight = new THREE.DirectionalLight(0x38BDF8, 0.8);
    cyanLight.position.set(0, 30, 10);
    scene.add(cyanLight);

    // Point light inside the central hub
    const hubPointLight = new THREE.PointLight(0x38BDF8, 1.5, 30);
    hubPointLight.position.set(4, 2, -8);
    scene.add(hubPointLight);

    // Groups for parallax and depth layers
    const backgroundLayer = new THREE.Group();
    const middleLayer = new THREE.Group();
    const foregroundLayer = new THREE.Group();
    scene.add(backgroundLayer);
    scene.add(middleLayer);
    scene.add(foregroundLayer);

    // 3. CENTRAL 3D GOVERNMENT JOURNEY HUB
    const hubGroup = new THREE.Group();
    hubGroup.position.set(6, 1, -10); // Located strategically behind right area
    middleLayer.add(hubGroup);

    // A. Outer Glass Sphere
    const hubGlassGeo = new THREE.IcosahedronGeometry(3.6, 2);
    const hubGlassMat = new THREE.MeshStandardMaterial({
      color: 0x0A2540,
      metalness: 0.1,
      roughness: 0.15,
      transparent: true,
      opacity: 0.28,
    });
    const hubGlassMesh = new THREE.Mesh(hubGlassGeo, hubGlassMat);
    hubGroup.add(hubGlassMesh);

    // B. Inner Glowing Core (Faceted Dodecahedron)
    const hubCoreGeo = new THREE.DodecahedronGeometry(1.6, 0);
    const hubCoreMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      emissive: 0x0369a1,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.5,
      wireframe: false,
    });
    const hubCoreMesh = new THREE.Mesh(hubCoreGeo, hubCoreMat);
    hubGroup.add(hubCoreMesh);

    // C. Concentric Orbital Rings
    const ringGeo1 = new THREE.TorusGeometry(4.8, 0.05, 16, 64);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.45,
    });
    const ringMesh1 = new THREE.Mesh(ringGeo1, ringMat1);
    ringMesh1.rotation.x = Math.PI / 3;
    hubGroup.add(ringMesh1);

    const ringGeo2 = new THREE.TorusGeometry(5.4, 0.04, 16, 64);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xf59e0b,
      transparent: true,
      opacity: 0.4,
    });
    const ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2);
    ringMesh2.rotation.y = Math.PI / 4;
    ringMesh2.rotation.z = Math.PI / 6;
    hubGroup.add(ringMesh2);

    // 4. FLOATING 3D DOCUMENT SHEETS (With Procedural High-Definition Textures)
    interface DocumentItem {
      mesh: THREE.Mesh;
      category: string;
      baseX: number;
      baseY: number;
      baseZ: number;
      rotSpeedX: number;
      rotSpeedY: number;
      speedY: number;
      phase: number;
    }

    const docConfigs = [
      {
        id: 'caste',
        title: 'CASTE CERT.',
        subtitle: 'Revenue Dept. • MeeSeva',
        color: '#0A2540',
        status: 'ELIGIBLE • AP SEVA',
        statusColor: '#0284c7',
        x: -16,
        y: 6.5,
        z: -6,
        rotZ: 0.15,
      },
      {
        id: 'land',
        title: 'LAND RECORD',
        subtitle: 'Meebhoomi • Adangal 1B',
        color: '#047857',
        status: 'VERIFIED • ROR-1B',
        statusColor: '#10B981',
        x: -18,
        y: -6,
        z: -4,
        rotZ: -0.12,
      },
      {
        id: 'scholarship',
        title: 'SCHOLARSHIP',
        subtitle: 'JnanaBhumi • Vidya Deevena',
        color: '#D97706',
        status: 'SANCTION READY',
        statusColor: '#F59E0B',
        x: 18,
        y: 8.5,
        z: -7,
        rotZ: -0.18,
      },
      {
        id: 'birth',
        title: 'APPLICATION',
        subtitle: 'Statutory Form AP-04',
        color: '#4338CA',
        status: 'E-KYC CONFIRMED',
        statusColor: '#6366F1',
        x: 20,
        y: -5.5,
        z: -5,
        rotZ: 0.14,
      },
      {
        id: 'electricity',
        title: 'ENERGY METERS',
        subtitle: 'APCPDCL / APEPDCL LT-1',
        color: '#0284c7',
        status: 'FEASIBILITY PASS',
        statusColor: '#38BDF8',
        x: -6,
        y: 13,
        z: -9,
        rotZ: -0.06,
      },
    ];

    const docGeometry = new THREE.BoxGeometry(2.5, 3.3, 0.06);
    const documentsList: DocumentItem[] = [];

    docConfigs.forEach((cfg, idx) => {
      const texture = createDocCanvasTexture(
        cfg.title,
        cfg.subtitle,
        cfg.color,
        cfg.status,
        cfg.statusColor
      );

      // Create material with texture on front, white paper on sides/back
      const paperSideMat = new THREE.MeshStandardMaterial({
        color: 0xFFFFFF,
        roughness: 0.25,
        metalness: 0.05,
      });

      const frontMat = new THREE.MeshStandardMaterial({
        map: texture,
        roughness: 0.2,
        metalness: 0.1,
        transparent: true,
        opacity: 0.92,
      });

      // Box materials order: [right, left, top, bottom, front, back]
      const materials = [
        paperSideMat,
        paperSideMat,
        paperSideMat,
        paperSideMat,
        frontMat,
        paperSideMat,
      ];

      const mesh = new THREE.Mesh(docGeometry, materials);
      mesh.position.set(cfg.x, cfg.y, cfg.z);
      mesh.rotation.z = cfg.rotZ;
      mesh.rotation.y = (idx % 2 === 0 ? 1 : -1) * 0.15;
      middleLayer.add(mesh);

      documentsList.push({
        mesh,
        category: cfg.id,
        baseX: cfg.x,
        baseY: cfg.y,
        baseZ: cfg.z,
        rotSpeedX: 0.003 * (idx % 2 === 0 ? 1 : -1),
        rotSpeedY: 0.004 * (idx % 2 === 0 ? -1 : 1),
        speedY: 0.6 + idx * 0.08,
        phase: idx * 1.2,
      });
    });

    // 5. JOURNEY PIPELINE NODES & SPLINE (Citizen → GovFlow → Docs → Portal → App → Track → Complete)
    interface JourneyNode {
      mesh: THREE.Mesh;
      ringMesh: THREE.Mesh;
      stageIndex: number;
      baseX: number;
      baseY: number;
      baseZ: number;
      color: number;
      phase: number;
    }

    const nodeStageConfigs = [
      { name: 'Citizen', x: -19, y: 9, z: -5, color: 0x0284c7 },
      { name: 'GovFlow', x: -12, y: 11, z: -7, color: 0xf59e0b },
      { name: 'Documents', x: -5, y: 12, z: -8, color: 0x0284c7 },
      { name: 'Portal', x: 2, y: 12.5, z: -8, color: 0x0ea5e9 },
      { name: 'Application', x: 9, y: 11.5, z: -7, color: 0x6366f1 },
      { name: 'Tracking', x: 16, y: 9.5, z: -6, color: 0xf59e0b },
      { name: 'Complete', x: 22, y: 7.5, z: -5, color: 0x10b981 },
    ];

    const journeyNodes: JourneyNode[] = [];
    const splinePoints: THREE.Vector3[] = [];

    const sphereGeo = new THREE.SphereGeometry(0.7, 24, 24);
    const ringGeo = new THREE.RingGeometry(0.9, 1.1, 32);

    nodeStageConfigs.forEach((cfg, idx) => {
      const nodeMat = new THREE.MeshStandardMaterial({
        color: cfg.color,
        emissive: cfg.color,
        emissiveIntensity: 0.45,
        roughness: 0.2,
        metalness: 0.5,
      });

      const nodeMesh = new THREE.Mesh(sphereGeo, nodeMat);
      nodeMesh.position.set(cfg.x, cfg.y, cfg.z);
      middleLayer.add(nodeMesh);

      const ringMat = new THREE.MeshBasicMaterial({
        color: cfg.color,
        transparent: true,
        opacity: 0.4,
        side: THREE.DoubleSide,
      });

      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.position.set(cfg.x, cfg.y, cfg.z);
      middleLayer.add(ringMesh);

      splinePoints.push(new THREE.Vector3(cfg.x, cfg.y, cfg.z));

      journeyNodes.push({
        mesh: nodeMesh,
        ringMesh,
        stageIndex: idx,
        baseX: cfg.x,
        baseY: cfg.y,
        baseZ: cfg.z,
        color: cfg.color,
        phase: idx * 0.9,
      });
    });

    // 6. GLOWING JOURNEY SPLINE PATH
    const splineCurve = new THREE.CatmullRomCurve3(splinePoints);
    const curveResolution = 100;
    const pathPoints = splineCurve.getPoints(curveResolution);
    const pathGeometry = new THREE.BufferGeometry().setFromPoints(pathPoints);

    const pathMaterial = new THREE.LineBasicMaterial({
      color: 0x38BDF8,
      transparent: true,
      opacity: 0.5,
      linewidth: 2,
    });

    const journeyLine = new THREE.Line(pathGeometry, pathMaterial);
    middleLayer.add(journeyLine);

    // 7. TRAVELING LIGHT PACKETS (Packets moving along the spline)
    const packetCount = 4;
    const packetMeshes: THREE.Mesh[] = [];
    const packetGeo = new THREE.SphereGeometry(0.32, 16, 16);
    const packetMat = new THREE.MeshBasicMaterial({
      color: 0xFFFFFF,
      transparent: true,
      opacity: 0.95,
    });

    for (let i = 0; i < packetCount; i++) {
      const pMesh = new THREE.Mesh(packetGeo, packetMat);
      middleLayer.add(pMesh);
      packetMeshes.push(pMesh);
    }

    // 8. CIVIC 3D GEOMETRIC DOMAIN REPOSITORIES (Prisms & Seals)
    const prismGeo = new THREE.OctahedronGeometry(0.65, 0);
    const prismMatGold = new THREE.MeshStandardMaterial({
      color: 0xF59E0B,
      emissive: 0xD97706,
      emissiveIntensity: 0.4,
      metalness: 0.6,
      roughness: 0.2,
    });
    const prismMatEmerald = new THREE.MeshStandardMaterial({
      color: 0x10B981,
      emissive: 0x059669,
      emissiveIntensity: 0.4,
      metalness: 0.6,
      roughness: 0.2,
    });

    const domainPrisms: { mesh: THREE.Mesh; baseX: number; baseY: number; baseZ: number; speed: number; phase: number }[] = [];
    const prismCoords = [
      { x: -14, y: -2, z: -5, mat: prismMatEmerald },
      { x: -9, y: -8, z: -6, mat: prismMatGold },
      { x: 15, y: -1, z: -7, mat: prismMatEmerald },
      { x: 13, y: 12, z: -8, mat: prismMatGold },
    ];

    prismCoords.forEach((coord, i) => {
      const pMesh = new THREE.Mesh(prismGeo, coord.mat);
      pMesh.position.set(coord.x, coord.y, coord.z);
      middleLayer.add(pMesh);

      domainPrisms.push({
        mesh: pMesh,
        baseX: coord.x,
        baseY: coord.y,
        baseZ: coord.z,
        speed: 0.5 + i * 0.1,
        phase: i * 1.5,
      });
    });

    // 9. SUBTLE BACKGROUND PARTICLES (Representing digital data flow)
    const particleCount = isMobile ? 30 : 70;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSpeeds = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 55;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 35;
      particlePositions[i * 3 + 2] = -12 - Math.random() * 20;
      particleSpeeds[i] = 0.2 + Math.random() * 0.4;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x38BDF8,
      size: 0.28,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });
    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    backgroundLayer.add(particleSystem);

    // 10. FOREGROUND SOFT BLURRED GLASS ELEMENTS (Cinematic depth)
    if (!isMobile) {
      const fgGeo = new THREE.SphereGeometry(3.5, 16, 16);
      const fgMat = new THREE.MeshBasicMaterial({
        color: 0x0A2540,
        transparent: true,
        opacity: 0.04,
      });

      const fg1 = new THREE.Mesh(fgGeo, fgMat);
      fg1.position.set(-24, -14, 12);
      foregroundLayer.add(fg1);

      const fg2 = new THREE.Mesh(fgGeo, fgMat);
      fg2.position.set(24, -14, 12);
      foregroundLayer.add(fg2);
    }

    // 11. Mouse Parallax Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (prefersReducedMotion || isMobile) return;
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 2.8;
      targetY = -y * 2.8;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 12. Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    // 13. High-Performance Render Loop
    let animationFrameId: number;
    const startTime = performance.now() * 0.001;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const currentTime = performance.now() * 0.001;
      const elapsed = currentTime - startTime;

      const { isFocused: focused, query: textQuery, hoveredCategory: hoverCat, isTransitioning: trans } = stateRef.current;

      // Smooth Parallax Interpolation (Lerp)
      if (!prefersReducedMotion && !isMobile) {
        mouseX += (targetX - mouseX) * 0.04;
        mouseY += (targetY - mouseY) * 0.04;

        middleLayer.position.x = mouseX * 0.7;
        middleLayer.position.y = mouseY * 0.7;

        foregroundLayer.position.x = mouseX * 1.4;
        foregroundLayer.position.y = mouseY * 1.4;

        backgroundLayer.position.x = mouseX * 0.25;
        backgroundLayer.position.y = mouseY * 0.25;

        // Subtle camera breathing motion
        camera.position.x = Math.sin(elapsed * 0.3) * 0.3;
        camera.position.y = Math.cos(elapsed * 0.25) * 0.25;
        camera.lookAt(0, 0, 0);
      }

      // Transition effect ("Build My Journey" clicked)
      if (trans) {
        stateRef.current.transitionProgress = Math.min(stateRef.current.transitionProgress + 0.04, 1.0);
      } else {
        stateRef.current.transitionProgress = Math.max(stateRef.current.transitionProgress - 0.04, 0.0);
      }
      const tProgress = stateRef.current.transitionProgress;

      // Dynamic Focus Glow
      const focusIntensityBoost = focused ? 1.45 : 1.0;
      pathMaterial.opacity = (focused ? 0.85 : 0.45) + Math.sin(elapsed * 2) * 0.1;
      hubPointLight.intensity = (focused ? 2.5 : 1.5) * focusIntensityBoost;

      // Animate Central Hub
      if (!prefersReducedMotion) {
        hubGroup.rotation.y = elapsed * 0.15;
        hubGlassMesh.rotation.x = elapsed * 0.1;
        hubCoreMesh.rotation.y = -elapsed * 0.25;
        ringMesh1.rotation.z = elapsed * 0.2;
        ringMesh2.rotation.x = -elapsed * 0.18;
      }

      // If transitioning, slightly contract hub and scale up core
      if (tProgress > 0) {
        const s = 1.0 + tProgress * 0.35;
        hubCoreMesh.scale.set(s, s, s);
      } else {
        hubCoreMesh.scale.set(1, 1, 1);
      }

      // Animate Floating 3D Documents
      documentsList.forEach((doc) => {
        if (!prefersReducedMotion) {
          const t = elapsed * doc.speedY + doc.phase;
          doc.mesh.position.y = doc.baseY + Math.sin(t) * 0.45;
          doc.mesh.position.x = doc.baseX + Math.cos(t * 0.7) * 0.3;
          doc.mesh.rotation.x += doc.rotSpeedX;
          doc.mesh.rotation.y += doc.rotSpeedY;
        }

        // Highlight document if its category is hovered
        const isHovered = hoverCat && hoverCat.includes(doc.category);
        if (isHovered) {
          doc.mesh.scale.set(1.22, 1.22, 1.22);
          doc.mesh.position.z = doc.baseZ + 2.5;
        } else {
          doc.mesh.scale.set(1, 1, 1);
          doc.mesh.position.z = doc.baseZ;
        }
      });

      // Animate Journey Nodes (Pulsing & Sequential Lighting when typing)
      const queryLen = textQuery.trim().length;
      journeyNodes.forEach((node) => {
        if (!prefersReducedMotion) {
          const pulse = Math.sin(elapsed * 2.5 + node.phase) * 0.08;
          node.ringMesh.scale.set(1 + pulse, 1 + pulse, 1);
        }

        // Sequential activation based on query input
        // Stage 0-6 gets lit up as user types
        const stageActive = queryLen > 0 && node.stageIndex <= Math.min(queryLen / 3, 6);
        const mat = node.mesh.material as THREE.MeshStandardMaterial;

        if (stageActive) {
          mat.emissiveIntensity = 0.95;
          node.mesh.scale.set(1.25, 1.25, 1.25);
        } else {
          mat.emissiveIntensity = focused ? 0.6 : 0.35;
          node.mesh.scale.set(1, 1, 1);
        }
      });

      // Animate Traveling Light Packets along Spline
      packetMeshes.forEach((packet, i) => {
        const offset = i / packetCount;
        const packetSpeed = focused ? 0.18 : 0.1;
        const t = (elapsed * packetSpeed + offset) % 1;
        const pos = splineCurve.getPointAt(t);
        packet.position.copy(pos);
      });

      // Animate Geometric Domain Prisms
      domainPrisms.forEach((p) => {
        if (!prefersReducedMotion) {
          const t = elapsed * p.speed + p.phase;
          p.mesh.position.y = p.baseY + Math.sin(t) * 0.4;
          p.mesh.rotation.x += 0.015;
          p.mesh.rotation.y += 0.02;
        }
      });

      // Slowly drift background particles
      if (!prefersReducedMotion) {
        const posAttr = particleGeometry.getAttribute('position') as THREE.BufferAttribute;
        const posArr = posAttr.array as Float32Array;
        for (let i = 0; i < particleCount; i++) {
          posArr[i * 3 + 1] += 0.015 * particleSpeeds[i];
          if (posArr[i * 3 + 1] > 18) {
            posArr[i * 3 + 1] = -18;
          }
        }
        posAttr.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animate();

    // 14. Full Cleanup on Unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      renderer.dispose();
      hubGlassGeo.dispose();
      hubCoreGeo.dispose();
      ringGeo1.dispose();
      ringGeo2.dispose();
      docGeometry.dispose();
      sphereGeo.dispose();
      ringGeo.dispose();
      pathGeometry.dispose();
      packetGeo.dispose();
      prismGeo.dispose();
      particleGeometry.dispose();

      hubGlassMat.dispose();
      hubCoreMat.dispose();
      ringMat1.dispose();
      ringMat2.dispose();
      pathMaterial.dispose();
      packetMat.dispose();
      prismMatGold.dispose();
      prismMatEmerald.dispose();
      particleMaterial.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-75 transition-opacity duration-700"
    />
  );
};
