'use client'

import { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import "./contactForm.scss";


export default function ContactForm() {
    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState(null);

    const sendEmail = async (e) => {
        e.preventDefault();
        if (!formRef.current) return;

        setLoading(true);
        setError(null);

        try {
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,   
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, 
                formRef.current,
                { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY }
            );

            setSent(true);
            formRef.current.reset();
        } catch (err) {
            console.error(err);
            setError(err?.text || 'Une erreur est survenue.');
        } finally {
            setLoading(false);
        }
    };

    if (sent) {
        return (
            <div role="status" aria-live="polite" className="p-4 rounded-md border">
                Merci, votre message a bien été envoyé.
            </div>
        );
    }

    return (
        <form ref={formRef} onSubmit={sendEmail} id="contact-form" className="formContact">
            <div>
                <label htmlFor="name">Nom complet* :</label>
                <input type="text" id="name" name="from_name" required />
            </div>

            <div>
                <label htmlFor="email">Email* :</label>
                <input type="email" id="email" name="reply_to" required />
            </div>

            <div>
                <label htmlFor="tel">Téléphone :</label>
                <input type="tel" id="tel" name="phone" />
            </div>

            <div>
                <label htmlFor="object">Objet du message* :</label>
                <input type="text" id="object" name="subject" required />
            </div>

            <div>
                <label htmlFor="message">Votre message</label>
                <textarea id="message" name="message" required></textarea>
            </div>

            <button type="submit" disabled={loading}>
                {loading ? 'Envoi…' : 'Envoyer'}
            </button>

            {error && (
                <p role="alert" className="text-red-600">
                    {error}
                </p>
            )}
        </form>
    )
}