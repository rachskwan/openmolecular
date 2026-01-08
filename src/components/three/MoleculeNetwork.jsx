import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// Individual atom/node component
function Atom({ position, size = 0.15, color = '#14b8a6' }) {
  const meshRef = useRef();

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.3}
        metalness={0.3}
        roughness={0.4}
      />
    </mesh>
  );
}

// Bond/connection between atoms
function Bond({ start, end, color = '#14b8a6' }) {
  const ref = useRef();

  const { midpoint, length, rotation } = useMemo(() => {
    const startVec = new THREE.Vector3(...start);
    const endVec = new THREE.Vector3(...end);
    const mid = new THREE.Vector3().addVectors(startVec, endVec).multiplyScalar(0.5);
    const direction = new THREE.Vector3().subVectors(endVec, startVec);
    const len = direction.length();

    // Calculate rotation to point cylinder from start to end
    const axis = new THREE.Vector3(0, 1, 0);
    const quaternion = new THREE.Quaternion().setFromUnitVectors(axis, direction.normalize());
    const euler = new THREE.Euler().setFromQuaternion(quaternion);

    return {
      midpoint: [mid.x, mid.y, mid.z],
      length: len,
      rotation: [euler.x, euler.y, euler.z]
    };
  }, [start, end]);

  return (
    <mesh ref={ref} position={midpoint} rotation={rotation}>
      <cylinderGeometry args={[0.02, 0.02, length, 8]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.2}
        transparent
        opacity={0.6}
      />
    </mesh>
  );
}

// Generate molecule network structure
function generateMoleculeNetwork() {
  const nodes = [];
  const bonds = [];

  // Create a more organic, connected molecular network
  const clusters = [
    // Central cluster
    { center: [0, 0, 0], radius: 2, nodeCount: 6 },
    // Surrounding clusters
    { center: [-3, 1.5, -1], radius: 1.5, nodeCount: 4 },
    { center: [3, -1, 1], radius: 1.5, nodeCount: 4 },
    { center: [0, 3, -2], radius: 1.2, nodeCount: 3 },
    { center: [-2, -2, 2], radius: 1.3, nodeCount: 3 },
    { center: [2.5, 2, -1], radius: 1.4, nodeCount: 4 },
    { center: [-1, -3, -1], radius: 1.2, nodeCount: 3 },
    { center: [4, 0, -2], radius: 1, nodeCount: 3 },
  ];

  const colors = ['#14b8a6', '#10b981', '#06b6d4', '#0891b2', '#22d3d1'];

  let nodeIndex = 0;
  clusters.forEach((cluster, clusterIdx) => {
    const clusterNodes = [];

    for (let i = 0; i < cluster.nodeCount; i++) {
      const theta = (i / cluster.nodeCount) * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      const r = cluster.radius * (0.5 + Math.random() * 0.5);

      const x = cluster.center[0] + r * Math.sin(phi) * Math.cos(theta);
      const y = cluster.center[1] + r * Math.sin(phi) * Math.sin(theta);
      const z = cluster.center[2] + r * Math.cos(phi);

      const size = 0.1 + Math.random() * 0.12;
      const color = colors[Math.floor(Math.random() * colors.length)];

      nodes.push({ position: [x, y, z], size, color, index: nodeIndex });
      clusterNodes.push(nodeIndex);
      nodeIndex++;
    }

    // Connect nodes within cluster
    for (let i = 0; i < clusterNodes.length; i++) {
      for (let j = i + 1; j < clusterNodes.length; j++) {
        if (Math.random() > 0.4) {
          bonds.push({
            start: nodes[clusterNodes[i]].position,
            end: nodes[clusterNodes[j]].position,
            color: colors[clusterIdx % colors.length]
          });
        }
      }
    }
  });

  // Connect some clusters together
  const interClusterBonds = [
    [0, 6], [0, 8], [0, 13], [6, 10], [8, 17], [13, 20],
    [10, 14], [17, 23], [3, 27], [14, 24]
  ];

  interClusterBonds.forEach(([a, b]) => {
    if (nodes[a] && nodes[b]) {
      bonds.push({
        start: nodes[a].position,
        end: nodes[b].position,
        color: '#0891b2'
      });
    }
  });

  return { nodes, bonds };
}

// Main molecule network with mouse interaction
function MoleculeScene({ mousePosition }) {
  const groupRef = useRef();
  const { nodes, bonds } = useMemo(() => generateMoleculeNetwork(), []);

  useFrame((state) => {
    if (groupRef.current) {
      // Smooth rotation based on mouse position
      const targetRotationY = mousePosition.x * 0.3;
      const targetRotationX = mousePosition.y * 0.2;

      groupRef.current.rotation.y += (targetRotationY - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x += (targetRotationX - groupRef.current.rotation.x) * 0.05;

      // Gentle auto-rotation
      groupRef.current.rotation.y += 0.001;
    }
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.2}
      floatIntensity={0.3}
    >
      <group ref={groupRef}>
        {/* Render bonds first (behind atoms) */}
        {bonds.map((bond, i) => (
          <Bond key={`bond-${i}`} {...bond} />
        ))}

        {/* Render atoms */}
        {nodes.map((node, i) => (
          <Atom key={`atom-${i}`} {...node} />
        ))}
      </group>
    </Float>
  );
}

// Lighting setup
function Lighting() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#14b8a6" />
      <pointLight position={[0, 10, -10]} intensity={0.3} color="#06b6d4" />
    </>
  );
}

// Main exported component
export default function MoleculeNetwork() {
  const containerRef = useRef();
  const mousePosition = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      mousePosition.current = { x, y };
    }
  };

  return (
    <div
      ref={containerRef}
      className="absolute inset-0"
      onMouseMove={handleMouseMove}
    >
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
      >
        <Lighting />
        <MoleculeScene mousePosition={mousePosition.current} />
      </Canvas>
    </div>
  );
}
