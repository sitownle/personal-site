/* eslint-disable */
import * as THREE from "three";
import * as React from "react";
import { useRef, useState } from "react";
import { useRouter } from "next/router";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

function Node(props) {
  // This reference will give us direct access to the THREE.Mesh object
  const labels = [
    "Software Development",
    "Machine Learning",
    "Evolutionary Biology",
    "Probability & Statistics",
    "Government"
  ];
  const labels2 = [
    "Software-Development",
    "Machine-Learning",
    "Evolutionary-Biology",
    "Probability-&-Statistics",
    "Government"
  ];
  const ref = useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame((state, delta) => (ref.current.rotation.x -= 0.01));

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={event => {
        props.link(`/musings/${labels2[props.obid]}`);
      }}
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
  useFrame((state, delta) => (ref.current.rotation.x += 0.01));

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
            new THREE.Vector3(-props.size, 0, 0),
            new THREE.Vector3(0, props.size, 0),
            new THREE.Vector3(props.size, 0, 0)
          ),
          64,
          0.3
        ]}
      />
      {/* <meshStandardMaterial color={hovered ? "#5eead4" : "#0f766e"} /> [94, 234, 212] : [15, 118, 110]*/}
      <meshStandardMaterial
        color={/*hovered ? [0, 0.4, 30] : */ [0, 0.1, 30]}
        toneMapped={false}
      />
    </mesh>
  );
}

export default function Graph() {
  const router = useRouter();
  const [text, setText] = useState("Welcome!");
  const nodeXs = [-10, -5, 0, 5, 10];

  function push(route) {
    router.push(route);
  }

  return (
    <Canvas camera={{ position: new THREE.Vector3(0, 0, 12) }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Node
        position={[nodeXs[0], 0, 0]}
        setText={setText}
        obid={0}
        link={push}
      />
      <Node
        position={[nodeXs[1], 0, 0]}
        setText={setText}
        obid={1}
        link={push}
      />
      <Node
        position={[nodeXs[2], 0, 0]}
        setText={setText}
        obid={2}
        link={push}
      />
      <Node
        position={[nodeXs[3], 0, 0]}
        setText={setText}
        obid={3}
        link={push}
      />
      <Node
        position={[nodeXs[4], 0, 0]}
        setText={setText}
        obid={4}
        link={push}
      />
      {/* <Connection position={[0, -3.2, 0]} /> */}
      <Connection
        position={[(nodeXs[0] + nodeXs[1]) / 2, 0, 0]}
        rotation-x={Math.PI / 5}
        size={2.5}
      />
      <Connection
        position={[(nodeXs[1] + nodeXs[2]) / 2, 0, 0]}
        rotation-x={0}
        size={2.5}
      />
      <Connection
        position={[(nodeXs[2] + nodeXs[3]) / 2, 0, 0]}
        rotation-x={-Math.PI / 5}
        size={2.5}
      />
      <Connection
        position={[(nodeXs[3] + nodeXs[4]) / 2, 0, 0]}
        rotation-x={(-2 * Math.PI) / 5}
        size={2.5}
      />
      {/* 1 node jump connections */}
      <Connection
        position={[(nodeXs[0] + nodeXs[2]) / 2, 0, 0]}
        rotation-x={(6 * Math.PI) / 5} //3
        size={5}
      />
      <Connection
        position={[(nodeXs[1] + nodeXs[3]) / 2, 0, 0]}
        rotation-x={(11 * Math.PI) / 5} //4
        size={5}
      />
      <Connection
        position={[(nodeXs[2] + nodeXs[4]) / 2, 0, 0]}
        rotation-x={(16 * Math.PI) / 5} //5
        size={5}
      />
      {/* 2 node jump connections */}
      <Connection
        position={[(nodeXs[0] + nodeXs[3]) / 2, 0, 0]}
        rotation-x={(3 * Math.PI) / 5} //6
        size={7.5}
      />
      <Connection
        position={[(nodeXs[1] + nodeXs[4]) / 2, 0, 0]}
        rotation-x={(4 * Math.PI) / 5} //7
        size={7.5}
      />
      {/* 3 node jump connection */}
      <Connection
        position={[(nodeXs[0] + nodeXs[4]) / 2, 0, 0]}
        rotation-x={(8 * Math.PI) / 5}
        size={10}
      />
      <Text position={[0, 7, 0]} font="/Inter-Regular.woff" fontSize={1}>
        {text}
        <meshStandardMaterial color="#aaa" toneMapped={false} />
      </Text>
      <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={1} radius={0.4} />
      </EffectComposer>
    </Canvas>
  );
}
