'use client';
import './socialMedia.scss';
import { MdEmail } from 'react-icons/md';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import { PiReadCvLogoFill } from 'react-icons/pi';
import { FaPhoneSquare } from 'react-icons/fa';

export default function SocialMedia() {
    return (
        <nav className="iconsFooter" aria-label="Liens vers les réseaux sociaux et contacts">
            <ul className="mediaList">
                <li>
                    <a
                        href="https://github.com/clhubdev"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Lien vers mon profil Github"
                        title="GitHub"
                    >
                        <IoLogoGithub size={24} role="presentation" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/clementh-webdev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Lien vers mon profil LinkedIn"
                        title="LinkedIn"
                    >
                        <IoLogoLinkedin size={24} role="presentation" />
                    </a>
                </li>
                <li>
                    <a
                        href="mailto:clhubertmail@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="M'envoyer un email : clhubertmail@gmail.com"
                        title="Email"
                    >
                        <MdEmail size={24} role="presentation" />
                    </a>
                </li>
                <li>
                    <a
                        href="tel:+33623550718"
                        aria-label="Disponible par téléphone au 06.23.05.07.18"
                        title="Téléphone"
                    >
                        <FaPhoneSquare size={24} role="presentation" />
                    </a>
                </li>
                <li>
                    <a
                        href="/CV_HUBERT_Clément_dev_web_FS.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="CV HUBERT Clément au format PDF"
                        title="Voir mon CV"
                    >
                        <PiReadCvLogoFill size={24} role="presentation" />
                    </a>
                </li>
            </ul>
        </nav>
    );
}