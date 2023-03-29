import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useDrag } from "@use-gesture/react";
//import { EffectComposer, Bloom } from "@react-three/postprocessing";

function Shape({
  referenc,
  position,
  setPosition,
  rotation,
  setOrbitControlsEnabled,
  setShowInstanceDetails,
  children
}) {
  const bind = useDrag(({ offset: [x, y] }) =>
    setPosition([x / 50, -y / 50, 0])
  );

  //   useFrame(() => {
  //     referenc.current.rotation.x += 0.01;
  //     referenc.current.rotation.y += 0.01;
  //   });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <group ref={referenc}>
        <mesh
          position={position}
          rotation={rotation}
          onPointerOver={() => setOrbitControlsEnabled(false)}
          onPointerOut={() => setOrbitControlsEnabled(true)}
          onClick={() => setShowInstanceDetails(true)}
          {...bind()}
        >
          {children}
        </mesh>
      </group>
    </>
  );
}

export function ParaxialLens({
  diameter,
  position,
  setPosition,
  rotation,
  setOrbitControlsEnabled,
  setShowInstanceDetails
}) {
  return (
    <Shape
      referenc={stop}
      position={position}
      setPosition={setPosition}
      rotation={[
        rotation[0] + Math.PI / 2,
        rotation[1],
        rotation[2] + Math.PI / 2
      ]}
      setOrbitControlsEnabled={setOrbitControlsEnabled}
      setShowInstanceDetails={setShowInstanceDetails}
    >
      <mesh position={[0, -8.57, 0]}>
        {/*[0,1,6,0]*/}
        <sphereBufferGeometry
          args={[/*-*/ 10, 64, 64, 0, Math.PI * 2, 0, 0.5]}
        />
        {<meshStandardMaterial color={"#b9d9eb"} />}
      </mesh>
      <mesh position={[0, 9 /*CT-R2T*/, 0]} rotation={[Math.PI, 0, 0]}>
        <sphereBufferGeometry args={[10, 64, 64, 0, Math.PI * 2, 0, 0.5]} />
        {<meshStandardMaterial color={"#b9d9eb"} />}
      </mesh>
    </Shape>
  );
}

export function ApertureStop({
  diameter,
  position,
  setPosition,
  rotation,
  setOrbitControlsEnabled
}) {
  const stop = useRef();

  return (
    <>
      <Shape
        referenc={stop}
        position={position}
        setPosition={setPosition}
        rotation={[rotation[0], rotation[1] + Math.PI / 2, rotation[2]]}
        setOrbitControlsEnabled={setOrbitControlsEnabled}
      >
        <torusGeometry args={[0.5, 0.1, 32, 32]} />
        <meshStandardMaterial color={"gray"} />
      </Shape>
    </>
  );
}

export function ThickLens({
  diameter,
  R1,
  R2,
  CT,
  material,
  position,
  setPosition,
  rotation,
  setOrbitControlsEnabled
}) {
  diameter = 1.7;

  R1 = 2; // Default outer radius of the lens
  R2 = 5; // Default inner radius of the lens
  CT = 1; // Default Center Thickness of the lens
  const segments = 64; // Default number of segments used to generate the lens
  material = {}; // Additional properties for the lens material

  //generate R1 partial sphere

  //generate cylinder center

  //generate R2 partial Sphere

  return (
    <>
      <Shape
        referenc={null}
        position={position}
        setPosition={setPosition}
        rotation={[
          rotation[0] + Math.PI / 2,
          rotation[1],
          rotation[2] + Math.PI / 2
        ]}
        setOrbitControlsEnabled={setOrbitControlsEnabled}
      >
        <mesh position={[0, 0, 0]}>
          {/*[0,1,6,0]*/}
          <sphereBufferGeometry
            args={[/*-*/ R1, 64, 64, 0, Math.PI * 2, 0, 1]}
          />
          {<meshStandardMaterial color={"#b9d9eb"} />}
        </mesh>
        <mesh position={[0, 0.6, 0]}>
          <cylinderBufferGeometry
            args={[diameter, diameter, CT /*-(R1T+R2T)*/, 64, 16, true]}
          />
          {<meshStandardMaterial color={"#b9d9eb"} />}
        </mesh>
        <mesh position={[0, 1.2 /*CT-R2T*/, 0]} rotation={[Math.PI, 0, 0]}>
          <sphereBufferGeometry args={[R1, 64, 64, 0, Math.PI * 2, 0, 1]} />
          {<meshStandardMaterial color={"#b9d9eb"} />}
        </mesh>
      </Shape>
      {/* <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={1} radius={0.4} />
      </EffectComposer>{" "} */}
    </>
  );
}
