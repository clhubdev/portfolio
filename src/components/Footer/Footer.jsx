import './footer.scss';
import SocialMedia from '../SocialMedia/SocialMedia';
import Link from 'next/link';

export default function Footer() {
    return(
        <footer
            aria-label="pied de page avec informations de contact et liens réseaux sociaux"
        >
            <div className="footerContainer">
                <p>
                    &copy; {new Date().getFullYear()} <span className="purple">&lt;</span> Clément HUBERT <span className="purple">/&gt;</span>. Tous droits réservés.
                </p>
                <p>
                    <Link href="/mentions-legales">Mentions Légales</Link>
                </p>
                <SocialMedia /> 
            </div>
        </footer>
    )
}