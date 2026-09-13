import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import type { Technology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

export default function TechnologiesSection() {
    const [technologies, setTechnologies] = useState<Technology[]>([]);
    const [selectedTechnologies, setSelectedTechnologies] = useState<
        Technology[]
    >([]);
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

    function handleAddTechnology(technology: Technology) {
        const alreadySelected = selectedTechnologies.some(
            (item) => item.id === technology.id,
        );

        if (alreadySelected) {
            toast.error(`${technology.name} is already in your stack.`);
            return;
        }

        setSelectedTechnologies((currentStack) => [
            ...currentStack,
            technology,
        ]);

        toast.success(`${technology.name} added to your stack.`);
    }

    function handleRemoveTechnology(id: string) {
        const removedTechnology = selectedTechnologies.find(
            (technology) => technology.id === id,
        );

        if (!removedTechnology) {
            return;
        }

        setSelectedTechnologies((currentStack) =>
            currentStack.filter((technology) => technology.id !== id),
        );

        toast.info(`${removedTechnology.name} removed from your stack.`);
    }

    function handleRemoveAll() {
        if (selectedTechnologies.length === 0) {
            return;
        }

        setSelectedTechnologies([]);
        toast.info("All technologies removed from your stack.");
    }

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
                    <div
                        role="status"
                        className="flex min-h-80 flex-col items-center justify-center gap-4"
                    >
                        <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-100 border-t-cyan-500" />

                        <p className="text-sm font-medium text-slate-500">
                            Loading technologies...
                        </p>
                    </div>
                )}

                {error && (
                    <div className="py-16 text-center text-rose-500">
                        {error}
                    </div>
                )}

                {!isLoading && !error && (
                    <div className="mt-10 grid gap-6 lg:grid-cols-4">
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
                            {technologies.map((technology) => (
                                <TechnologyCard
                                    key={technology.id}
                                    technology={technology}
                                    isAdded={selectedTechnologies.some(
                                        (item) => item.id === technology.id,
                                    )}
                                    onAdd={handleAddTechnology}
                                />
                            ))}
                        </div>

                        <div className="lg:sticky lg:top-24 lg:col-span-1 lg:self-start">
                            <YourStack
                                selectedTechnologies={selectedTechnologies}
                                onRemove={handleRemoveTechnology}
                                onRemoveAll={handleRemoveAll}
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
