'use client';
import { IoLogoJavascript } from "react-icons/io5";
import { SiPhp } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaSymfony } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";



import './infiniteScroller.scss';

export default function InfiniteScroller() {

    return (
        <div className="wrapper">
            <div className="item item1"><IoLogoJavascript /></div>
            <div className="item item2"><SiPhp /></div>
            <div className="item item3"><FaHtml5 /></div>
            <div className="item item4"><FaCss3Alt /></div>
            <div className="item item5"><SiMysql /></div>
            <div className="item item6"><FaReact /></div>
            <div className="item item7"><RiNextjsFill /></div>
            <div className="item item8"><FaSymfony /></div>
            <div className="item item9"><FaDocker /></div>
            <div className="item item10"><FaGithub /></div>
        </div>
    );
}