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
                    <span
    className={`text-[11.5px] p-1 rounded-lg ${
        technology.id === 'react' ? 'text-[#0EA5E9] bg-[#E0F2FE]'
        : technology.id === 'nextjs' ? 'text-[#3178C6] bg-[#EBF3FC]'
        : technology.id === 'nodejs' ? 'text-[#339933] bg-[#EAF5EA]'
        : technology.id === 'express' ? 'text-[#646CFF] bg-[#EEF0FF]'
        : technology.id === 'postgresql' ? 'text-[#4169E1] bg-[#EBF0FF]'
        : technology.id === 'mongodb' ? 'text-[#16A34A] bg-[#EAF7EE]'
        : technology.id === 'javascript' ? 'text-[#A16207] bg-[#FEF9C3]'
        : technology.id === 'typescript' ? 'text-[#3178C6] bg-[#EBF3FC]'
        : technology.id === 'python' ? 'text-[#3776AB] bg-[#EAF2F8]'
        : technology.id === 'tailwindcss' ? 'text-[#06B6D4] bg-[#E0F7FA]'
        : technology.id === 'docker' ? 'text-[#2496ED] bg-[#E8F4FE]'
        : technology.id === 'git' ? 'text-[#F05032] bg-[#FDECE8]'
        : technology.id === 'github' ? 'text-[#A16207] bg-[#FEF9C3]'
        : technology.id === 'vite' ? 'text-[#646CFF] bg-[#EEF0FF]'
        : technology.id === 'firebase' ? 'text-[#F57C00] bg-[#FFF3E0]'
        : 'text-gray-500 bg-gray-100'
    }`}
>
    {technology.badge}
</span>

</div>   
<h2 className="text-[#0F172A] text-[18px] font-bold mt-3">{technology.name}</h2>
<p className="h-[60px] overflow-hidden text-[#64748B] text-[12px] leading-5 mt-1">{technology.description}</p>
<div className="flex items-center gap-1 mt-2">
<span className="bg-[#F1F5F9] text-[#475569] text-[11px] rounded-lg px-2 py-1.5">{technology.category}</span>
<span className="text-[#64748B] text-[11px] rounded-lg px-2 py-1.5">{technology.difficulty}</span>
<span className="flex items-center gap-1 text-[#334155] text-[11px] rounded-lg px-2 py-1.5 font-bold">
<FaStar className="text-yellow-400" />{technology.rating}</span>
</div>
<button onClick={() => handleAddStack(technology)}
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