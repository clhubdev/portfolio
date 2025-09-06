import './langageBento.scss';
import { FaReact, FaHtml5, FaCss3Alt, FaDocker, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiPhp, SiMysql } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaSymfony } from "react-icons/fa";

export default function LangageBento() {
  return (
    <section className="LangageBento">
      <h2>Langages</h2>
      <div className="parent">
        <div className="div1"><IoLogoJavascript className="icon icon--cover" preserveAspectRatio="xMidYMid meet" /></div>
        <div className="div2"><FaReact className="icon icon--cover" preserveAspectRatio="xMidYMid meet" /></div>
        <div className="div3"><FaHtml5 className="icon" preserveAspectRatio="xMidYMid meet" /></div>
        <div className="div4"><FaCss3Alt className="icon" preserveAspectRatio="xMidYMid meet" /></div>
        <div className="div5"><SiPhp className="icon" preserveAspectRatio="xMidYMid meet" /></div>
        <div className="div6"><SiMysql className="icon" preserveAspectRatio="xMidYMid meet" /></div>
        <div className="div7"><RiNextjsFill className="icon icon--cover" preserveAspectRatio="xMidYMid meet" /></div>
        <div className="div8"><FaSymfony className="icon" preserveAspectRatio="xMidYMid meet" /></div>
        <div className="div9"><FaDocker className="icon icon--cover" preserveAspectRatio="xMidYMid meet" /></div>
        <div className="div10"><FaGithub className="icon" preserveAspectRatio="xMidYMid meet" /></div>
      </div>
    </section>
  );
}
