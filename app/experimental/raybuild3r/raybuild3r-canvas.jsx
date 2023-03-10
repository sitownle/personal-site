"use client";

import { Vector3, QuadraticBezierCurve3 } from "three";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

const models = {
  "Paraxial Lens": null,
  "Thick Lens": null,
  "Aperture Stop": null
};

export default function RB3Canvas({ model }) {
  return (
    <Canvas camera={{ position: new Vector3(0, 0, 12) }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Text position={[0, 7, 0]} fontSize={1}>
        {model}
        <meshStandardMaterial color="#aaa" toneMapped={false} />
      </Text>
      {models[model]}
      <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={1} radius={0.4} />
      </EffectComposer>
    </Canvas>
  );
}
