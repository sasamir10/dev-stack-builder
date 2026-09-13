import { useEffect, useState } from "react";
import type { Technology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";

export default function TechnologiesSection() {
    const [technologies, setTechnologies] = useState<Technology[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function loadTechnologies() {
            try {
                const response = await fetch("/technologies.json");

                if (!response.ok) {
                    throw new Error("Could not load technology data.");
                }

                const data: Technology[] = await response.json();
                setTechnologies(data);
            } catch {
                setError(
                    "Unable to load technologies. Please refresh the page.",
                );
            } finally {
                setIsLoading(false);
            }
        }

        loadTechnologies();
    }, []);

    return (
        <section id="technologies" className="bg-white py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
                <div>
                    <h2 className="text-3xl font-extrabold text-slate-950 sm:text-4xl">
                        Explore the{" "}
                        <span
                            className="bg-clip-text text-transparent"
                            style={{ backgroundImage: "var(--brand-gradient)" }}
                        >
                            Technologies
                        </span>
                    </h2>

                    <p className="mt-2 text-sm text-slate-500 sm:text-base">
                        Pick one technology per category to build your ideal
                        stack.
                    </p>
                </div>

                {isLoading && (
                    <div className="py-16 text-center text-slate-500">
                        Loading technologies...
                    </div>
                )}

                {error && (
                    <div className="py-16 text-center text-rose-500">
                        {error}
                    </div>
                )}

                {!isLoading && !error && (
                    <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {technologies.map((technology) => (
                            <TechnologyCard
                                key={technology.id}
                                technology={technology}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
