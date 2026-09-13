import bannerStack from "../assets/banner-stack.png";

export default function Hero() {
    return (
        <section id="home" className="bg-white">
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:px-8 lg:py-28">
                <div className="max-w-2xl">
                    <h1 className="text-4xl font-extrabold leading-[1.08] text-slate-950 sm:text-5xl lg:text-6xl">
                        Build Your Ideal
                        <span
                            className="block bg-clip-text text-transparent"
                            style={{ backgroundImage: "var(--brand-gradient)" }}
                        >
                            Development Stack
                        </span>
                    </h1>

                    <p className="mt-6 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
                        Explore frontend, backend, database, and tooling
                        options, compare them side by side, and put together the
                        stack that fits your next project.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <a
                            href="#technologies"
                            style={{ backgroundImage: "var(--brand-gradient)" }}
                            className="rounded-lg px-5 py-3 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.02]"
                        >
                            Explore Technologies
                        </a>

                        <a
                            href="#about"
                            className="rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-950"
                        >
                            Learn More
                        </a>
                    </div>
                </div>

                <div className="justify-self-center lg:justify-self-end">
                    <img
                        src={bannerStack}
                        alt="Illustration of a development technology stack"
                        className="w-full max-w-105 object-contain sm:max-w-117.5"
                    />
                </div>
            </div>
        </section>
    );
}
