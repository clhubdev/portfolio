'use client'
import "./professionalPath.scss";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useState } from "react";

export default function ProfessionalPath() {

    const [openIndex, setOpenIndex] = useState(null);

    const items = [
        {
            title: "Développeur Front-End — 2023 à aujourd’hui",
            content:
                "Travail sur des applications React/Next.js, intégration d’API, optimisation des performances et accessibilité."
        },
        {
            title: "Alternance — 2021 à 2023",
            content:
                "Participation à la refonte d’un design system, mise en place de tests et CI/CD."
        },
        {
            title: "Stage — 2020",
            content:
                "Découverte des bonnes pratiques, revue de code, documentation et support équipe."
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