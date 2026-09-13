interface TechnologyStacksType {
    id: string;
    name: string;
    category: string;
    description: string;
    icon: string;
    rating: number;
    difficulty: string;
    badge: string;
}

interface StackPanelProps {
    stack: TechnologyStacksType[];
    onRemove: (id: string) => void;
    onRemoveAll: () => void;
}

export default function StackPanel({
    stack,
    onRemove,
    onRemoveAll
}: StackPanelProps) {

    return (

        <div className="w-full bg-white border border-[#E2E8F0] rounded-2xl p-4">

            <h2 className="text-lg font-bold text-[#0F172A]">
                Your Stack
            </h2>

            <p className="text-[11px] text-[#94A3B8] mt-1">
                {stack.length} Technology Selected
            </p>

            {stack.length === 0 ? (

                <div className="mt-5 text-center border border-dashed border-[#CBD5E1] p-4 rounded-xl">

                    <p className="text-[11px] text-[#94A3B8] leading-5">
                        No technologies added yet.
                        <br />
                        Start building your stack!
                    </p>

                </div>

            ) : (

                <div className="mt-4">

                    {stack.map((tech) => (

                        <div
                            key={tech.id}
                            className="flex items-center gap-2 border border-[#E2E8F0] p-2 rounded-xl mb-2"
                        >

                            <img
                                src={tech.icon}
                                alt={tech.name}
                                className="w-7 h-7 object-contain"
                            />

                            <div className="flex-1 min-w-0">

                                <p className="font-semibold text-[11px] text-[#0F172A] truncate">
                                    {tech.name}
                                </p>

                                <p className="text-[9px] text-[#94A3B8] truncate">
                                    {tech.category}
                                </p>

                            </div>

                            <button
                                onClick={() => onRemove(tech.id)}
                                className="text-[#94A3B8] hover:text-red-500 text-sm"
                            >
                                ✕
                            </button>

                        </div>

                    ))}

                </div>

            )}

            {stack.length > 0 && (

                <button
                    onClick={onRemoveAll}
                    className="w-full border border-red-200 text-red-500 py-2 rounded-lg text-[11px] hover:bg-red-50"
                >
                    Remove All
                </button>

            )}

        </div>
    );
}