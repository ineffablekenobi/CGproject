import { Html } from "@react-three/drei";
import { useMemo } from "react";
import { MeshBasicMaterial, PlaneGeometry, TextureLoader } from "three";

export const ImageSection = ({ imageSrc, position, ...props }) => {
  const texture = useMemo(() => new TextureLoader().load(imageSrc), [imageSrc]);

  return (
    <mesh position={position} {...props}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial map={texture} transparent />
    </mesh>
  );
};
