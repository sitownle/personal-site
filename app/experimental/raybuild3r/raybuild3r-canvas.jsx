"use client";

import { Vector3, QuadraticBezierCurve3 } from "three";
import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Text, OrbitControls } from "@react-three/drei";
//import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { ParaxialLens, ThickLens, ApertureStop } from "./models.js";

function OrbitController({ enabled }) {
  const { camera, gl } = useThree();
  const controlsRef = useRef();

  useFrame(() => {
    controlsRef.current.enabled = enabled;
    controlsRef.current.update();
  });

  return <OrbitControls ref={controlsRef} args={[camera, gl.domElement]} />;
}

export default function RB3Canvas({ model, setShowInstanceDetails }) {
  const [position, setPosition] = useState([0, 0, 0]);
  const [orbitControlsEnabled, setOrbitControlsEnabled] = useState(true);
  const models = {
    "Paraxial Lens": (
      <ParaxialLens
        diameter={10}
        position={position}
        setPosition={setPosition}
        rotation={[0, 0, 0]}
        setOrbitControlsEnabled={setOrbitControlsEnabled}
        setShowInstanceDetails={setShowInstanceDetails}
      />
    ),
    "Thick Lens": (
      <ThickLens
        diameter={4}
        R1={4}
        R2={4}
        CT={4}
        material={{}}
        position={position}
        setPosition={setPosition}
        rotation={[0, 0, 0]}
        setOrbitControlsEnabled={setOrbitControlsEnabled}
        setShowInstanceDetails={setShowInstanceDetails}
      />
    ),
    "Aperture Stop": (
      <ApertureStop
        diameter={2}
        position={position}
        setPosition={setPosition}
        rotation={[0, 0, 0]}
        setOrbitControlsEnabled={setOrbitControlsEnabled}
        setShowInstanceDetails={setShowInstanceDetails}
      />
    )
  };

  return (
    <>
      <Canvas camera={{ position: new Vector3(0, 0, 12) }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Text position={[0, 7, 0]} fontSize={1}>
          {model}
          <meshStandardMaterial color="#aaa" toneMapped={false} />
        </Text>
        {models[model]}
        <mesh position={[0, 3, 0]}>
          <sphereGeometry
            args={[0.5, 32, 32, 0, Math.PI * 2, 0, Math.PI * 2]}
          />
          <meshStandardMaterial color="#00FF00" toneMapped={false} />
        </mesh>
        <OrbitController enabled={orbitControlsEnabled} />
        {/* <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={1} radius={0.4} />
      </EffectComposer> */}
      </Canvas>
    </>
  );
}
