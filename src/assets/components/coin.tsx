import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";

interface CoinProps {
  spinning: boolean;
  finalRotation?: number; // new: control where the coin stops
}

function Coin({ spinning, finalRotation = 0 }: CoinProps) {
  const coinRef = useRef<THREE.Mesh>(null!);

  // Load heads/tails textures (in /public/images/)
  const headsTexture = useLoader(THREE.TextureLoader, "/images/head.png");
  const tailsTexture = useLoader(THREE.TextureLoader, "/images/tail.png");

  // Animate
  useFrame((_, delta) => {
    if (coinRef.current) {
      if (spinning) {
        // Continuous spin
        coinRef.current.rotation.x += delta * 15;
        coinRef.current.rotation.y += delta * 5;
      } else {
        // When stopped, ease toward final rotation
        coinRef.current.rotation.x +=
          (finalRotation - coinRef.current.rotation.x) * 0.1;
      }
    }
  });

  return (
    <mesh ref={coinRef}>
      <cylinderGeometry args={[2, 2, 0.3, 64]} />
      {/* 0 = top, 1 = side, 2 = bottom */}
      <meshStandardMaterial attach="material-0" color="goldenrod" />
      <meshStandardMaterial attach="material-1" map={headsTexture} />
      <meshStandardMaterial attach="material-2" map={tailsTexture} />
    </mesh>
  );
}

export default Coin;
