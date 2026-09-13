import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoText from "../assets/logo-text.png";

const navLinks = ["Home", "Technologies", "Projects", "About", "Contact"];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function closeMobileMenu() {
        setIsMenuOpen(false);
    }

    return (
        <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
            <div className="mx-auto flex h-17 max-w-7xl items-center justify-between px-5 lg:px-8">
                <a href="#home" className="hidden md:block">
                    <img
                        src={logoText}
                        alt="Dev Stack"
                        className="h-8 w-auto"
                    />
                </a>

                <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className={`text-sm font-semibold transition-colors ${
                                link === "Home"
                                    ? "text-pink-500"
                                    : "text-slate-500 hover:text-slate-950"
                            }`}
                        >
                            {link}
                        </a>
                    ))}
                </nav>

                <div className="hidden items-center gap-5 md:flex">
                    <button className="text-sm font-semibold text-slate-600 transition-colors hover:text-slate-950">
                        Sign In
                    </button>

                    <button
                        style={{ backgroundImage: "var(--brand-gradient)" }}
                        className="rounded-lg px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.02]"
                    >
                        Sign Up
                    </button>
                </div>

                <div className="grid w-full grid-cols-[auto_1fr_auto] items-center gap-3 md:hidden">
                    <button
                        type="button"
                        aria-label={
                            isMenuOpen
                                ? "Close navigation menu"
                                : "Open navigation menu"
                        }
                        aria-expanded={isMenuOpen}
                        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
                        className="grid h-10 w-10 place-items-center rounded-lg text-slate-800 transition-colors hover:bg-slate-100"
                    >
                        {isMenuOpen ? (
                            <X size={24} />
                        ) : (
                            <Menu size={24} strokeWidth={2.2} />
                        )}
                    </button>

                    <a
                        href="#home"
                        onClick={closeMobileMenu}
                        className="justify-self-center overflow-hidden"
                    >
                        <img
                            src={logoText}
                            alt="Dev Stack"
                            className="h-7 w-auto max-w-full"
                        />
                    </a>

                    <div className="flex items-center gap-2">
                        <button className="text-xs font-semibold text-slate-600">
                            Sign In
                        </button>

                        <button
                            style={{ backgroundImage: "var(--brand-gradient)" }}
                            className="rounded-lg px-3 py-2 text-xs font-semibold text-white"
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <nav className="border-t border-slate-100 bg-white px-5 py-4 md:hidden">
                    <div className="mx-auto flex max-w-7xl flex-col">
                        {navLinks.map((link) => (
                            <a
                                key={link}
                                href={`#${link.toLowerCase()}`}
                                onClick={closeMobileMenu}
                                className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-950"
                            >
                                {link}
                            </a>
                        ))}
                    </div>
                </nav>
            )}
        </header>
    );
}
