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

                    <p className='expertiseText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sequi, reprehenderit voluptas laboriosam perferendis praesentium, assumenda cumque recusandae odit expedita molestias aut soluta deserunt corrupti. Inventore aliquid eos debitis voluptatum.</p>
                </div>

                <div className='expertiseCard'>
                    <div className='expertiseTitle'>
                        <HiOutlineComputerDesktop style={{fontSize: "4rem", marginRight: "1rem"}}/>
                        <h3><span className='underline' style={{ "--underline-color": "#5a17eb" }}>Développement</span> d'applications web</h3>
                    </div>

                    <p className='expertiseText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sequi, reprehenderit voluptas laboriosam perferendis praesentium, assumenda cumque recusandae odit expedita molestias aut soluta deserunt corrupti. Inventore aliquid eos debitis voluptatum.</p>
                </div>

                <div className='expertiseCard'>
                    <div className='expertiseTitle'>
                        <RiTeamLine style={{fontSize: "4rem", marginRight: "1rem"}}/>
                        <h3><span className='underline' style={{ "--underline-color": "orange" }}>Gestion</span> de projet</h3>
                    </div>
                    <p className='expertiseText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sequi, reprehenderit voluptas laboriosam perferendis praesentium, assumenda cumque recusandae odit expedita molestias aut soluta deserunt corrupti. Inventore aliquid eos debitis voluptatum.</p>
                </div>
            </div>

        </section>
    )
}