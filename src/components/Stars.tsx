import { useMemo } from "react";
import { Canvas } from "@react-three/fiber";

const star_amount = 250;
const maxPosX = 10,
  maxPosY = 10,
  maxPosZ = 10;

function Stars() {
  const stars = useMemo(
    () =>
      Array.from({ length: star_amount }, (_, i) => ({
        id: i,
        x: Math.floor(Math.random() * (maxPosX * 2 + 1)) - maxPosX,
        y: Math.floor(Math.random() * (maxPosY * 2 + 1)) - maxPosY,
        z: Math.floor(Math.random() * (maxPosZ * 2 + 1)) - maxPosZ,
      })),
    [],
  );

  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        pointerEvents: "none",
      }}
      camera={{ position: [0, 0, 0], rotateY: 0 }}
    >
      {stars.map((star) => (
        <mesh key={star.id} position={[star.x, star.y, star.z]}>
          <sphereGeometry args={[0.05, 18, 10]} />
          <meshBasicMaterial color="white" />
        </mesh>
      ))}
    </Canvas>
  );
}

export default Stars;
