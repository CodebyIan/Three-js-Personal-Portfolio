// Imports
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

// Ball 3D Model
const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.5]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          map={decal}
        />
      </mesh>
    </Float>
  );
};

// Ball 3D Model Container
const BallCanvas = ({ icon }) => {
  return (
    // Provides A React Context For Rendering Three.js Scenes
    <Canvas frameLoop="demand" gl={{ preserveDrawingBuffer: true }}>
      {/* Add Loader While 3D Model Is Loading */}
      <Suspense fallback={<CanvasLoader />}>
        {/* Move 3D Model */}
        <OrbitControls enableZoom={false} />

        {/* Render The Computers Component */}
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

// Export
export default BallCanvas;
