"use client";
import { useGLTF, useScroll } from '@react-three/drei';
import { forwardRef, useLayoutEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';

const Proto = forwardRef((props, ref) => {
    const { nodes, materials } = useGLTF('/proto.glb');
    const groupRef = useRef();
    const scroll = useScroll();
    const tl = useRef();

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.5;
        }
    });

    useLayoutEffect(() => {
        tl.current = gsap.timeline({ defaults: { duration: 2, ease: 'expo.inOut' } })
            .to(groupRef.current.position, { x: -3 }, 6);
    }, []);

    return (
        <group ref={groupRef} {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube.geometry}
                material={materials.Material}
                scale={[1, 0.051, 0.599]}
            />
            <group position={[0, 0.545, -0.556]} rotation={[1.454, 0, 0]} scale={[1, 0.051, 0.545]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_1.geometry}
                    material={materials['Material.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_2.geometry}
                    material={materials.Material}
                />
            </group>
        </group>
    );
});

useGLTF.preload('/proto.glb');
export { Proto };
