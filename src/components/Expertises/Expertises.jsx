import './expertises.scss';
import { LuPencilRuler } from "react-icons/lu";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { RiTeamLine } from "react-icons/ri";

export default function Expertises() {
    return (
        <section className="expertises" id='expertises'>

            <h2>Mes expertises</h2>

            <div className='expertisesListContainer'>
                <div className='expertiseCard'>
                    <div className='expertiseTitle'>
                        <LuPencilRuler style={{fontSize: "4rem", marginRight: "1rem"}}/>
                        <h3><span className='underline'>Conception</span> d'applications web</h3>
                    </div>

                    <ul className='expertiseText'>
                        <li>Analyser les besoins clients et maquetter une application.</li>
                        <li>Définir l’architecture logicielle d’une application.</li>
                    </ul>
                </div>

                <div className='expertiseCard'>
                    <div className='expertiseTitle'>
                        <HiOutlineComputerDesktop style={{fontSize: "4rem", marginRight: "1rem"}}/>
                        <h3><span className='underline' style={{ "--underline-color": "#5a17eb" }}>Développement</span> d'applications web</h3>
                    </div>

                    <ul className='expertiseText'>
                        <li>Développer des interfaces utilisateurs.</li>
                        <li>Développer des composants métiers.</li>
                        <li>Mettre en place une base de données relationnelle et développer les composants d’accès aux données SQL.</li>
                        <li>Préparer et exécuter les plans de tests d'une application.</li>
                        <li>Contribuer à la mise en production dans une démarche DevOps.</li>
                    </ul>
                </div>

                <div className='expertiseCard'>
                    <div className='expertiseTitle'>
                        <RiTeamLine style={{fontSize: "4rem", marginRight: "1rem"}}/>
                        <h3><span className='underline' style={{ "--underline-color": "orange" }}>Gestion</span> de projet</h3>
                    </div>
                    <ul className='expertiseText'>
                        <li>Élaborer et maintenir la documentation projet (cahier des charges, user stories, diagrammes UML).</li>
                        <li>Collaborer en mode Agile.</li>
                    </ul>
                </div>
            </div>

        </section>
    )
}