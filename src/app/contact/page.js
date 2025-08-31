import ContactForm from "@/components/ContactForm/ContactForm";
import styles from "./page.module.scss";
import { FiMail } from "react-icons/fi";
import { BsTelephoneOutbound } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaRegMap } from "react-icons/fa";


export default function Contact() {
    return (
        <main className={styles.page}>
            <section className={styles.contactTitle}>
                <h1>Prendre contact</h1>
                <p>Vous recherchez votre prochain collaborateur ? Vous souhaitez concrétiser un projet web ? Faisons connaissances !</p>
            </section>

            <div className={styles.contactContainer}>
                <section className={styles.contactInfos}>
                    <h2>Informations de contact</h2>

                    <div className={styles.infosList}>
                        <div className={styles.infosItem}>
                            <FiMail style={{fontSize: "2rem"}}/>
                            <div>
                                <div style={{marginBottom: "0.5rem"}}>Email</div>
                                <div>clhubertmail@gmail.com</div>
                            </div>
                        </div>

                        <div className={styles.infosItem}>
                            <BsTelephoneOutbound style={{fontSize: "2rem"}}/>
                            <div>
                                <div style={{marginBottom: "0.5rem"}}>Téléphone</div>
                                <div>06.23.55.07.18</div>
                            </div>
                        </div>

                        <div className={styles.infosItem}>
                            <FaGithub style={{fontSize: "2rem"}}/>
                            <div>
                                <div style={{marginBottom: "0.5rem"}}>Github</div>
                                <div>clhubdev</div>
                            </div>
                        </div>

                        <div className={styles.infosItem}>
                            <FaLinkedin style={{fontSize: "2rem"}}/>
                            <div>
                                <div style={{marginBottom: "0.5rem"}}>LinkedIn</div>
                                <div>in/clementh-webdev</div>
                            </div>
                        </div>

                        <div className={styles.infosItem}>
                            <FaRegMap style={{fontSize: "2rem"}}/>
                            <div>
                                <div style={{marginBottom: "0.5rem"}}>Mobilité</div>
                                <div>Ile-de-France</div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.actions}>
                        <button>Télécharger mon CV</button>
                        <button>Voir mes projets</button>
                    </div>
                </section>

                <section className={styles.formContainer}>
                    <div className={styles.formTitle}>
                        <h2>Envoyez moi un message</h2>
                        <p>Promis je vérifie ma boîte mail régulièrement, même les spams</p>
                    </div>

                    <div style={{height: "100%"}}>
                        <ContactForm />
                    </div>
                </section>
            </div>
        </main>
    );
}
