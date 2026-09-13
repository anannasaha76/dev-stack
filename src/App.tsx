import "./App.css";
import { Suspense, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

    const TechnologyPromiseData = async (): Promise<TechnologyStacksType[]> => {
        const res = await fetch("/technologydata.json");
        const data = await res.json();
        return data;
    };

    const handleAddStack = (technology: TechnologyStacksType) => {
        const alreadyAdded = stack.some((tech) => tech.id === technology.id);
        if (alreadyAdded) {
            toast.warn(`${technology.name} is already in your stack!`, {
                position: "bottom-right",
                autoClose: 2500,
            });
            return;
        }
        setStack([...stack, technology]);
        toast.success(`${technology.name} added to your stack!`, {
            position: "bottom-right",
            autoClose: 2000,
        });
    };

    const handleRemove = (id: string) => {
        const tech = stack.find((t) => t.id === id);
        setStack(stack.filter((t) => t.id !== id));
        if (tech) {
            toast.info(`${tech.name} removed from your stack.`, {
                position: "bottom-right",
                autoClose: 2000,
            });
        }
    };

    const handleRemoveAll = () => {
        setStack([]);
        toast.error("All technologies removed from your stack.", {
            position: "bottom-right",
            autoClose: 2500,
        });
    };

    return (
        <div className="bg-white min-h-screen">
            <ToastContainer />
            <Navbar />
            <Hero />
            <section className="py-10">
                <div className="max-w-[1200px] mx-auto px-8">
                    <h1 className="text-[28px] md:text-[32px] font-bold text-[#0F172A]">
                        Explore the{" "}
                        <span className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">Technologies</span>
                    </h1>
                    <p className="text-[#64748B] text-sm mt-2 mb-6">
                        Pick one technology per category to build your ideal stack.
                    </p>
                    <Suspense fallback={<p>Loading...</p>}>
                        <div className="flex flex-col lg:flex-row items-start gap-6">
                            <div className="flex-1 min-w-0">
                                <TechCard
                                    TechnologyPromiseData={TechnologyPromiseData()}
                                    stack={stack}
                                    handleAddStack={handleAddStack}
                                />
                            </div>
                            <div className="w-full lg:w-[260px] shrink-0 lg:sticky lg:top-20">
                                <StackPanel
                                    stack={stack}
                                    onRemove={handleRemove}
                                    onRemoveAll={handleRemoveAll}
                                />
                            </div>
                        </div>
                    </Suspense>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default App;