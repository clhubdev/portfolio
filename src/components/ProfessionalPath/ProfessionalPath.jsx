'use client'
import "./professionalPath.scss";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useState } from "react";

export default function ProfessionalPath() {

    const [openIndex, setOpenIndex] = useState(null);

    const items = [
        {
            title: "🎓 Titre RNCP (niveau VI) Concepteur développeur d’application",
            content:"Diplôme reconnu par l'état (Bac +3/4), 3WA en alternance au sein de l'entreprise l'Épi du fermier"
        },
        {
            title: "L'ÉPI du Fermier, Nantes // Développeur fullstack // Janvier 2023-Février 2025",
            content:
                "Conception, développement et maintenance d’un site de click & collect pour un réseau de quatre magasins (Symfony). Conception, développement et maintenance d’un outil de gestion des stocks et des tarifs, interconnecté au système d’encaissement du réseau(Symfony). Conception et développement d’une application de gestion des emplois du temps des salariés, destinée aux managers (Next.js). Mise en place de la méthodologie SCRUMBAN."
        },
        {
            title: "🎓 Titre RNCP (niveau V) Développeurintégrateur en réalisation d'applications web",
            content:"Diplôme reconnu par l'état (Bac +2), 3WA en alternance au sein de l'entreprise l'Épi du fermier"
        },
        {
            title: "Crédit agricole Ile-de-France, Paris VIème // Conseiller de clientèle // Avril 2020-Octobre 2021",
            content:
                "Gestion portefeuille de + 600 clients. Commercialisation de produits bancaires, financiers et assurantiels."
        },
        {
            title: "Cleverside, La Défense // Assistant RH // Novembre 2019-Juillet 2020",
            content:
                "Gestion administrative et commerciale + 100 salariés portés. Suivi de la conformité sociale et fiscale de l’entreprise."
        },
        {
            title: "🎓 Université Paris II Panthéon-Assas // Maitrise en Droit des affaires // 2019",
            content:
                "Droit des contrats. Droit des marchés financiers. Droit des entreprises en difficulté. Droit du commerce international."
        }
    ];

    const toggle = (index) => {
        setOpenIndex((current) => (current === index ? null : index));
    };

    return (
        <section className='professionalPath'>

            <div className='animationContainer'>
                <DotLottieReact
                    src="/work_animation.lottie"
                    loop
                    autoplay
                />
            </div>

            <div className="path">
                <h2>Mon parcours professionnel</h2>

                <div className="accordion" role="tablist" aria-label="Parcours professionnel">
                    {items.map((item, idx) => {
                        const isOpen = openIndex === idx;
                        const panelId = `accordion-panel-${idx}`;
                        const btnId = `accordion-button-${idx}`;
                        return (
                            <div className={`accordion-item ${isOpen ? "open" : ""}`} key={idx}>
                                <button
                                    id={btnId}
                                    className="accordion-header"
                                    aria-expanded={isOpen}
                                    aria-controls={panelId}
                                    onClick={() => toggle(idx)}
                                >
                                    <span className="accordion-title">{item.title}</span>
                                    <span className="accordion-icon" aria-hidden="true">▾</span>
                                </button>
                                <div
                                    id={panelId}
                                    role="region"
                                    aria-labelledby={btnId}
                                    className="accordion-panel"
                                >
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    )
}