import styles from "./page.module.css";
import Presentation from "@/components/Presentation/Presentation";
import Expertises from "@/components/Expertises/Expertises";
import MyWork from "@/components/MyWork/MyWork";
import ProfessionnalPath from "@/components/ProfessionalPath/ProfessionalPath";

export default function Home() {
  return (
    <main className={styles.page}>
      <Presentation />
      <Expertises />
      <MyWork />
      <ProfessionnalPath />
    </main>
  );
}
