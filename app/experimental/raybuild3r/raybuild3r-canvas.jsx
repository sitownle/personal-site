"use client";

import { Vector3, QuadraticBezierCurve3 } from "three";
import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Text, OrbitControls } from "@react-three/drei";
//import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { EffectComposer } from "../../effect-composer-test";
import { Bloom } from "../../bloom-test";
import {
  ParaxialLens,
  ThickLens,
  ApertureStop,
  PointSource,
  Mirror,
  BeamSplitter
} from "./models.js";

function OrbitController({ enabled }) {
  const { camera, gl } = useThree();
  const controlsRef = useRef();

  useFrame(() => {
    controlsRef.current.enabled = enabled;
    controlsRef.current.update();
  });

  return <OrbitControls ref={controlsRef} args={[camera, gl.domElement]} />;
}

export default function RB3Canvas({
  model,
  parameters,
  setShowInstanceDetails
}) {
  const [sourcePos, setSourcePos] = useState([-5, 0, 0]);
  const [position, setPosition] = useState([0, 0, 0]);
  const [orbitControlsEnabled, setOrbitControlsEnabled] = useState(true);
  const models = {
    "Paraxial Lens": (
      <ParaxialLens
        diameter={parameters["Paraxial Lens"].Diameter}
        position={position}
        setPosition={setPosition}
        rotation={[0, 0, 0]}
        setOrbitControlsEnabled={setOrbitControlsEnabled}
        setShowInstanceDetails={setShowInstanceDetails}
      />
    ),
    "Thick Lens": (
      <ThickLens
        diameter={parameters["Thick Lens"].Diameter}
        R1={parameters["Thick Lens"].R1}
        R2={parameters["Thick Lens"].R2}
        CT={parameters["Thick Lens"].CT}
        material={parameters["Thick Lens"].Material}
        position={position}
        setPosition={setPosition}
        rotation={[0, 0, 0]}
        setOrbitControlsEnabled={setOrbitControlsEnabled}
        setShowInstanceDetails={setShowInstanceDetails}
      />
    ),
    "Aperture Stop": (
      <ApertureStop
        diameter={parameters["Aperture Stop"].Diameter}
        position={position}
        setPosition={setPosition}
        rotation={[0, 0, 0]}
        setOrbitControlsEnabled={setOrbitControlsEnabled}
        setShowInstanceDetails={setShowInstanceDetails}
      />
    ),
    Mirror: (
      <Mirror
        diameter={parameters["Mirror"].Diameter}
        position={position}
        setPosition={setPosition}
        rotation={[0, 0, 0]}
        setOrbitControlsEnabled={setOrbitControlsEnabled}
        setShowInstanceDetails={setShowInstanceDetails}
      />
    ),
    "Beam Splitter": (
      <BeamSplitter
        diameter={parameters["Beam Splitter"].Diameter}
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
          <meshStandardMaterial color="#aaa" />
        </Text>
        <PointSource
          position={sourcePos}
          setPosition={setSourcePos}
          rotation={[0, 0, 0]}
          setOrbitControlsEnabled={setOrbitControlsEnabled}
          setShowInstanceDetails={setShowInstanceDetails}
        />
        {/*<Rays />*/}
        {models[model]}
        {/* <mesh position={[0, 0, 0]}>
          <sphereGeometry
            args={[0.5, 32, 32, 0, Math.PI * 2, 0, Math.PI * 2]}
          />
          <meshStandardMaterial color="#00FF00" toneMapped={false} />
        </mesh>
        <mesh position={[4, 0, 0]}>
          <sphereGeometry
            args={[0.5, 32, 32, 0, Math.PI * 2, 0, Math.PI * 2]}
          />
          <meshStandardMaterial color="#00FF00" toneMapped={false} />
        </mesh> */}
        <OrbitController enabled={orbitControlsEnabled} />
        <EffectComposer>
          <Bloom
            mipmapBlur
            luminanceThreshold={0.9}
            luminanceSmoothing={0.9}
            /*luminanceThreshold={1}*/ radius={0.2}
          />
        </EffectComposer>
      </Canvas>
    </>
  );
}
