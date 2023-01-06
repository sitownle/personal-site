/* eslint-disable */
import * as THREE from "three";
import * as React from "react";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

function Node(props) {
  // This reference will give us direct access to the THREE.Mesh object
  const labels = [
    "Machine Learning",
    "Software Development",
    "Evolutionary Biology",
    "Probability & Statistics",
    "Government"
  ];
  const ref = useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame((state, delta) => (ref.current.rotation.x += 0.01));

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={event => click(!clicked)}
      onPointerOver={event => {
        console.log(props);
        props.setText(labels[props.obid]);
        hover(true);
      }}
      onPointerOut={event => hover(false)}
    >
      <octahedronGeometry args={[1, 3, 2]} />
      <meshStandardMaterial
        // color={hovered ? "#7dd3fc" : "#0369a1"} [125, 211, 252] : [3, 105, 161]
        color={hovered ? [0, 5, 0.2] : [0, 3, 1.8]}
        toneMapped={false}
      />
    </mesh>
  );
}

function Connection(props) {
  // This reference will give us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Rotate mesh every frame, this is outside of React without overhead
  //useFrame((state, delta) => (ref.current.rotation.x += 0.01));
  //useFrame((state, delta) => (ref.current.rotation.y += 0.01));
  //useFrame((state, delta) => (ref.current.rotation.z += 0.01));

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={event => click(!clicked)}
      onPointerOver={event => hover(true)}
      onPointerOut={event => hover(false)}
    >
      <tubeGeometry
        args={[
          new THREE.QuadraticBezierCurve3(
            new THREE.Vector3(-3.2, 0, 0),
            new THREE.Vector3(0, 1.6, 0),
            new THREE.Vector3(3.2, 0, 0)
          ),
          64,
          0.3
        ]}
      />
      {/* <meshStandardMaterial color={hovered ? "#5eead4" : "#0f766e"} /> [94, 234, 212] : [15, 118, 110]*/}
      <meshStandardMaterial
        color={hovered ? [0, 0.4, 30] : [0, 0.1, 30]}
        toneMapped={false}
      />
    </mesh>
  );
}

export default function Graph() {
  const [text, setText] = useState("Welcome!");
  return (
    <Canvas camera={{ position: new THREE.Vector3(0, 0, 10) }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Node position={[-3.2, -3.2, 0]} setText={setText} obid={0} />
      <Node position={[3.2, -3.2, 0]} setText={setText} obid={1} />
      <Node position={[-4.8, 1.6, 0]} setText={setText} obid={2} />
      <Node position={[4.8, 1.6, 0]} setText={setText} obid={3} />
      <Node position={[0, 4.8, 0]} setText={setText} obid={4} />
      <Connection position={[0, -3.2, 0]} />
      <Connection
        position={[-1.8, 3.6, -0.7]}
        rotation-y={-0.9}
        rotation-x={10.5}
      />
      <Connection
        position={[1.8, 3.6, -0.7]}
        rotation-y={0.8}
        rotation-x={10.5}
      />
      <Connection
        position={[4.3, -0.8, -0.7]}
        rotation-y={-10.5}
        rotation-x={10.5}
        rotation-z={0}
      />
      <Connection
        position={[-4.3, -0.8, -0.7]}
        rotation-y={10.5}
        rotation-x={10.5}
      />
      <Text position={[0, 0, 0]} font="/Inter-Regular.woff" fontSize={0.5}>
        {text}
        <meshStandardMaterial color="#aaa" toneMapped={false} />
      </Text>
      <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={1} radius={0.4} />
      </EffectComposer>
    </Canvas>
  );
}
