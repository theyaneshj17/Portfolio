import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Line } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../contexts/ThemeContext';

interface Node {
  position: [number, number, number];
  connections: number[];
  weight: number;
  bias: number;
  type: 'input' | 'hidden' | 'output';
}

interface Connection {
  start: [number, number, number];
  end: [number, number, number];
  weight: number;
  strength: number;
}

const NeuralNetwork: React.FC = () => {
  const { isDark } = useTheme();
  const meshRef = useRef<THREE.Group>(null);
  const timeRef = useRef(0);

  // Generate enhanced neural network nodes and connections
  const { nodes, connections } = useMemo(() => {
    const nodes: Node[] = [];
    const connections: Connection[] = [];

    // Create nodes in multiple layers with data engineering theme
    const layers = [
      { type: 'input', count: 20, radius: 6, yOffset: -4 },
      { type: 'hidden', count: 35, radius: 8, yOffset: 0 },
      { type: 'output', count: 25, radius: 5, yOffset: 4 }
    ];

    layers.forEach((layer) => {
      for (let i = 0; i < layer.count; i++) {
        const angle = (i / layer.count) * Math.PI * 2;
        const radiusVariation = layer.radius + (Math.random() - 0.5) * 2;
        
        const x = Math.cos(angle) * radiusVariation;
        const y = layer.yOffset + (Math.random() - 0.5) * 2;
        const z = Math.sin(angle) * radiusVariation;
        
        nodes.push({
          position: [x, y, z],
          connections: [],
          weight: Math.random() * 2 - 1,
          bias: Math.random() * 2 - 1,
          type: layer.type as 'input' | 'hidden' | 'output'
        });
      }
    });

    // Create more intelligent connections with weights and biases
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = Math.sqrt(
          Math.pow(nodes[i].position[0] - nodes[j].position[0], 2) +
          Math.pow(nodes[i].position[1] - nodes[j].position[1], 2) +
          Math.pow(nodes[i].position[2] - nodes[j].position[2], 2)
        );
        
        // Create connections based on layer relationships and distance
        const shouldConnect = 
          (distance < 5 && Math.random() < 0.4) || // Nearby nodes
          (Math.random() < 0.1) || // Random long-distance connections
          (nodes[i].type === 'input' && nodes[j].type === 'hidden') || // Input to hidden
          (nodes[i].type === 'hidden' && nodes[j].type === 'output'); // Hidden to output
        
        if (shouldConnect) {
          const weight = Math.random() * 2 - 1;
          const strength = Math.max(0.1, 1 - distance / 10);
          
          connections.push({
            start: nodes[i].position,
            end: nodes[j].position,
            weight,
            strength
          });
          nodes[i].connections.push(j);
          nodes[j].connections.push(i);
        }
      }
    }

    return { nodes, connections };
  }, []);

  useFrame((state) => {
    timeRef.current += 0.01;
    
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001;
      meshRef.current.rotation.x += 0.0005;
    }
  });

  const getNodeColor = (node: Node) => {
    const weightIntensity = Math.abs(node.weight);
    const biasIntensity = Math.abs(node.bias);
    
    if (node.type === 'input') return isDark ? '#10b981' : '#059669';
    if (node.type === 'output') return isDark ? '#f59e0b' : '#d97706';
    
    // Hidden nodes color based on weight and bias
    return isDark ? 
      `hsl(${280 + weightIntensity * 40}, 70%, ${50 + biasIntensity * 20}%)` :
      `hsl(${220 + weightIntensity * 40}, 70%, ${50 + biasIntensity * 20}%)`;
  };

  const getConnectionColor = (connection: Connection) => {
    const strength = connection.strength;
    
    if (connection.weight > 0) {
      return isDark ? 
        `rgba(34, 197, 94, ${0.3 + strength * 0.4})` : 
        `rgba(34, 197, 94, ${0.4 + strength * 0.5})`;
    } else {
      return isDark ? 
        `rgba(239, 68, 68, ${0.3 + strength * 0.4})` : 
        `rgba(239, 68, 68, ${0.4 + strength * 0.5})`;
    }
  };

  return (
    <group ref={meshRef}>
      {/* Render enhanced nodes with weights and biases */}
      {nodes.map((node, index) => (
        <group key={index} position={node.position}>
          {/* Main node */}
          <mesh>
            <sphereGeometry args={[0.15, 12, 12]} />
            <meshBasicMaterial 
              color={getNodeColor(node)}
              transparent 
              opacity={0.9}
            />
          </mesh>
          
          {/* Weight indicator ring */}
          <mesh>
            <ringGeometry args={[0.2, 0.25, 8]} />
            <meshBasicMaterial 
              color={getNodeColor(node)}
              transparent 
              opacity={0.4}
              side={THREE.DoubleSide}
            />
          </mesh>
          
          {/* Bias indicator */}
          <mesh position={[0, 0, 0.2]}>
            <boxGeometry args={[0.05, 0.05, 0.1]} />
            <meshBasicMaterial 
              color={node.bias > 0 ? '#10b981' : '#ef4444'}
              transparent 
              opacity={0.8}
            />
          </mesh>
        </group>
      ))}

      {/* Render enhanced connections with flowing animation */}
      {connections.map((connection, index) => (
        <Line
          key={index}
          points={[connection.start, connection.end]}
          color={getConnectionColor(connection)}
          lineWidth={Math.max(1, connection.strength * 3)}
          transparent
          opacity={0.6}
        />
      ))}

      {/* Data flow particles along connections */}
      {connections.slice(0, 20).map((connection, index) => {
        const progress = (timeRef.current + index * 0.1) % 1;
        const start = new THREE.Vector3(...connection.start);
        const end = new THREE.Vector3(...connection.end);
        const position = start.lerp(end, progress);
        
        return (
          <mesh key={`particle-${index}`} position={position}>
            <sphereGeometry args={[0.03, 8, 8]} />
            <meshBasicMaterial 
              color={getConnectionColor(connection)}
              transparent 
              opacity={0.8}
            />
          </mesh>
        );
      })}
    </group>
  );
};

// Data Engineering themed floating elements
const DataElements: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Database icons */}
      <div className="absolute top-20 left-10 w-32 h-32 opacity-20">
        <div className="w-full h-full border border-neural-400 rounded-lg animate-pulse-slow"></div>
        <div className="absolute top-2 left-2 w-3 h-3 bg-neural-400 rounded"></div>
        <div className="absolute top-2 left-6 w-3 h-3 bg-neural-400 rounded"></div>
        <div className="absolute top-2 left-10 w-3 h-3 bg-neural-400 rounded"></div>
        <div className="absolute top-6 left-2 w-8 h-1 bg-neural-400 rounded"></div>
        <div className="absolute top-10 left-2 w-6 h-1 bg-neural-400 rounded"></div>
      </div>
      
      {/* ETL Pipeline visualization */}
      <div className="absolute bottom-32 right-16 w-24 h-24 opacity-20">
        <div className="flex space-x-1">
          <div className="w-4 h-4 bg-neural-400 rounded-full animate-pulse-slow"></div>
          <div className="w-4 h-4 bg-neural-400 rounded-full animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
          <div className="w-4 h-4 bg-neural-400 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="mt-2 w-full h-1 bg-neural-400 rounded-full"></div>
      </div>
      
      {/* Weights and Biases visualization */}
      <div className="absolute top-1/2 left-1/2 w-40 h-40 opacity-10 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-full h-full border border-neural-400 rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-neural-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neural-400 rounded-full animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-neural-400 rounded-full animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      {/* Data flow streams */}
      <div className="absolute top-40 right-40 w-20 h-20 opacity-15">
        <div className="w-full h-full border-t-2 border-r-2 border-neural-400 rounded-tr-full animate-spin-slow"></div>
      </div>
      
      <div className="absolute bottom-40 left-40 w-16 h-16 opacity-15">
        <div className="w-full h-full border-b-2 border-l-2 border-neural-400 rounded-bl-full animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
      </div>
    </div>
  );
};

const NeuralBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 opacity-40">
      <Canvas
        camera={{ position: [0, 0, 20], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />
        <pointLight position={[-10, -10, -10]} intensity={0.8} />
        <NeuralNetwork />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
        />
      </Canvas>
      
      <DataElements />
    </div>
  );
};

export default NeuralBackground;
