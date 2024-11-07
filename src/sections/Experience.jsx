import React, {Suspense, useState} from 'react'
import {workExperiences} from "../constants/index.js";
import canvasLoader from "../components/CanvasLoader.jsx";
import Developer from "../components/Developer.jsx";
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";

const Experience = () => {
    const [animationName, setAnimationName] = useState('idle')
    
    return (
        <section className="c-space my-20" id="experience">
            <div className="w-full text-white-600">
                <h3 className="head-text">Mon expérience professionnelle</h3>
                <div className="work-container">
                    <div className="work-canvas">
                        <Canvas>
                            <ambientLight intensity={3}/>
                            <spotLight position={[10,10,10]} angle={0.1} penumbra={1}/>
                            <directionalLight position={[10,10,10]} intensity={0.5}/>
                            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2}/>

                            <Suspense fallback={canvasLoader}>
                                <Developer position-y={-3} scale={3} animationName={animationName}/>
                            </Suspense>
                        </Canvas>
                    </div>
                    <div className="work-content">
                        <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                            {workExperiences.map(({id,name, pos,icon,duration,title,animation}) => (
                                <div key={id} className="work-content_container group"
                                     onClick={() => setAnimationName(animation.toLowerCase())}
                                     onPointerOver={() => setAnimationName(animation.toLowerCase())}
                                onPointerOut={() => setAnimationName('idle')}>
                                    <div className="flex flex-col h-full justify-start items-center py-2">
                                        <div className="work-content_logo">
                                            <img src={icon} alt="logo" className="w-full h-full"/>
                                        </div>
                                        <div className="work-content_bar"/>
                                    </div>

                                    <div className="p-5 px-2.5 py-5">
                                        <p className="font-bold text-white-800">{name}</p>
                                        <p className="text-sm mb-5">{pos} -- {duration}</p>
                                        <p className="group-hover:text-white-400 transition ease-in-out duration-500">{title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Experience
