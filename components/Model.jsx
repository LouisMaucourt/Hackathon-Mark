import { useAnimations, useGLTF, useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useEffect } from "react"

useGLTF.preload("/robot_playground.glb")

export default function Model() {

  const { animations, scene } = useGLTF("/robot_playground.glb")
  const { actions } = useAnimations(animations, scene)
  const scroll = useScroll()

  useEffect(() => {
    console.log(actions)
    actions["Experiment"].play().paused = true
  }, [actions])

  useFrame(() => {
    actions["Experiment"].time = (actions["Experiment"].getClip().duration * scroll.offset) / 4
  })

  return (
    <group>
      <primitive object={scene} />
    </group>
  )
}