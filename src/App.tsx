import "./App.css";
import { Suspense, useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Banner";
import Footer from "./Footer";
import TechCard from "./TechCard";
import StackPanel from "./StackPanel";

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

function App() {
    const [stack, setStack] = useState<TechnologyStacksType[]>([]);

    const TechnologyPromiseData = async (): Promise<
        TechnologyStacksType[]
    > => {
        const res = await fetch("/technologydata.json");
        const data = await res.json();
        return data;
    };

    const handleAddStack = (technology: TechnologyStacksType) => {
        setStack([...stack, technology]);
    };

    const handleRemove = (id: string) => {
        setStack(stack.filter((tech) => tech.id !== id));
    };

    const handleRemoveAll = () => {
        setStack([]);
    };

    return (
        <div className="bg-white min-h-screen">
        <Navbar></Navbar>
        <Hero></Hero>
        <section className="px-5 py-10">
        <div className="max-w-[1200px] mx-auto">
        <h1 className="text-[28px] md:text-[32px] font-bold text-[#0F172A]">
        Explore the{" "}
        <span className="text-[#D91B7E]">Technologies</span>
        </h1>
        <p className="text-[#64748B] text-sm mt-2 mb-6">Pick one technology per category to build your ideal stack.</p>
        <Suspense fallback={<p>Loading...</p>}>
        <div className="flex items-start gap-6">
          <div className="flex-1 min-w-0">
          <TechCard TechnologyPromiseData={TechnologyPromiseData()} stack={stack} handleAddStack={handleAddStack}/>
          </div>
        <div className="hidden lg:flex lg:flex-col w-[260px] shrink-0 sticky top-20">
        <StackPanel stack={stack} onRemove={handleRemove} onRemoveAll={handleRemoveAll}/>
        </div>
        </div>
        </Suspense>
        </div>
        </section>
        <Footer/>
        </div>
    );
}

export default App;