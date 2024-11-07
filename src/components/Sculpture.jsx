import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap';

const Sculpture = (props) => {
    const { nodes, materials } = useGLTF('/models/bust-hi.glb')
    const sculptureRef = useRef()

    // Floating animation
    useEffect(() => {
        if (sculptureRef.current) {
            gsap.to(sculptureRef.current.rotation, {
                y: "+=6.28",
                duration: 25,
                repeat: -1,
                ease: "linear",
            })

            // Make the sculpture float up and down
            gsap.to(sculptureRef.current.position, {
                y: "+=0.5",
                duration: 2,
                yoyo: true,
                repeat: -1,
                ease: "power1.inOut",
            })
        }
    }, [])

    return (
        <group {...props} dispose={null} ref={sculptureRef}>
            <spotLight position={[0, 20, 0]} intensity={100}/>
            {/* Sculpture Mesh */}
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mesh_0001.geometry}
                material={nodes.Mesh_0001.material}
                position={[0, 0.386, 0]}
            />
        </group>
    )
}

useGLTF.preload('/models/bust-hi.glb')
export default Sculpture;
