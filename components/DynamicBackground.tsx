
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const DynamicBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    const particlesCount = 80;
    const positions = new Float32Array(particlesCount * 3);
    const geometry = new THREE.BufferGeometry();
    
    // Create random positions for nodes
    for(let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 25;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    // Nodes material
    const material = new THREE.PointsMaterial({
      size: 0.1,
      color: 0xB38B3F,
      transparent: true,
      opacity: 0.4
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Create lines connecting nodes to simulate systemic networks
    const lineMaterial = new THREE.LineBasicMaterial({ 
      color: 0x415a77, 
      transparent: true, 
      opacity: 0.15 
    });
    
    const linesGroup = new THREE.Group();
    for (let i = 0; i < particlesCount; i++) {
      for (let j = i + 1; j < particlesCount; j++) {
        const dx = positions[i*3] - positions[j*3];
        const dy = positions[i*3+1] - positions[j*3+1];
        const dz = positions[i*3+2] - positions[j*3+2];
        const dist = Math.sqrt(dx*dx + dy*dy + dz*dz);
        
        if (dist < 5) {
          const lineGeometry = new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(positions[i*3], positions[i*3+1], positions[i*3+2]),
            new THREE.Vector3(positions[j*3], positions[j*3+1], positions[j*3+2])
          ]);
          const line = new THREE.Line(lineGeometry, lineMaterial);
          linesGroup.add(line);
        }
      }
    }
    scene.add(linesGroup);

    camera.position.z = 10;

    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);

    const animate = () => {
      requestAnimationFrame(animate);
      
      const time = Date.now() * 0.0001;
      particles.rotation.y = time * 0.2;
      linesGroup.rotation.y = time * 0.2;
      
      // Parallax effect on scroll
      scene.position.y = scrollY * 0.003;
      scene.rotation.x = scrollY * 0.0002;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 z-0 pointer-events-none bg-white" />;
};

export default DynamicBackground;
