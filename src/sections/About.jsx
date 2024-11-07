import React, {useState} from 'react'
import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";

const About = () => {

    const [hasCopied, setHasCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText('ginjarod@gmail.com');
        setHasCopied(true);
        setTimeout(() => setHasCopied(false), 2000)
    }

    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="grid1" className="w-full sm:h-[276px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">Bonjour, je suis Jarod</p>
                            <p className="grid-subtext">Je suis un développeur passionné basé en France, spécialisé dans le développement web/mobile et logiciel. J'aime créer des expériences utilisateur fluides et des interfaces modernes. Actuellement étudiant en informatique.</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">Pile de technologies</p>
                            <p className="grid-subtext">Je suis spécialisé dans le domaine du web et de l'informatique.</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                            height={326}
                            width={326}
                            backgroundColor="rgba(0, 0, 0, 0)"
                            backgroundImageOpacity={0.5}
                            showAtmosphere={true}
                            showGraticules={true}
                            globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            labelsData={[{
                                lat: 43.6,
                                lng: 1.433333,
                                text: "I'm here",
                                color: 'white',
                                size: 20
                            }]}
                            />

                        </div>
                        <div>
                            <p className="grid-headtext">Je peux travailler de n'importe où (sur Terre) !</p>
                            <p className="grid-subtext">Je suis basé en France à Toulouse, mais il est possible de travailler à distance.</p>
                            <a href="#contact" className="w-fit">
                                <Button name="Me contacter" isBeam containerClass="w-full mt-10" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">Ma passion pour le code</p>
                            <p className="grid-subtext">J'aime résoudre des problèmes et créer de nouvelles choses, et ce n'est pas seulement mon métier.</p>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="/assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-contain sm:object-top"/>
                        <div className="space-y-5">
                            <p className="grid-subtext text-center">Mon email</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"} alt="copy"/>
                                <p className="lg:text-2xl md:text-xl font-medium text-white text-gray_gradient">ginjarod@gmail.com</p>
                            </div>
                            
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}
export default About
