import logoText from "../assets/logo-text.png";

const footerGroups = [
    {
        title: "Product",
        links: [
            { label: "Home", href: "#home" },
            { label: "Technologies", href: "#technologies" },
            { label: "Projects", href: "#projects" },
        ],
    },
    {
        title: "Company",
        links: [
            { label: "About", href: "#about" },
            { label: "Contact", href: "#contact" },
            { label: "Careers", href: "#careers" },
        ],
    },
    {
        title: "Legal",
        links: [
            { label: "Privacy Policy", href: "#privacy" },
            { label: "Terms of Service", href: "#terms" },
        ],
    },
];

export default function Footer() {
    return (
        <footer className="mt-20 border-t border-slate-100 bg-white">
            <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                    <div className="max-w-xs">
                        <img
                            src={logoText}
                            alt="Dev Stack"
                            className="h-8 w-auto"
                        />

                        <p className="mt-5 text-sm leading-6 text-slate-500">
                            Curated tools, technologies, and resources for
                            developers building modern software.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-5 text-sm font-semibold text-slate-600">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noreferrer"
                                className="transition-colors hover:text-slate-950"
                            >
                                GitHub
                            </a>

                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noreferrer"
                                className="transition-colors hover:text-slate-950"
                            >
                                Twitter
                            </a>

                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noreferrer"
                                className="transition-colors hover:text-slate-950"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    {footerGroups.map((group) => (
                        <div key={group.title}>
                            <h2 className="text-sm font-bold text-slate-900">
                                {group.title}
                            </h2>

                            <ul className="mt-5 space-y-3">
                                {group.links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="text-sm text-slate-500 transition-colors hover:text-slate-950"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-14 flex flex-col gap-4 border-t border-slate-100 pt-7 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        © {new Date().getFullYear()} Dev Stack. All rights
                        reserved.
                    </p>

                    <div className="flex gap-6">
                        <a
                            href="#privacy"
                            className="transition-colors hover:text-slate-700"
                        >
                            Privacy
                        </a>

                        <a
                            href="#terms"
                            className="transition-colors hover:text-slate-700"
                        >
                            Terms
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
