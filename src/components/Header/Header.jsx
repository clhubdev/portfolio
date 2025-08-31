import Link from "next/link";
import './header.scss';
import AnimatedTitle from "../AnimatedTitle/AnimatedTitle";

export default function Header() {

    const navLinks = [
        { href: "/", label: "Accueil" },
        { href: "/apropos", label: "À propos" },
        { href: "/projets", label: "Projets" },
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
                                // className={pathname === href ? "active" : ""}
                                // aria-current={pathname === href ? "page" : undefined}
                                // onClick={() => setMenuOpen(false)}
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