import { use } from "react";
import { FaStar } from "react-icons/fa6";

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

interface TechnologyCardPropType {
    TechnologyPromiseData: Promise<TechnologyStacksType[]>;
    stack: TechnologyStacksType[];
    handleAddStack: (technology: TechnologyStacksType) => void;
}

export default function TechCard({TechnologyPromiseData,stack,handleAddStack}: TechnologyCardPropType) {

    const technologies = use(TechnologyPromiseData);

    return (

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

            {technologies.map((technology) => {

                const isSelected = stack.some(
                    (tech) => tech.id === technology.id
                );

                return (

                    <div key={technology.id} className="w-full h-[285px] flex flex-col border border-[#E2E8F0] p-4 rounded-2xl bg-white">
                    <div className="flex justify-between items-start">
                    <img className="w-9 h-9 object-contain" src={technology.icon} alt={technology.name}/>
                    <span className="text-[11px] px-2.5 py-1.5 rounded-lg bg-[#F1F5F9] text-[#475569]">
                                {technology.badge}
                            </span>

                        </div>

                        
                        <h2 className="text-[#0F172A] text-[18px] font-bold mt-3">
                            {technology.name}
                        </h2>
                        <p className="h-[60px] overflow-hidden text-[#64748B] text-[12px] leading-5 mt-1">
                            {technology.description}
                        </p>

                        <div className="flex items-center gap-1 mt-2">

                            <span className="bg-[#F1F5F9] text-[#475569] text-[11px] rounded-lg px-2 py-1.5">
                                {technology.category}
                            </span>

                            <span className="text-[#475569] text-[11px] rounded-lg px-2 py-1.5">
                                {technology.difficulty}
                            </span>

                            <span className="flex items-center gap-1 text-[#334155] text-[11px] rounded-lg px-2 py-1.5 font-bold">
                                <FaStar className="text-yellow-400" />
                                {technology.rating}
                            </span>

                        </div>
                        <button
                            onClick={() => handleAddStack(technology)}
                            disabled={isSelected}
                            className={`w-full rounded-lg px-4 py-2.5 mt-3 text-[13px] ${
                                isSelected
                                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                    : "bg-[#0A0F1D] text-white hover:bg-slate-800"
                            }`}
                        >
                            {isSelected? "Added to Stack": "Add To Stack"}
                        </button>

                    </div>

                      );
                  })}

                </div>
    );
}