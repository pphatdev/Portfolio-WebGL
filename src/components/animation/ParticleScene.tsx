'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useTheme } from 'next-themes';
import * as THREE from 'three';

const WaveGraph = ({ isDark }: { isDark: boolean }) => {
    const graphRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!graphRef.current) return;

        const geometry = graphRef.current.geometry as THREE.PlaneGeometry;
        const positions = geometry.attributes.position as THREE.BufferAttribute;
        const elapsed = state.clock.getElapsedTime();

        for (let i = 0; i < positions.count; i++) {
            const x = positions.getX(i);
            const y = positions.getY(i);
            const height = Math.sin(x * 0.16 + elapsed * 0.7) * 0.35 + Math.cos(y * 0.18 + elapsed * 0.55) * 0.35;
            positions.setZ(i, height);
        }

        positions.needsUpdate = true;
    });

    return (
        <mesh ref={graphRef} rotation-x={-Math.PI / 2} position={[0, -8, 0]}>
            <planeGeometry args={[110, 110, 56, 56]} />
            <meshBasicMaterial
                color={isDark ? '#64748b' : '#94a3b8'}
                wireframe
                transparent
                opacity={isDark ? 0.2 : 0.08}
            />
        </mesh>
    );
};

const GraphNodes = ({ isDark, count = 240 }: { isDark: boolean; count?: number }) => {
    const pointsRef = useRef<THREE.Points>(null);

    useFrame((state) => {
        if (!pointsRef.current) return;

        const elapsed = state.clock.getElapsedTime();
        const positions = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute;

        for (let i = 0; i < count; i++) {
            const idx = i * 3;
            const seed = i * 0.137;
            const baseX = Math.sin(seed * 5.1) * 45;
            const baseY = Math.cos(seed * 6.7) * 18;
            const baseZ = Math.sin(seed * 3.9) * 45;

            positions.array[idx] = baseX + Math.sin(elapsed * 0.4 + i) * 0.2;
            positions.array[idx + 1] = baseY + Math.sin(elapsed * 0.8 + i * 0.2) * 0.5;
            positions.array[idx + 2] = baseZ + Math.cos(elapsed * 0.45 + i) * 0.2;
        }

        positions.needsUpdate = true;
    });

    const nodePositions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        const idx = i * 3;
        const seed = i * 0.137;
        nodePositions[idx] = Math.sin(seed * 5.1) * 45;
        nodePositions[idx + 1] = Math.cos(seed * 6.7) * 18;
        nodePositions[idx + 2] = Math.sin(seed * 3.9) * 45;
    }

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[nodePositions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                color={isDark ? '#a5b4fc' : '#475569'}
                size={isDark ? 0.18 : 0.14}
                sizeAttenuation
                transparent
                opacity={isDark ? 0.7 : 0.35}
            />
        </points>
    );
};

const ParticleScene = () => {
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme !== 'light';

    return (
        <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
                <fog attach="fog" args={[isDark ? '#030712' : '#f8fafc', 12, 52]} />
                <ambientLight intensity={isDark ? 0.45 : 0.7} />
                <pointLight position={[12, 14, 8]} intensity={isDark ? 1.3 : 1} color={isDark ? '#c4b5fd' : '#64748b'} />
                <pointLight position={[-10, 8, -12]} intensity={isDark ? 0.7 : 0.45} color={isDark ? '#818cf8' : '#94a3b8'} />

                <WaveGraph isDark={isDark} />
                <GraphNodes isDark={isDark} />

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    enableRotate={false}
                    autoRotate
                    autoRotateSpeed={0.28}
                />
            </Canvas>
        </div>
    );
};

export default ParticleScene;
