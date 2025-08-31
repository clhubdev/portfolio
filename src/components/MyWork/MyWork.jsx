'use client';
import './myWork.scss';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { IoLogoGithub } from "react-icons/io5";

export default function MyWork() {
    return (
        <section className='myWork'>

            <div className='animationContainer'>
                <DotLottieReact
                        src="/rocket.lottie"
                        loop
                        autoplay
                />
            </div>

            <div className="projects">
                <h2>Mes projets</h2>

                <div className='projectsCardsList'>

                    <div className='projectCard'>
                        <div className="cardContent">

                            <span className='actions'>
                                <IoLogoGithub style={{fontSize: "3rem", color:"#5a17eb"}}/>
                                {/* <FaExternalLinkSquareAlt style={{fontSize: "3rem", color:"#5a17eb"}}/> */}
                            </span>

                            <h3>L'Épi du fermier </h3>

                            <p className="hoverText">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo sit ratione suscipit! Ex corporis magni, ipsam cumque aperiam eligendi aliquam deleniti? Magnam quas dolore provident iusto, expedita odio recusandae voluptates.</p>

                            <div></div>
                        </div>

                        <div className='tags'>
                            <ul>
                                <li>Symfony</li>
                                <li>PHP</li>
                                <li>CSS</li>
                                <li>Javascript</li>
                                <li>MySql</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            
        </section>

    );
}