'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedSphere = () => {
    const mesh = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        mesh.current.rotation.z = t * 0.2;
        mesh.current.rotation.y = t * 0.2;
        // mesh.current.position.y = Math.sin(t) * 0.1;
    });

    return (
        <Sphere visible args={[1, 100, 200]} scale={2.4} ref={mesh}>
            <MeshDistortMaterial
                color="#8b5cf6"
                attach="material"
                distort={0.4}
                speed={1.5}
                roughness={0}
            />
        </Sphere>
    );
};

const ThreeScene = () => {
    return (
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
            <Canvas>
                <ambientLight intensity={0.5} />
                <directionalLight position={[2, 5, 2]} intensity={1} />
                <AnimatedSphere />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    );
};

export default ThreeScene;
