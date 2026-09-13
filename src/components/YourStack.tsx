import { X } from "lucide-react";
import type { Technology } from "../types/technology";

interface YourStackProps {
    selectedTechnologies: Technology[];
    onRemove: (id: string) => void;
    onRemoveAll: () => void;
}

export default function YourStack({
    selectedTechnologies,
    onRemove,
    onRemoveAll,
}: YourStackProps) {
    const selectedCount = selectedTechnologies.length;

    return (
        <aside className="rounded-lg border border-slate-100 bg-white p-5 shadow-[0_3px_12px_rgba(15,23,42,0.04)]">
            <h2 className="text-lg font-bold text-slate-900">Your Stack</h2>

            <p className="mt-1 text-sm text-slate-400">
                {selectedCount}{" "}
                {selectedCount === 1
                    ? "Technology Selected"
                    : "Technologies Selected"}
            </p>

            {selectedCount === 0 ? (
                <div className="flex min-h-48 items-center justify-center text-center text-sm leading-6 text-slate-400">
                    Your selected technologies will appear here.
                </div>
            ) : (
                <>
                    <div className="mt-5 space-y-3">
                        {selectedTechnologies.map((technology) => (
                            <div
                                key={technology.id}
                                className="flex items-center gap-3 rounded-lg border border-slate-100 p-3"
                            >
                                <img
                                    src={technology.icon}
                                    alt=""
                                    className="h-8 w-8 object-contain"
                                />

                                <div className="min-w-0 flex-1">
                                    <p className="truncate text-sm font-semibold text-slate-800">
                                        {technology.name}
                                    </p>
                                    <p className="text-xs text-slate-400">
                                        {technology.category}
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => onRemove(technology.id)}
                                    aria-label={`Remove ${technology.name}`}
                                    className="grid h-8 w-8 place-items-center rounded-md text-slate-400 transition-colors hover:bg-rose-50 hover:text-rose-500"
                                >
                                    <X size={18} />
                                </button>
                            </div>
                        ))}
                    </div>

                    <button
                        type="button"
                        onClick={onRemoveAll}
                        className="mt-6 w-full rounded-lg border border-rose-200 py-2.5 text-sm font-semibold text-rose-500 transition-colors hover:bg-rose-50"
                    >
                        Remove All
                    </button>
                </>
            )}
        </aside>
    );
}
