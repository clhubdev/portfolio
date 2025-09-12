import styles from './page.module.scss';
import { FaFileContract } from "react-icons/fa";

export default function dataProtection() {
    return (
        <main className={styles.dataProtection}>

             <div className={styles.wrap} aria-hidden="true">
                <FaFileContract className={styles.contractLogo} />
            </div>


            <h1>Charte de Protection des Données Personnelles</h1>
            <p>Dernière mise à jour : 12 septembre 2025</p>
            <p>Entrée en vigueur : 12 septembre 2025</p>
            <p>Langue de référence : français</p>

            <h2>1) Qui traite vos données ?</h2>
            <p>Responsable de traitement : Clément HUBERT (personne physique)</p>
            <p>Adresse : 8 rue Bontemps, 77000 Melun, France</p>
            <p>Email de contact (droits RGPD) : clhubertmail@gmail.com</p>
            <p>Délégué à la protection des données (DPO) : non désigné.</p>
            <p>Cette Charte vise à informer de manière claire et accessible sur le traitement des données conformément au RGPD.</p>

            <h2>2) À propos du site</h2>
            <p>Site vitrine/portfolio accessible à tous publics ; le site ne cible pas spécifiquement les mineurs.</p>
            <p>Hébergement et diffusion : Vercel (infrastructure edge mondiale).</p>
            <p>Mesure d’audience : Vercel Web Analytics (voir §5).</p>

            <h2>3) Quelles données sont collectées ?</h2>
            <p>Formulaire de contact : nom, prénom, email, téléphone (données saisies par vous).</p>
            <p>Mesure d’audience : statistiques anonymisées et sans cookies via Vercel Web Analytics.</p>
            <p>Journaux techniques (logs) de l’hébergeur : adresse IP, user-agent, horodatage, URL (sécurité/diagnostic).</p>
            <p>Aucune autre collecte : pas de reCAPTCHA, pas d’intégrations externes, pas d’upload de fichiers, pas d’espace compte.</p>

            <h2>4) Finalités et bases légales</h2>
            <p>Répondre à vos demandes via le formulaire de contact → Intérêt légitime (gestion des sollicitations).</p>
            <p>Sécurité et bon fonctionnement (logs techniques) → Intérêt légitime (sécuriser le site, prévenir les abus).</p>
            <p>Mesure d’audience (Vercel Web Analytics) → Intérêt légitime (statistiques agrégées, sans cookies ni reciblage).</p>

            <h2>5) Cookies et traceurs</h2>
            <p>Le site n’utilise pas de cookies pour la mesure d’audience. Vercel Web Analytics ne dépose pas de cookies et s’appuie sur des données anonymisées/hashées ; aucun reciblage publicitaire n’est réalisé.</p>
            <p>En l’absence d’autres traceurs non exemptés, aucun bandeau cookies n’est affiché.</p>

            <h2>6) Destinataires et sous-traitants</h2>
            <p>Vercel : hébergement/CDN et Web Analytics (prestation d’hébergement et de statistiques).</p>
            <p>Google (Gmail) : réception et traitement des emails issus du formulaire de contact.</p>

            <h2>7) Transferts hors UE/EEE</h2>
            <p>Dans le cadre de l’hébergement/edge et de la messagerie, des transferts vers les États-Unis peuvent se produire.</p>
            <p>Vercel et Google sont certifiés dans le cadre du EU–US Data Privacy Framework (DPF). Les transferts reposent en priorité sur le DPF ; le cas échéant, ils peuvent être complétés par des Clauses Contractuelles Types (SCC).</p>

            <h2>8) Durées de conservation</h2>
            <p>Messages de contact : 3 ans après le dernier échange.</p>
            <p>Statistiques d’audience (Vercel Analytics) : jusqu’à 13 mois (données agrégées/anonymisées).</p>
            <p>Logs techniques (accès/erreur) : 6 à 12 mois (dont adresses IP 6 mois).</p>

            <h2>9) Vos droits</h2>
            <p>Vous disposez des droits d’accès, de rectification, d’effacement, de limitation, d’opposition et de portabilité lorsque applicable.</p>
            <p>Exercice des droits : par email à clhubertmail@gmail.com ou par courrier à 8 rue Bontemps, 77000 Melun, France.</p>
            <p>Délai de réponse : 1 mois, prolongeable de 2 mois en cas de demandes complexes.</p>
            <p>Vérification d’identité : en cas de doute raisonnable, une preuve d’identité minimale pourra être demandée (limitée aux informations nécessaires).</p>
            <p>Droit de réclamation : vous pouvez saisir l’autorité de contrôle compétente (en France : la CNIL).</p>

            <h2>10) Décisions automatisées et profilage</h2>
            <p>Le site ne réalise ni profilage, ni décision entièrement automatisée produisant des effets juridiques ou similaires.</p>

            <h2>11) Sécurité</h2>
            <p>Mesures en place : chiffrement en transit (HTTPS/TLS), chiffrement au repos côté hébergeur, contrôle d’accès à privilèges limités (seul l’éditeur a accès aux boîtes mail, logs et backend), authentification multifacteur (2FA) sur les comptes critiques, journalisation technique et surveillance d’anomalies, gestion des dépendances et mises à jour de sécurité.</p>
            <p>Pas de sauvegardes applicatives spécifiques ; la résilience et la sécurité de l’infrastructure sont assurées par l’hébergeur.</p>

            <h2>12) Violations de données (data breach)</h2>
            <p>En cas d’incident affectant des données personnelles : évaluation rapide du risque ; notification à la CNIL dans les 72 heures si nécessaire ; information des personnes si le risque est élevé ; mise en œuvre de mesures correctives.</p>

            <h2>13) Contact</h2>
            <p>Pour toute question relative à cette Charte ou à vos données : clhubertmail@gmail.com — 8 rue Bontemps, 77000 Melun, France.</p>

            <h2>14) Évolutions de la Charte</h2>
            <p>Cette Charte pourra évoluer (améliorations, cadre légal, services utilisés). La date de dernière mise à jour figurera en en-tête.</p>

        </main>
    )
}