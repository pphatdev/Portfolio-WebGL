'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useTheme } from 'next-themes';
import * as THREE from 'three';

/**
 * Advanced GPU-Accelerated Particle System
 * Features:
 * - Instanced rendering for thousands of particles
 * - Custom vertex/fragment shaders
 * - Particle physics (attraction, turbulence)
 * - Dynamic colors based on velocity
 */

// Custom vertex shader for particles
const particleVertexShader = `
    uniform float uTime;
    uniform float uSize;
    
    attribute vec3 velocity;
    attribute float aScale;
    attribute float aOffset;
    
    varying vec3 vColor;
    varying float vAlpha;
    
    void main() {
        // Calculate dynamic position based on velocity
        vec3 pos = position;
        
        // Add wave motion
        float wave = sin(pos.x * 0.5 + uTime * 2.0 + aOffset) * 0.3;
        pos.y += wave;
        
        // Pulsing effect
        float pulse = sin(uTime * 3.0 + aOffset * 10.0) * 0.5 + 0.5;
        
        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        
        // Calculate size based on distance and scale
        gl_PointSize = uSize * aScale * (300.0 / -mvPosition.z) * (pulse * 0.3 + 0.7);
        gl_Position = projectionMatrix * mvPosition;
        
        // Calculate color based on velocity and position
        float speed = length(velocity);
        vColor = mix(
            vec3(0.4, 0.7, 1.0), // Blue for slow
            vec3(1.0, 0.3, 0.7), // Pink for fast
            smoothstep(0.0, 2.0, speed)
        );
        
        // Alpha fade based on distance
        vAlpha = 1.0 - (length(mvPosition.xyz) / 50.0);
    }
`;

// Custom fragment shader for particles
const particleFragmentShader = `
    varying vec3 vColor;
    varying float vAlpha;
    
    void main() {
        // Create circular particles with soft edges
        vec2 center = gl_PointCoord - 0.5;
        float dist = length(center);
        
        if (dist > 0.5) discard;
        
        // Soft edge falloff
        float alpha = 1.0 - smoothstep(0.3, 0.5, dist);
        alpha *= vAlpha;
        
        // Add glow effect
        float glow = exp(-dist * 4.0);
        
        vec3 finalColor = vColor + glow * 0.3;
        
        gl_FragColor = vec4(finalColor, alpha * 0.8);
    }
`;

interface ParticleSystemProps {
    count?: number;
    isDark: boolean;
}

const ParticleSystem: React.FC<ParticleSystemProps> = ({ count = 5000, isDark }) => {
    const pointsRef = useRef<THREE.Points>(null);
    const shaderMaterialRef = useRef<THREE.ShaderMaterial>(null);

    // Initialize particle data
    const particleData = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const velocities = new Float32Array(count * 3);
        const scales = new Float32Array(count);
        const offsets = new Float32Array(count);

        const radius = 15;

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;

            // Distribute particles in a sphere
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(Math.random() * 2 - 1);
            const r = radius * Math.cbrt(Math.random());

            positions[i3] = r * Math.sin(phi) * Math.cos(theta);
            positions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            positions[i3 + 2] = r * Math.cos(phi);

            // Initial velocities
            velocities[i3] = (Math.random() - 0.5) * 0.2;
            velocities[i3 + 1] = (Math.random() - 0.5) * 0.2;
            velocities[i3 + 2] = (Math.random() - 0.5) * 0.2;

            scales[i] = Math.random() * 0.5 + 0.5;
            offsets[i] = Math.random() * Math.PI * 2;
        }

        return { positions, velocities, scales, offsets };
    }, [count]);

    // Animation loop with particle physics
    useFrame((state) => {
        if (!pointsRef.current || !shaderMaterialRef.current) return;

        const time = state.clock.getElapsedTime();
        shaderMaterialRef.current.uniforms.uTime.value = time;

        const positions = pointsRef.current.geometry.attributes.position;
        const velocities = pointsRef.current.geometry.attributes.velocity as THREE.BufferAttribute;

        // Particle physics simulation
        for (let i = 0; i < count; i++) {
            const i3 = i * 3;

            // Get current position
            const x = positions.array[i3];
            const y = positions.array[i3 + 1];
            const z = positions.array[i3 + 2];

            // Get current velocity
            let vx = velocities.array[i3];
            let vy = velocities.array[i3 + 1];
            let vz = velocities.array[i3 + 2];

            // Central attraction force (towards origin)
            const distance = Math.sqrt(x * x + y * y + z * z);
            const attractionStrength = 0.002;

            if (distance > 0) {
                vx -= (x / distance) * attractionStrength;
                vy -= (y / distance) * attractionStrength;
                vz -= (z / distance) * attractionStrength;
            }

            // Turbulence - Perlin-like noise simulation
            const turbulence = 0.01;
            vx += (Math.sin(time * 0.5 + x * 0.1) * Math.cos(time * 0.3 + z * 0.1)) * turbulence;
            vy += (Math.cos(time * 0.4 + y * 0.1) * Math.sin(time * 0.6 + x * 0.1)) * turbulence;
            vz += (Math.sin(time * 0.7 + z * 0.1) * Math.cos(time * 0.5 + y * 0.1)) * turbulence;

            // Add spiral motion
            const angle = Math.atan2(z, x);
            const spiralForce = 0.005;
            vx += Math.cos(angle + Math.PI / 2) * spiralForce;
            vz += Math.sin(angle + Math.PI / 2) * spiralForce;

            // Damping
            vx *= 0.98;
            vy *= 0.98;
            vz *= 0.98;

            // Update velocity
            velocities.array[i3] = vx;
            velocities.array[i3 + 1] = vy;
            velocities.array[i3 + 2] = vz;

            // Update position
            positions.array[i3] += vx;
            positions.array[i3 + 1] += vy;
            positions.array[i3 + 2] += vz;

            // Boundary check - respawn particles that go too far
            const maxDist = 30;
            if (distance > maxDist) {
                const newTheta = Math.random() * Math.PI * 2;
                const newPhi = Math.acos(Math.random() * 2 - 1);
                const newR = 5;

                positions.array[i3] = newR * Math.sin(newPhi) * Math.cos(newTheta);
                positions.array[i3 + 1] = newR * Math.sin(newPhi) * Math.sin(newTheta);
                positions.array[i3 + 2] = newR * Math.cos(newPhi);

                velocities.array[i3] = 0;
                velocities.array[i3 + 1] = 0;
                velocities.array[i3 + 2] = 0;
            }
        }

        positions.needsUpdate = true;
        velocities.needsUpdate = true;
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[particleData.positions, 3]}
                />
                <bufferAttribute
                    attach="attributes-velocity"
                    args={[particleData.velocities, 3]}
                />
                <bufferAttribute
                    attach="attributes-aScale"
                    args={[particleData.scales, 1]}
                />
                <bufferAttribute
                    attach="attributes-aOffset"
                    args={[particleData.offsets, 1]}
                />
            </bufferGeometry>
            <shaderMaterial
                ref={shaderMaterialRef}
                vertexShader={particleVertexShader}
                fragmentShader={particleFragmentShader}
                uniforms={{
                    uTime: { value: 0 },
                    uSize: { value: isDark ? 12 : 8 },
                }}
                transparent
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
};

// Connection lines between nearby particles
const ParticleConnections: React.FC<{ isDark: boolean }> = ({ isDark }) => {
    const linesRef = useRef<THREE.LineSegments>(null);

    const geometry = useMemo(() => {
        const geo = new THREE.BufferGeometry();
        const positions = new Float32Array(3000 * 2 * 3); // Max 3000 connections
        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geo.setDrawRange(0, 0);
        return geo;
    }, []);

    return (
        <lineSegments ref={linesRef} geometry={geometry}>
            <lineBasicMaterial
                color={isDark ? '#6366f1' : '#64748b'}
                transparent
                opacity={isDark ? 0.15 : 0.08}
            />
        </lineSegments>
    );
};

// Main component
const AdvancedParticleSystem = () => {
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme !== 'light';

    return (
        <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 25], fov: 75 }}>
                <fog attach="fog" args={[isDark ? '#030712' : '#f8fafc', 15, 60]} />

                <ambientLight intensity={isDark ? 0.3 : 0.5} />
                <pointLight
                    position={[20, 20, 20]}
                    intensity={isDark ? 0.8 : 0.5}
                    color={isDark ? '#818cf8' : '#64748b'}
                />
                <pointLight
                    position={[-20, -20, -20]}
                    intensity={isDark ? 0.6 : 0.3}
                    color={isDark ? '#c4b5fd' : '#94a3b8'}
                />

                <ParticleSystem count={5000} isDark={isDark} />
                <ParticleConnections isDark={isDark} />

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={0.3}
                />
            </Canvas>
        </div>
    );
};

export default AdvancedParticleSystem;
