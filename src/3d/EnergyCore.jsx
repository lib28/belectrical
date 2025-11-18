import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

function Orb() {
  return (
    <mesh>
      <sphereGeometry args={[1.3, 64, 64]} />
      <meshStandardMaterial
        color="#3b82f6"
        emissive="#1e40af"
        emissiveIntensity={1.5}
        roughness={0.2}
        metalness={0.6}
      />
    </mesh>
  );
}

export default function EnergyCore() {
  return (
    <Canvas camera={{ position: [0, 0, 4] }}>
      <color attach="background" args={["transparent"]} />
      <ambientLight intensity={0.4} />
      <pointLight intensity={5} position={[3, 3, 3]} />
      <Orb />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.2} />

      <EffectComposer>
        <Bloom intensity={1.2} luminanceThreshold={0.0} radius={0.9} />
      </EffectComposer>
    </Canvas>
  );
}
