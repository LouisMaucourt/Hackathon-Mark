"use client"
import { Canvas, useFrame } from "@react-three/fiber"
import Model from "./Model"
import { Suspense, useRef } from "react"
import { useProgress, Html, ScrollControls } from "@react-three/drei"



export default function Scene() {
  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className="relative h-svh">
      <directionalLight position={[-5, -5, 5]} intensity={4} />
      <Suspense>
        <ScrollControls damping={0.5}>
          <Model />
        </ScrollControls>
      </Suspense>
    </Canvas>
  )
}