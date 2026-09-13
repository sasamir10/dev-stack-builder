import { Star } from "lucide-react";
import type { Technology } from "../types/technology";

interface TechnologyCardProps {
    technology: Technology;
    isAdded?: boolean;
    onAdd?: (technology: Technology) => void;
}

export default function TechnologyCard({
    technology,
    isAdded = false,
    onAdd,
}: TechnologyCardProps) {
    return (
        <article className="flex min-h-72 flex-col rounded-lg border border-slate-100 bg-white p-5 shadow-[0_3px_12px_rgba(15,23,42,0.04)]">
            <div className="flex items-start justify-between gap-4">
                <img
                    src={technology.icon}
                    alt={`${technology.name} logo`}
                    className="h-9 w-9 object-contain"
                />

                <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-600">
                    {technology.badge}
                </span>
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-900">
                {technology.name}
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
                {technology.description}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
                <span className="rounded bg-slate-100 px-2.5 py-1 font-medium text-slate-500">
                    {technology.category}
                </span>

                <span className="font-medium text-slate-500">
                    {technology.difficulty}
                </span>

                <span className="ml-auto inline-flex items-center gap-1 font-semibold text-slate-600">
                    <Star size={14} className="fill-amber-400 text-amber-400" />
                    {technology.rating}
                </span>
            </div>

            <button
                type="button"
                disabled={isAdded}
                onClick={() => onAdd?.(technology)}
                className={`mt-5 w-full rounded-lg py-3 text-sm font-semibold transition-colors ${
                    isAdded
                        ? "cursor-not-allowed bg-slate-100 text-slate-400"
                        : "bg-slate-950 text-white hover:bg-slate-800"
                }`}
            >
                {isAdded ? "Added to Stack" : "Add to Stack"}
            </button>
        </article>
    );
}
