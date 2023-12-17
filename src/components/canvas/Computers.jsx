// Imports
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { SpotLight } from "three";

// Hero 3D Model
const Computers = ({ isMobile }) => {
  // Retrieve & Store 3D Model
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    // Houses A 3D Model In A Scene
    <mesh>
      {/* Light Source 2 */}
      <hemisphereLight intensity={4} groundColor="black" />

      {/* Light Source 3*/}
      <pointLight intensity={3} />

      {/* Light Source 1 */}
      {/* <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={3}
        castShadow
        shadow-mapSize={1024}
      /> */}

      {/* Showcase 3D Model */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.4 : 0.75}
        position={isMobile ? [0, -2, -0.8] : [-2, -2.6, -1.5]}
        rotation={[0, -0.2, -0.1]}
      />
    </mesh>
  );
};

// Load 3D Model Into React Three Fibre Canvas
const ComputersCanvas = () => {
  // useState
  const [isMobile, setIsMobile] = useState(false);

  // useEffect
  useEffect(() => {
    // Add A Listener For Changes To The Screen Size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set The Initial Value Of The isMobile State Variable
    setIsMobile(mediaQuery.matches);

    // Define A Callback Function To Handle Changes To The Media Query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add The Callback Function As A Listener For Change To The Media Query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove The Listener When The Component Is Unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    // Provides A React Context For Rendering Three.js Scenes
    <Canvas
      frameLoop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* Add Loader While 3D Model Is Loading */}
      <Suspense fallback={<CanvasLoader />}>
        {/* Move 3D Model */}
        <OrbitControls
          enableZoom={false}
          // Limits Movement Around A Certain Axis
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        {/* Render The Computers Component */}
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

// Export
export default ComputersCanvas;
