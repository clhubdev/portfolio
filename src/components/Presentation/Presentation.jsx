import InfiniteScroller from "../InfiniteScroller/InfiniteScroller"
import ScrollBtn from "../ScrollBtn/ScrollBtn"
import SocialMedia from "../SocialMedia/SocialMedia"
import "./presentation.scss"

export default function Presentation() {
    return (
        <section className="presentation">

            <div className="videoBg" aria-hidden="true">
                <video
                    className="video"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                >
                    <source src="presentation_bg.mp4" type="video/mp4" />
                </video>
                <div className="overlay" />
            </div>

            <div className="titleContainer">
                <span className="availability">Disponible immédiatement</span>
                <h1>HUBERT Clément</h1>
                <h2>Développeur web fullstack</h2>

                <InfiniteScroller />

                <p>Développeur Fullstack polyvalent, 2 ans d’expérience en conception et développement d’applications web (Symfony, Next.js)
                    Passionné par l’architecture logicielle et la performance, je conçois des solutions évolutives en mode Agile et DevOps. Rigoureux
                    et proactif, je développe et livre des applications web, toujours orienté résultats et qualité. En quête de nouveaux défis, je suis prêt
                    à mettre ma polyvalence et ma curiosité technologique au service de vos projets. N’hésitez pas à me contacter pour comprendre
                    ce que nous pouvons nous apporter mutuellement.</p>
                <SocialMedia />

                <div className="actions">
                    <button>Télécharger mon CV</button>
                    <button>Voir mes projets</button>
                </div>
            </div>

            <ScrollBtn />
        </section>
    )
}