import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

const MyMesh = () => {
  const refMesh = useRef();

  useFrame(() => {
    if(refMesh.current) {
      // rotates the object
      refMesh.current.rotation.x += 0.01;
    }
  });
  return (<mesh ref={refMesh} />);
}

export default () => (
  <Canvas>
    <MyMesh />
  </Canvas>

)