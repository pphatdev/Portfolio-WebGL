'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';

// Dynamically import to avoid SSR issues with THREE
const AdvancedParticleSystem = dynamic(
    () => import('@/components/animation/AdvancedParticleSystem'),
    { ssr: false }
);

const InstancedParticleSystem = dynamic(
    () => import('@/components/animation/InstancedParticleSystem'),
    { ssr: false }
);

const ParticleScene = dynamic(
    () => import('@/components/animation/ParticleScene'),
    { ssr: false }
);

type ParticleSystemType = 'advanced' | 'instanced' | 'original';

export default function WebGLPracticePage() {
    const [activeSystem, setActiveSystem] = useState<ParticleSystemType>('advanced');
    const { theme, setTheme } = useTheme();

    const systems = [
        {
            id: 'advanced' as ParticleSystemType,
            name: 'Advanced Particles',
            description: 'Custom GLSL shaders with 5,000 point-based particles',
            features: [
                'Custom vertex/fragment shaders',
                'Velocity-based colors',
                'Physics simulation',
                'High particle count'
            ]
        },
        {
            id: 'instanced' as ParticleSystemType,
            name: 'Instanced Meshes',
            description: 'GPU instancing with 3,000 3D octahedrons',
            features: [
                'Full 3D geometry per particle',
                'Mouse interaction',
                'Dynamic lighting',
                'Orbital physics'
            ]
        },
        {
            id: 'original' as ParticleSystemType,
            name: 'Original Wave',
            description: 'Wave graph with animated nodes',
            features: [
                'Sine wave terrain',
                'Animated graph nodes',
                'Theme-aware colors',
                'Smooth animations'
            ]
        }
    ];

    return (
        <div className="relative w-full min-h-screen bg-gray-50 dark:bg-gray-950">
            {/* Particle System Background */}
            <div className="fixed inset-0 z-0">
                {activeSystem === 'advanced' && <AdvancedParticleSystem />}
                {activeSystem === 'instanced' && <InstancedParticleSystem />}
                {activeSystem === 'original' && <ParticleScene />}
            </div>

            {/* UI Overlay */}
            <div className="relative z-10 p-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg rounded-2xl p-8 mb-6 shadow-xl">
                        <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500">
                            WebGL Particle Systems
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400">
                            Advanced particle system implementations using Three.js & React Three Fiber
                        </p>

                        {/* Theme Toggle */}
                        <button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="mt-4 px-4 py-2 rounded-lg bg-violet-500 hover:bg-violet-600 text-white transition-colors"
                        >
                            Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
                        </button>
                    </div>

                    {/* System Selector */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        {systems.map((system) => (
                            <button
                                key={system.id}
                                onClick={() => setActiveSystem(system.id)}
                                className={`
                  p-6 rounded-xl transition-all transform hover:scale-105
                  ${activeSystem === system.id
                                        ? 'bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white shadow-2xl'
                                        : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg hover:bg-white dark:hover:bg-gray-900'
                                    }
                `}
                            >
                                <h3 className={`text-xl font-bold mb-2 ${activeSystem === system.id ? 'text-white' : 'text-gray-900 dark:text-white'
                                    }`}>
                                    {system.name}
                                </h3>
                                <p className={`text-sm mb-4 ${activeSystem === system.id ? 'text-white/90' : 'text-gray-600 dark:text-gray-400'
                                    }`}>
                                    {system.description}
                                </p>
                                <ul className="text-left text-xs space-y-1">
                                    {system.features.map((feature, i) => (
                                        <li key={i} className={`flex items-center ${activeSystem === system.id ? 'text-white/80' : 'text-gray-500 dark:text-gray-500'
                                            }`}>
                                            <span className="mr-2">•</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </button>
                        ))}
                    </div>

                    {/* Info Panel */}
                    <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
                        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                            Current System: {systems.find(s => s.id === activeSystem)?.name}
                        </h2>

                        <div className="space-y-4 text-gray-700 dark:text-gray-300">
                            <div>
                                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                                    Implementation Details
                                </h3>
                                {activeSystem === 'advanced' && (
                                    <div className="space-y-2">
                                        <p>• <strong>Shader-based rendering:</strong> Custom GLSL vertex and fragment shaders</p>
                                        <p>• <strong>Physics:</strong> Central attraction, turbulence, spiral motion</p>
                                        <p>• <strong>Performance:</strong> Point primitives with additive blending</p>
                                        <p>• <strong>Visual effects:</strong> Dynamic colors, soft edges, glow effect</p>
                                    </div>
                                )}
                                {activeSystem === 'instanced' && (
                                    <div className="space-y-2">
                                        <p>• <strong>GPU Instancing:</strong> Single draw call for 3,000 meshes</p>
                                        <p>• <strong>Interaction:</strong> Mouse attraction and orbital mechanics</p>
                                        <p>• <strong>Lighting:</strong> Standard material with dynamic lights</p>
                                        <p>• <strong>Animation:</strong> Per-particle rotation and pulsing scale</p>
                                    </div>
                                )}
                                {activeSystem === 'original' && (
                                    <div className="space-y-2">
                                        <p>• <strong>Wave generation:</strong> Sine wave calculations in useFrame</p>
                                        <p>• <strong>Dynamic mesh:</strong> Plane geometry with animated vertices</p>
                                        <p>• <strong>Particle nodes:</strong> Points with buffer geometry</p>
                                        <p>• <strong>Theme support:</strong> Automatic color adaptation</p>
                                    </div>
                                )}
                            </div>

                            <div>
                                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                                    Controls
                                </h3>
                                <p>• Click and drag to rotate the camera</p>
                                <p>• Scroll to zoom in/out (where enabled)</p>
                                <p>• Move mouse to interact with particles (instanced system)</p>
                            </div>

                            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    📚 See <code className="px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded">WEBGL_GUIDE.md</code> for implementation details and customization options.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
