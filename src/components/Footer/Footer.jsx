import './footer.scss';
import SocialMedia from '../SocialMedia/SocialMedia';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer
            aria-label="pied de page avec informations de contact et liens réseaux sociaux"
        >
            <div className="footerContainer">
                <p>
                    &copy; {new Date().getFullYear()} <span className="purple">&lt;</span> Clément HUBERT <span className="purple">/&gt;</span>. Tous droits réservés.
                </p>

                <SocialMedia />

                <div className='legalContainer'>
                    <span className="separator" aria-hidden="true" />

                    <div className='legalLinks'>
                    <p>
                        <Link href="/mentions-legales">Mentions Légales</Link>
                    </p>
                    <p>
                        <Link href="/charte-protection-donnees-personnelles">Charte de Protection des Données Personnelles</Link>
                    </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}