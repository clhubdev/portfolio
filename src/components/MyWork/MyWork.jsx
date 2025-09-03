'use client';
import './myWork.scss';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { IoLogoGithub } from "react-icons/io5";

export default function MyWork() {
    return (
        <section className='myWork' id='myWork'>

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

                    {/* Epi du fermier projet */}
                    <div
                        className='projectCard'
                        onClick={() => window.open("https://lepidufermier.com/", "_blank")}
                        role="link"
                        title="Lien vers le site de l'Epi du fermier"
                    >
                        <div
                            className="cardContent"
                            style={{ backgroundImage: "url('/epi_snap.webp')" }}
                        >
                            <span className='actions'>
                            </span>
                            <h3>L'Epi du Fermier</h3>
                            <p className="hoverText">Travail réalisé en alternance. Site sous Symfony constitué d'un site de click&collect pour un réseau 4 magasins ainsi que d'un dashboard pour la gestion des prix, du stock le tout directement connecté aux systèmes d'encaissement pour un gain de temps.</p>
                        </div>

                        <div className='tags'>
                            <ul>
                                <li>Symfony</li>
                                <li>PHP</li>
                                <li>Javascript</li>
                                <li>ExpressJS</li>
                                <li>MySQL</li>
                                <li>API REST</li>
                            </ul>
                        </div>
                    </div>

                    <div
                        className='projectCard'
                    >
                        <div
                            className="cardContent"
                            style={{ backgroundImage: "url('/rh_snap.webp')" }}
                        >
                            <span className='actions'>
                            </span>
                            <h3>L'Epi du Fermier - Solution RH</h3>
                            <p className="hoverText">Application interne réalisée sous REACT permettant aux manager de gérer les plannings d'équipes. L'application affiche les plannings pour chaque salariés et prévient des incohérences de planning lors de l'élaboration de ses derniers.</p>
                        </div>

                        <div className='tags'>
                            <ul>
                                <li>REACT</li>
                                <li>Javascript</li>
                                <li>ExpressJS</li>
                                <li>MySQL</li>
                                <li>API REST</li>
                            </ul>
                        </div>
                    </div>

                    {/* MyCarTeam projet */}
                    <div
                        className='projectCard'
                        onClick={() => window.open("https://github.com/clhubdev/my_car_team/", "_blank")}
                        role="link"
                        title="Lien vers le repository de MyCarTeam"
                    >
                        <div
                            className="cardContent"
                            style={{ backgroundImage: "url('/myCarTeam_snap.webp')" }}
                        >
                            <span className='actions'>
                                <IoLogoGithub style={{ fontSize: "3rem", color: "#5a17eb" }} />
                            </span>
                            <h3>MyCarTeam</h3>
                            <p className="hoverText">Projet de fin d'année pour l'obtention du titre RNCP Concepteur et développeur d'application. Il s'agit d'un site de covoiturage professionnel permettant aux salariés d'une même entreprise de rentrer en contact afin de proposer des trajets domicile-travail</p>
                        </div>

                        <div className='tags'>
                            <ul>
                                <li>NextJS</li>
                                <li>Javascript</li>
                                <li>ExpressJS</li>
                                <li>MySQL</li>
                                <li>Docker</li>
                                <li>API REST</li>
                            </ul>
                        </div>
                    </div>

                    {/* Jad ouraini projet */}
                    <div
                        className='projectCard'
                        onClick={() => window.open("https://jadouraini-avocat.com/", "_blank")}
                        role="link"
                        title="Lien vers le site de Maitre Jad OURAINI, avocat au barreau de Melun"
                    >
                        <div
                            className="cardContent"
                            style={{ backgroundImage: "url('/jad_snap.webp')" }}
                        >
                            <span className='actions'>
                            </span>
                            <h3>Jad OURAINI - Avocat</h3>
                            <p className="hoverText">Maitre OURAINI souhaitait un site afin d'être visible sur le web. Ce site a donc été conçu afin de respecter les bonnes pratiques du SEO.</p>
                        </div>

                        <div className='tags'>
                            <ul>
                                <li>NextJS</li>
                                <li>Javascript</li>
                                <li>CSS</li>
                                <li>API REST</li>
                            </ul>
                        </div>
                    </div>

                    <div
                        className='projectCard'
                        onClick={() => window.open("https://github.com/clhubdev/portfolio", "_blank")}
                        role="link"
                        title="Accéder au repository Github de mon portfolio"
                    >
                        <div
                            className="cardContent"
                            style={{ backgroundImage: "url('/portfolio_snap.webp')" }}
                        >
                            <span className='actions'>
                                <IoLogoGithub style={{ fontSize: "3rem", color: "#5a17eb" }} />
                            </span>
                            <h3>Clément HUBERT - Portfolio</h3>
                            <p className="hoverText">Mon portfolio réalisé avec NextJS. Responsive, il vous permet sur mobile comme sur ordinateur ou même tablette, de découvrir mon parcours et mon travail. Vous pouvez aussi directement me contacter</p>
                        </div>

                        <div className='tags'>
                            <ul>
                                <li>NextJS</li>
                                <li>Javascript</li>
                                <li>SCSS</li>
                            </ul>
                        </div>
                    </div>



                </div>
            </div>


        </section>

    );
}