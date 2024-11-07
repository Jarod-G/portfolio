import React from 'react'
import {Suspense} from 'react'
import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import HackerRoom from "../components/HackerRoom.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";
import Sculpture from "../components/Sculpture.jsx";


const Hero = () => {
    const isSmallScreen = useMediaQuery({maxWidth: 440})
    const isMobile = useMediaQuery({maxWidth: 768})
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024})

    const sizes = calculateSizes(isSmallScreen, isMobile, isTablet)
    return (
        <section className="min-h-screen w-full flex flex-col relative" id="home">

            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">Bonjour, je suis Jarod <span className="waving-hand">👋</span></p>
                <p className="hero_tag text-gray_gradient">Étudiant en informatique</p>
            </div>

            <div className="w-full h-full absolute inset-0">
                    <Canvas className="w-full h-full">
                        <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                            <HeroCamera isMobile={isMobile}>
                                <HackerRoom position={sizes.deskPosition} rotation={[0.2, 0.2, 0.0]} scale={sizes.deskScale} />
                            </HeroCamera>
                            <group>
                                <Sculpture position={sizes.SculpturePosition} scale={0.75}/>
                                <ReactLogo position={sizes.reactLogoPosition}/>
                                <Cube position={sizes.cubePosition}/>
                            </group>


                        <ambientLight intensity={1} />
                        <directionalLight position={[-10, -10, -10]} intensity={0.5} />
                        </Suspense>
                    </Canvas>
            </div>

            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#about" className="w-fit">
                    <Button name="Travaillons ensemble !" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
                </a>
            </div>

        </section>
    )
}
export default Hero
