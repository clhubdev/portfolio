'use client'

import Link from "next/link";
import './header.scss';
import AnimatedTitle from "../AnimatedTitle/AnimatedTitle";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    const navLinks = [
        { href: "/", label: "Accueil" },
        // { href: "/apropos", label: "À propos" },
        { href: "/#myWork", label: "Projets" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <header>
            <div className="headerContainer">
                <AnimatedTitle />
                <nav>
                    <ul>
                        {navLinks.map(({ href, label }) => (
                            <li key={href}>
                                <Link
                                    href={href}
                                    className={pathname === href ? "active" : ""}
                                    aria-current={pathname === href ? "page" : undefined}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}