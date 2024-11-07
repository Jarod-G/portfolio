import React, {Suspense, useState} from 'react'
import {myProjects} from "../constants/index.js";
import {Canvas} from "@react-three/fiber";
import {Center, OrbitControls} from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader.jsx";
import DemoComputer from "../components/DemoComputer.jsx";

const projectCount = myProjects.length

const Projects = () => {
    const [projectIndex, setProjectIndex] = useState(0)
    const currentProject = myProjects[projectIndex];

    const handleNavigation = (direction) => {
        setProjectIndex((prevIndex) => {
            if(direction === "previous") {
                return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
            } else {
                return prevIndex === projectCount - 1 ? 0 : prevIndex + 1
            }
        })
    }

    return (
        <section className="c-space my-20">
            <p className="head-text">Mon travail</p>

            {/*Container for the grid to show projects */}
            <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
                <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">

                    {/*Container for spotlights */}
                    <div className="absolute top-0 right-0">
                        <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl"/>
                    </div>

                    {/*Container for the project's logo */}
                    <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
                        <img src={currentProject.logo} alt="logo" className="w-10 h-10 shadow-sm"/>
                    </div>

                    {/*Container for title/desc/subDesc of the current project */}
                    <div className="flex flex-col gap-5 my-5 text-white-600">
                        <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>
                        <p className="animatedText">{currentProject.desc}</p>
                        <p className="animatedText">{currentProject.subDesc}</p>
                    </div>

                    {/*Container for tech logos and check website link */}
                    <div className="flex items-center justify-between flex-wrap gap-5">
                        <div className="flex items-center gap-3">
                            {currentProject.tags.map(
                                (tag, index) => (
                                <div key={index} className="tech-logo">
                                    <img src={tag.path} alt={tag.name}/>
                                </div>
                            ))}
                        </div>

                        <a className="flex items-center gap-2 cursor-pointer text-white-600" href={currentProject.href} target="_blank" rel="noreferrer">
                            <p>Lien vers le site</p>
                            <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3"/>
                        </a>
                    </div>

                    {/*Container for arrows left and right */}
                    <div className="flex justify-between mt-7 items-center">
                        <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
                            <img src="/assets/left-arrow.png" alt="left-arrow" className="w-4 h-4"/>
                        </button>
                        <button className="arrow-btn" onClick={() => handleNavigation('next')}>
                            <img src="/assets/right-arrow.png" alt="right-arrow" className="w-4 h-4"/>
                        </button>
                    </div>
                </div>

                {/*Container for 3d computer scene */}
                <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
                    <Canvas>
                        <ambientLight intensity={Math.PI / 4}/>
                        <directionalLight position={[15, 10, 5]}/>
                        <Center>
                            <Suspense fallback={CanvasLoader}>
                                <group position={[0, -2.5, -1]} scale={50} rotation={[0.3, -0.20, 0]}>
                                    <DemoComputer texture={currentProject.texture}/>
                                </group>
                            </Suspense>
                            <OrbitControls position={[0, 0, 5]} minDistance={1} maxDistance={5.5} maxPolarAngle={Math.PI / 2} enableZoom={true}/>
                        </Center>

                    </Canvas>
                </div>
            </div>
        </section>
    )
}
export default Projects
