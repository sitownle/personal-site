import React, { useRef, useMemo } from "react";
//import { Canvas, useFrame } from "@react-three/fiber";
import {
  DoubleSide,
  Mesh,
  SphereGeometry,
  CylinderGeometry,
  MeshStandardMaterial
} from "three";
import { useDrag } from "@use-gesture/react";
import { Merged } from "@react-three/drei";
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
  const diameterR = diameter / 2;
  const R1 = 25;
  //vals for first surface
  const thetaLength = Math.asin(diameterR / R1);
  const x1 = diameterR / Math.tan(thetaLength);
  const diff1 = R1 - x1;

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
      <mesh position={[0, -R1 + diff1, 0]}>
        {/*[0,1,6,0]*/}
        <sphereGeometry args={[R1, 64, 64, 0, Math.PI * 2, 0, thetaLength]} />
        {<meshStandardMaterial color={"#b9d9eb"} />}
      </mesh>
      <mesh position={[0, R1 - diff1, 0]} rotation={[Math.PI, 0, 0]}>
        <sphereGeometry args={[R1, 64, 64, 0, Math.PI * 2, 0, thetaLength]} />
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
  setOrbitControlsEnabled,
  setShowInstanceDetails
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
        setShowInstanceDetails={setShowInstanceDetails}
      >
        <torusGeometry args={[diameter / 2, 0.1, 32, 32]} />
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
  setOrbitControlsEnabled,
  setShowInstanceDetails
}) {
  const segments = 64; // Default number of segments used to generate the lens
  const is1Concave = R1 < 0;
  const is2Concave = R2 < 0;
  if (is1Concave) R1 = -R1;
  if (is2Concave) R2 = -R2;

  const diameterR = diameter / 2;

  //vals for first surface
  const thetaLength = Math.asin(diameterR / R1);
  const x1 = diameterR / Math.tan(thetaLength);
  const diff1 = R1 - x1;

  //vals for second surface
  const thetaLength2 = Math.asin(diameterR / R2);
  const x2 = diameterR / Math.tan(thetaLength2);
  const diff2 = R2 - x2;

  //vals for cylinder
  //TODO fix logic to use const?
  // const h = is1Concave
  //   ? is2Concave
  //     ? CT + diff1 + diff2
  //     : CT + diff1 - diff2
  //   : is2Concave
  //   ? CT - diff1 + diff2
  //   : CT - diff1 - diff2;
  let h = CT - diff1 - diff2;

  const pos2 = is2Concave ? -diff1 - h - x2 - 2 * diff2 : -diff1 - h + x2;

  //below may offset from 0
  if (is1Concave) h += 2 * diff1;
  if (is2Concave) h += 2 * diff2;

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
        setShowInstanceDetails={setShowInstanceDetails}
      >
        <Merged
          meshes={[
            new Mesh(
              new SphereGeometry(
                R1,
                segments,
                segments,
                0,
                Math.PI * 2,
                0,
                thetaLength
              ),
              new MeshStandardMaterial()
            ),
            new Mesh(
              new CylinderGeometry(diameterR, diameterR, h, segments, 16, true),
              new MeshStandardMaterial()
            ),
            new Mesh(
              new SphereGeometry(
                R2,
                segments,
                segments,
                0,
                Math.PI * 2,
                0,
                thetaLength2
              ),
              new MeshStandardMaterial()
            )
          ]}
          position={[0, 0, 0]}
        >
          {(FirstSurfMesh, CenterCylinderMesh, SecondSurfMesh) => (
            <>
              <FirstSurfMesh
                position={is1Concave ? [0, R1, 0] : [0, -R1, 0]}
                rotation={is1Concave ? [Math.PI, 0, 0] : [0, 0, 0]}
              />
              <CenterCylinderMesh
                position={
                  is1Concave ? [0, diff1 - h / 2, 0] : [0, -diff1 - h / 2, 0]
                }
              />
              <SecondSurfMesh
                position={[0, pos2, 0]}
                rotation={is2Concave ? [0, 0, 0] : [Math.PI, 0, 0]}
              />
            </>
          )}
        </Merged>
        {/* <mesh
          position={is1Concave ? [0, R1, 0] : [0, -R1, 0]}
          rotation={is1Concave ? [Math.PI, 0, 0] : [0, 0, 0]}
        >
          <sphereGeometry
            args={[R1, segments, segments, 0, Math.PI * 2, 0, thetaLength]}
          />
          {<meshStandardMaterial color={"#b9d9eb"} side={DoubleSide} />}
        </mesh>
        <mesh
          position={is1Concave ? [0, diff1 - h / 2, 0] : [0, -diff1 - h / 2, 0]}
        >
          <cylinderGeometry
            args={[diameterR, diameterR, h, segments, 16, true]}
          />
          {<meshStandardMaterial color={"#b9d9eb"} />}
        </mesh>
        <mesh
          position={[0, pos2, 0]}
          rotation={is2Concave ? [0, 0, 0] : [Math.PI, 0, 0]}
        >
          <sphereGeometry
            args={[R2, segments, segments, 0, Math.PI * 2, 0, thetaLength2]}
          />
          {<meshStandardMaterial color={"#b9d9eb"} side={DoubleSide} />}
        </mesh> */}
      </Shape>
      {/* <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={1} radius={0.4} />
      </EffectComposer>{" "} */}
    </>
  );
}

export function PointSource({
  position,
  setPosition,
  rotation,
  setOrbitControlsEnabled,
  setShowInstanceDetails
}) {
  const source = useRef();

  return (
    <>
      <Shape
        referenc={source}
        position={position}
        setPosition={setPosition}
        rotation={[rotation[0], rotation[1] + Math.PI / 2, rotation[2]]}
        setOrbitControlsEnabled={setOrbitControlsEnabled}
        setShowInstanceDetails={setShowInstanceDetails}
      >
        <mesh position={[0, 0, 0]}>
          <sphereGeometry
            args={[0.2, 32, 32, 0, Math.PI * 2, 0, Math.PI * 2]}
          />
          <meshStandardMaterial color={"yellow"} />
        </mesh>
        <mesh position={[0, 0, 2.5]} rotation={[-Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.01, 3, 5, 32, 16, true]} />
          {
            <meshStandardMaterial
              color={"yellow"}
              side={DoubleSide}
              opacity={0.5}
              transparent={true}
            />
          }
        </mesh>
      </Shape>
    </>
  );
}

export function Mirror({
  diameter,
  position,
  setPosition,
  rotation,
  setOrbitControlsEnabled,
  setShowInstanceDetails
}) {
  const mirror = useRef();

  return (
    <>
      <Shape
        referenc={mirror}
        position={[position[0] + diameter / 2, position[1], position[2]]}
        setPosition={setPosition}
        rotation={rotation}
        setOrbitControlsEnabled={setOrbitControlsEnabled}
        setShowInstanceDetails={setShowInstanceDetails}
      >
        <boxGeometry args={[diameter, diameter, diameter, 32, 32, 32]} />
        <meshStandardMaterial color={"gray"} />
      </Shape>
    </>
  );
}

export function BeamSplitter({
  diameter,
  position,
  setPosition,
  rotation,
  setOrbitControlsEnabled,
  setShowInstanceDetails
}) {
  const beamSplitter = useRef();

  return (
    <>
      <Shape
        referenc={beamSplitter}
        position={[position[0] + diameter / 2, position[1], position[2]]}
        setPosition={setPosition}
        rotation={rotation}
        setOrbitControlsEnabled={setOrbitControlsEnabled}
        setShowInstanceDetails={setShowInstanceDetails}
      >
        <boxGeometry args={[diameter, diameter, diameter, 32, 32, 32]} />
        <meshStandardMaterial color={"gray"} />
      </Shape>
    </>
  );
}
