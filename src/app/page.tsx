'use client';
import { Canvas } from 'react-three-fiber'
import { OrbitControls, Stars } from '@react-three/drei'	
import OfficeScene from '../components/officescene'

function Plane() {
  return (
    <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[100, 100]}/>
      <meshStandardMaterial color="grey" />
    </mesh>
  )
}

export default function Home() {
  return (
    <Canvas>
        <Stars />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <Plane />
        <OfficeScene />
        <OrbitControls/>
    </Canvas>
  )
}
