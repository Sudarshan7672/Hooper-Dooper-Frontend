import model from "./models/Cycle-3d-model.glb";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

function Model(props) {
  const { scene } = useGLTF(model);
  return <primitive object={scene} {...props} />;
}

export default function CycleModel() {
  return (
    <Canvas>
      {/* <color attach="background" args={['#f0f0f0']} /> */}
      <ambientLight />
      <PresentationControls>
        <Stage>
          <Model position={[0, 0, 0]} scale={[13, 13, 13]} />
        </Stage>
      </PresentationControls>
    </Canvas>
  );
}
