import {Canvas, useFrame} from "@react-three/fiber";
import {OrbitControls, Sparkles} from "@react-three/drei"
import { useRef } from "react";

const RotatingCube = () => {
  const meshRef = useRef()

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
      meshRef.current.rotation.x += 0.01
    }
  })

  return (
    <mesh ref={meshRef}>
      <cylinderGeometry args={[1,1,1]}/>
      <meshLambertMaterial color="#468585" emissive="#468585"/>
      <Sparkles count={100} scale={1} size={6} speed={0.002} noise = {0.2} color="purple"/>
    </mesh>
  )
}
/**
 * A function component that returns a Three.js canvas that renders a rotating cube with some sparkles.
 * The canvas is styled to take up the full height and width of the view port.
 * The cube is rendered with a Lambert material, and a Sparkles component is used to add some sparkles
 * to the cube.
 * The canvas also includes an OrbitControls component, which allows the user to rotate and pan the cube.
 * A color component is also included, which sets the background color of the canvas.
 */
const App = () => {
  return (
    <Canvas style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      Hello Three.js
      <OrbitControls enableZoom enablePan enableRotate/>
      <directionalLight position={[1,1,1]} intensity={10} color={0x9CDBA6} />

      <color attach="background" args={['#F0F0F0']}/>
      <RotatingCube />
    </Canvas>
  )
}



export default App;