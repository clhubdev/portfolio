'use client';

import Link from 'next/link';
import './not-found.scss';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function NotFound() {
    return (
        <main className='notFound'>
            <div className='animationContainer'>
                <DotLottieReact
                    src="/404error.lottie"
                    loop
                    autoplay
                />
            </div>
            <h2>Erreur 404</h2>
            <p>Oups, la page n&apos;existe pas !</p>
            <Link href="/" className="btn">Retourner à l&apos;accueil</Link>
        </main>
    )
}