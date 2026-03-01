'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useTheme } from 'next-themes';
import * as THREE from 'three';

/**
 * Instanced Mesh Particle System
 * Uses GPU instancing for rendering thousands of 3D particles efficiently
 * Each particle is a full 3D mesh but rendered in a single draw call
 */

interface InstancedParticlesProps {
    count?: number;
    isDark: boolean;
}

const InstancedParticles: React.FC<InstancedParticlesProps> = ({ count = 3000, isDark }) => {
    const meshRef = useRef<THREE.InstancedMesh>(null);
    const tempObject = useMemo(() => new THREE.Object3D(), []);
    const tempColor = useMemo(() => new THREE.Color(), []);

    // Store particle data
    const particles = useMemo(() => {
        const data = [];
        for (let i = 0; i < count; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(Math.random() * 2 - 1);
            const r = 10 + Math.random() * 10;

            data.push({
                position: new THREE.Vector3(
                    r * Math.sin(phi) * Math.cos(theta),
                    r * Math.sin(phi) * Math.sin(theta),
                    r * Math.cos(phi)
                ),
                velocity: new THREE.Vector3(
                    (Math.random() - 0.5) * 0.05,
                    (Math.random() - 0.5) * 0.05,
                    (Math.random() - 0.5) * 0.05
                ),
                rotation: new THREE.Euler(
                    Math.random() * Math.PI,
                    Math.random() * Math.PI,
                    Math.random() * Math.PI
                ),
                rotationSpeed: new THREE.Vector3(
                    (Math.random() - 0.5) * 0.02,
                    (Math.random() - 0.5) * 0.02,
                    (Math.random() - 0.5) * 0.02
                ),
                scale: 0.3 + Math.random() * 0.7,
                offset: Math.random() * Math.PI * 2,
            });
        }
        return data;
    }, [count]);

    // Initialize instance matrices and colors
    useMemo(() => {
        if (!meshRef.current) return;

        particles.forEach((particle, i) => {
            tempObject.position.copy(particle.position);
            tempObject.rotation.copy(particle.rotation);
            tempObject.scale.setScalar(particle.scale * 0.5);
            tempObject.updateMatrix();

            meshRef.current!.setMatrixAt(i, tempObject.matrix);

            // Set initial color
            const hue = (i / count) * 0.3 + (isDark ? 0.55 : 0.5);
            tempColor.setHSL(hue, 0.7, isDark ? 0.6 : 0.5);
            meshRef.current!.setColorAt(i, tempColor);
        });

        meshRef.current.instanceMatrix.needsUpdate = true;
        if (meshRef.current.instanceColor) {
            meshRef.current.instanceColor.needsUpdate = true;
        }
    }, [particles, count, tempObject, tempColor, isDark]);

    // Animation with physics
    useFrame((state) => {
        if (!meshRef.current) return;

        const time = state.clock.getElapsedTime();

        particles.forEach((particle, i) => {
            // Calculate mouse attraction (optional)
            const mouse = state.mouse;
            const mousePos = new THREE.Vector3(mouse.x * 15, mouse.y * 15, 0);
            const toMouse = mousePos.sub(particle.position);
            const mouseDist = toMouse.length();

            // Mouse attraction/repulsion
            if (mouseDist < 10) {
                const force = (10 - mouseDist) * 0.001;
                particle.velocity.add(toMouse.normalize().multiplyScalar(force));
            }

            // Central force
            const center = new THREE.Vector3(0, 0, 0);
            const toCenter = center.sub(particle.position);
            const distToCenter = toCenter.length();

            // Orbital motion
            const tangent = new THREE.Vector3(
                -particle.position.z,
                0,
                particle.position.x
            ).normalize().multiplyScalar(0.008);
            particle.velocity.add(tangent);

            // Add attraction to center
            if (distToCenter > 0) {
                particle.velocity.add(
                    toCenter.normalize().multiplyScalar(0.002)
                );
            }

            // Noise-based turbulence
            const noise = new THREE.Vector3(
                Math.sin(time * 0.5 + particle.offset) * 0.01,
                Math.cos(time * 0.7 + particle.offset) * 0.01,
                Math.sin(time * 0.3 + particle.offset) * 0.01
            );
            particle.velocity.add(noise);

            // Apply velocity
            particle.position.add(particle.velocity);

            // Damping
            particle.velocity.multiplyScalar(0.97);

            // Update rotation
            particle.rotation.x += particle.rotationSpeed.x;
            particle.rotation.y += particle.rotationSpeed.y;
            particle.rotation.z += particle.rotationSpeed.z;

            // Pulsing scale
            const pulse = Math.sin(time * 2 + particle.offset) * 0.2 + 1;

            // Update instance matrix
            tempObject.position.copy(particle.position);
            tempObject.rotation.copy(particle.rotation);
            tempObject.scale.setScalar(particle.scale * pulse * 0.5);
            tempObject.updateMatrix();

            meshRef.current!.setMatrixAt(i, tempObject.matrix);

            // Dynamic color based on velocity
            const speed = particle.velocity.length();
            const hue = (i / count) * 0.3 + (isDark ? 0.55 : 0.5) + speed * 5;
            const saturation = 0.7;
            const lightness = (isDark ? 0.5 : 0.4) + speed * 2;

            tempColor.setHSL(hue, saturation, lightness);
            meshRef.current!.setColorAt(i, tempColor);

            // Respawn if too far
            if (distToCenter > 40) {
                const theta = Math.random() * Math.PI * 2;
                const phi = Math.acos(Math.random() * 2 - 1);
                const r = 5;

                particle.position.set(
                    r * Math.sin(phi) * Math.cos(theta),
                    r * Math.sin(phi) * Math.sin(theta),
                    r * Math.cos(phi)
                );
                particle.velocity.set(0, 0, 0);
            }
        });

        meshRef.current.instanceMatrix.needsUpdate = true;
        if (meshRef.current.instanceColor) {
            meshRef.current.instanceColor.needsUpdate = true;
        }
    });

    return (
        <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
            {/* Use different geometries for variety */}
            <octahedronGeometry args={[1, 0]} />
            <meshStandardMaterial
                roughness={0.3}
                metalness={0.8}
                emissive={isDark ? '#4338ca' : '#64748b'}
                emissiveIntensity={isDark ? 0.2 : 0.1}
            />
        </instancedMesh>
    );
};

// Energy field effect
const EnergyField: React.FC<{ isDark: boolean }> = ({ isDark }) => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!meshRef.current) return;

        meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
        meshRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.3;

        // Pulsing scale
        const scale = 1 + Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
        meshRef.current.scale.setScalar(scale);
    });

    return (
        <mesh ref={meshRef}>
            <sphereGeometry args={[15, 32, 32]} />
            <meshBasicMaterial
                color={isDark ? '#312e81' : '#cbd5e1'}
                wireframe
                transparent
                opacity={isDark ? 0.1 : 0.05}
            />
        </mesh>
    );
};

// Main component
const InstancedParticleSystem = () => {
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme !== 'light';

    return (
        <div className="absolute inset-0 z-0">
            <Canvas
                camera={{ position: [0, 0, 30], fov: 75 }}
                gl={{ antialias: true, alpha: true }}
            >
                <color attach="background" args={[isDark ? '#030712' : '#f8fafc']} />
                <fog attach="fog" args={[isDark ? '#030712' : '#f8fafc', 20, 70]} />

                {/* Lighting for instanced meshes */}
                <ambientLight intensity={isDark ? 0.4 : 0.6} />
                <pointLight
                    position={[15, 15, 15]}
                    intensity={isDark ? 1.5 : 1}
                    color={isDark ? '#a5b4fc' : '#64748b'}
                    distance={50}
                />
                <pointLight
                    position={[-15, -15, 15]}
                    intensity={isDark ? 1 : 0.7}
                    color={isDark ? '#c4b5fd' : '#94a3b8'}
                    distance={50}
                />
                <spotLight
                    position={[0, 20, 0]}
                    angle={Math.PI / 4}
                    intensity={isDark ? 0.5 : 0.3}
                    penumbra={1}
                    color={isDark ? '#818cf8' : '#64748b'}
                />

                <InstancedParticles count={3000} isDark={isDark} />
                <EnergyField isDark={isDark} />

                <OrbitControls
                    enableZoom={true}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={0.5}
                    minDistance={15}
                    maxDistance={50}
                />
            </Canvas>
        </div>
    );
};

export default InstancedParticleSystem;
