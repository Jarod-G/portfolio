/*
Author: thegraphicsgeek (https://sketchfab.com/thegraphicsgeek)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/gameboy-advance-sp-18c9688eaa8f4903a940c105242df15f
Title: Gameboy Advance SP
*/

import React, {useRef} from 'react'
import {useGLTF, useVideoTexture} from '@react-three/drei'
import {useGSAP} from "@gsap/react";
import gsap from 'gsap';

const DemoComputer = (props) => {
    const group = useRef()
    const { nodes, materials } = useGLTF('/models/game-console.glb')
    const txt_video = useVideoTexture(props.texture ? props.texture : '/textures/project/project1.mp4')

    useGSAP(() => {
        gsap.from(group.current.rotation, {
            y: Math.PI / 2,
            duration: 1,
            ease: 'power4.out',
        })
    }, [txt_video])

    return (
        <group ref={group} {...props} dispose={null}>
            <group scale={0.01}>
                <group position={[0, -2.175, -4.528]} rotation={[1.309, 0, 0]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.TopScreen_Frame_geo_Gameboy_1002_MAT_0.geometry}
                        material={materials.Gameboy_1002_MAT}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Top_LargeHinge_geo_Gameboy_1002_MAT_0.geometry}
                        material={materials.Gameboy_1002_MAT}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Top_SmallHinge_geo_Gameboy_1002_MAT_0.geometry}
                        material={materials.Gameboy_1002_MAT}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.ScreenGuard_geo_Gameboy_1002_MAT_0.geometry}
                        material={materials.Gameboy_1002_MAT}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LogoSticker_geo_Gameboy_1003_MAT_0.geometry}
                        material={materials.Gameboy_1003_MAT}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.ScreenGlass_geo_ScreenGlass_MAT_0.geometry}
                        material={materials.ScreenGlass_MAT}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.ScreenCover_geo_ScreenGlass_MAT_0.geometry}
                        material={materials.ScreenGlass_MAT}
                    />

                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Sceren_geo_Screen_MAT_0.geometry}
                            material={materials.Screen_MAT}
                        >
                        <meshBasicMaterial map={txt_video}/>
                    </mesh>
                </group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Base_geo_Gameboy_1001_MAT_0.geometry}
                    material={materials.Gameboy_1001_MAT}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Btm_Label_geo_Gameboy_1003_MAT_0.geometry}
                    material={materials.Gameboy_1003_MAT}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Power_LED01_geo_Gameboy_1001_MAT_0.geometry}
                    material={materials.Gameboy_1001_MAT}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Power_LED02_geo_Gameboy_1001_MAT_0.geometry}
                    material={materials.Gameboy_1001_MAT}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Battery_Lid_geo_Gameboy_1001_MAT_0.geometry}
                    material={materials.Gameboy_1001_MAT}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RKesnsignton_Lock_End_geo_Gameboy_1001_MAT_0.geometry}
                    material={materials.Gameboy_1001_MAT}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.LKesnsignton_Lock_End_geo_Gameboy_1001_MAT_0.geometry}
                    material={materials.Gameboy_1001_MAT}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.BatterLid_Screw_geo_Gameboy_1001_MAT_0.geometry}
                    material={materials.Gameboy_1001_MAT}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.PowerBtn_Base_geo_Gameboy_1001_MAT_0.geometry}
                    material={materials.Gameboy_1001_MAT}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.PowerBtn_geo_Gameboy_1001_MAT_0.geometry}
                    material={materials.Gameboy_1001_MAT}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.VolumeBtn_Base_geo_Gameboy_1001_MAT_0.geometry}
                    material={materials.Gameboy_1001_MAT}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.VolumeBtn_geo_Gameboy_1001_MAT_0.geometry}
                    material={materials.Gameboy_1001_MAT}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.HingeCorner_RMid_geo_Gameboy_1001_MAT_0.geometry}
                    material={materials.Gameboy_1001_MAT}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.HingeCorner_LMid_geo_Gameboy_1001_MAT_0.geometry}
                    material={materials.Gameboy_1001_MAT}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.ChargingPort_Frame_geo_Gameboy_1002_MAT_0.geometry}
                    material={materials.Gameboy_1002_MAT}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.ChargingPort_geo_Gameboy_1002_MAT_0.geometry}
                    material={materials.Gameboy_1002_MAT}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.ChargingPort_Mid_geo_Gameboy_1002_MAT_0.geometry}
                    material={materials.Gameboy_1002_MAT}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.LinkPort_geo_Gameboy_1002_MAT_0.geometry}
                    material={materials.Gameboy_1002_MAT}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.LinkPort_Mid_geo_Gameboy_1002_MAT_0.geometry}
                    material={materials.Gameboy_1002_MAT}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.LinkPort_Frame_geo_Gameboy_1002_MAT_0.geometry}
                    material={materials.Gameboy_1002_MAT}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Select_Btn_geo_Gameboy_1002_MAT_0.geometry}
                    material={materials.Gameboy_1002_MAT}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Start_Btn_geo_Gameboy_1002_MAT_0.geometry}
                    material={materials.Gameboy_1002_MAT}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.B_Btn_geo_Gameboy_1002_MAT_0.geometry}
                    material={materials.Gameboy_1002_MAT}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.A_Btn_geo_Gameboy_1002_MAT_0.geometry}
                    material={materials.Gameboy_1002_MAT}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Brightness_Btn_geo_Gameboy_1002_MAT_0.geometry}
                    material={materials.Gameboy_1002_MAT}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DPad_geo_Gameboy_1002_MAT_0.geometry}
                    material={materials.Gameboy_1002_MAT}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.R_ShoulderBtn_geo_Gameboy_1003_MAT_0.geometry}
                    material={materials.Gameboy_1003_MAT}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.R_ShoulderButn_Inside_geo_Gameboy_1001_MAT_0.geometry}
                    material={materials.Gameboy_1001_MAT}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.L_ShoulderButn_Inside_geo_Gameboy_1001_MAT_0.geometry}
                    material={materials.Gameboy_1001_MAT}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.L_ShoulderBtn_geo_Gameboy_1003_MAT_0.geometry}
                    material={materials.Gameboy_1003_MAT}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.CartridgeSlot_Teeth_geo_Gameboy_1001_MAT_0.geometry}
                    material={materials.Gameboy_1001_MAT}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.OffText_geo_Gameboy_1003_MAT_0.geometry}
                    material={materials.Gameboy_1003_MAT}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.OnText_geo_Gameboy_1003_MAT_0.geometry}
                    material={materials.Gameboy_1003_MAT}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.OnDot_geo_Gameboy_1003_MAT_0.geometry}
                    material={materials.Gameboy_1003_MAT}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.OffDot_geo_Gameboy_1003_MAT_0.geometry}
                    material={materials.Gameboy_1003_MAT}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.VolText_geo_Gameboy_1003_MAT_0.geometry}
                    material={materials.Gameboy_1003_MAT}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.VolDot_geo_Gameboy_1003_MAT_0.geometry}
                    material={materials.Gameboy_1003_MAT}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.VolBar_geo_Gameboy_1003_MAT_0.geometry}
                    material={materials.Gameboy_1003_MAT}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/models/computer.glb')

export default DemoComputer;