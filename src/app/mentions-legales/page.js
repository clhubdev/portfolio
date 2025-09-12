import Link from 'next/link';
import styles from './page.module.scss';
import { GoLaw } from "react-icons/go";

export default function legal() {
    return (
        <main className={styles.legal}>

            <h1 className={styles.title}>MENTIONS LÉGALES</h1>

            <div className={styles.wrap} aria-hidden="true">
                <GoLaw className={styles.lawLogo} />
            </div>

            <p className={styles.text}>Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l&apos;économie numérique, il est précisé aux utilisateurs du site www.clement-hubert.fr l&apos;identité des différents intervenants dans le cadre de sa réalisation et de son suivi.
            </p>

            <h2 className={styles.subtitle}>Édition du site </h2>

            <p className={styles.text}>Le présent site, accessible à l’URL www.clement-hubert.fr (le « Site »), est édité par :</p>

            <p className={styles.text}>Clément HUBERT, résidant 8 rue bontemps 77000 Melun, de nationalité Française (France), né(e) le 02/07/1994,</p>

            <h2 className={styles.subtitle}>Hébergement</h2>

            <p className={styles.text}>
                Le Site est hébergé par la société Vercel, situé 340 S Lemon Ave #4133 Walnut, CA 91789, (contact téléphonique ou email : +15592887060).
            </p>

            <h2 className={styles.subtitle}>Directeur de publication</h2>

            <p className={styles.text}>Le Directeur de la publication du Site est Clément HUBERT.</p>

            <h2 className={styles.subtitle}>Nous contacter</h2>

            <p className={styles.text}>Par téléphone : +33623550718</p>
            <p className={styles.text}>Par email : clhubertmail@gmail.com</p>
            <p className={styles.text}>Par courrier : 8 rue bontemps 77000 Melun</p>

            <h2 className={styles.subtitle}>Données personnelles</h2>

            <p className={styles.text}>Le traitement de vos données à caractère personnel est régi par notre <Link href='/charte-protection-donnees-personnelles'>Charte du respect de la vie privée, disponible depuis la section &quot;Charte de Protection des Données Personnelles&quot;</Link>, conformément au Règlement Général sur la Protection des Données 2016/679 du 27 avril 2016 («RGPD»).</p>

        </main>
    )
}