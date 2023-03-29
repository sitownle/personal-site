import React, {
  forwardRef,
  useMemo,
  useLayoutEffect,
  MutableRefObject
} from "react";
import { Vector2, Object3D } from "three";
import { ReactThreeFiber, useThree } from "@react-three/fiber";
import { Effect, BloomEffect, BlendFunction } from "postprocessing";
//import { wrapEffect } from "../util";

type ObjectRef = MutableRefObject<Object3D>;
type DefaultProps = Partial<{ blendFunction: BlendFunction; opacity: number }>;

export const wrapEffect = <T extends new (...args: any[]) => Effect>(
  effectImpl: T,
  defaultBlendMode: BlendFunction = BlendFunction.NORMAL
) =>
  forwardRef<T, ConstructorParameters<typeof effectImpl>[0] & DefaultProps>(
    function Wrap(
      {
        blendFunction,
        opacity,
        ...props
      }: React.PropsWithChildren<DefaultProps & ConstructorParameters<T>[0]>,
      ref
    ) {
      const invalidate = useThree(state => state.invalidate);
      const effect: Effect = useMemo(() => new effectImpl(props), [props]);

      useLayoutEffect(() => {
        effect.blendMode.blendFunction =
          !blendFunction && blendFunction !== 0
            ? defaultBlendMode
            : blendFunction;
        if (opacity !== undefined) effect.blendMode.opacity.value = opacity;
        invalidate();
      }, [blendFunction, effect.blendMode, opacity]);
      return <primitive ref={ref} object={effect} dispose={null} />;
    }
  );

export const Bloom = wrapEffect(BloomEffect, BlendFunction.ADD);
