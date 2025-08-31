import './footer.scss';
import SocialMedia from '../SocialMedia/SocialMedia';

export default function Footer() {
    return(
        <footer
            role="contentinfo"
            aria-label="pied de page avec informations de contact et liens réseaux sociaux"
        >
            <div className="footerContainer">
                <p>
                    &copy; {new Date().getFullYear()} <span id="purple">&lt;</span> Clément HUBERT <span id="purple">/&gt;</span>. Tous droits réservés.
                </p>
                <SocialMedia /> 
            </div>
        </footer>
    )
}