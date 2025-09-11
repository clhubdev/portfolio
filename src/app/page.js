import styles from "./page.module.css";
import Presentation from "@/components/Presentation/Presentation";
import Expertises from "@/components/Expertises/Expertises";
import MyWork from "@/components/MyWork/MyWork";
import ProfessionnalPath from "@/components/ProfessionalPath/ProfessionalPath";
import LangageBento from "@/components/LangageBento/LangageBento";

export default function Home() {
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: 'Clément Hubert',
      jobTitle: 'Développeur web fullstack',
      url: 'https://www.clement-hubert.fr/',
      sameAs: [
        'https://github.com/clhubdev',
        'https://www.linkedin.com/in/clementh-webdev'
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />
      <main className={styles.page}>
        <Presentation />
        <LangageBento />
        <Expertises />
        <MyWork />
        <ProfessionnalPath />
      </main>
    </>
  );
}
