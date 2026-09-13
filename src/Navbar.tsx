import Logo from "./assets/logo-text.png";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-white border-b sticky top-0 z-50">

            <div className="hidden md:grid grid-cols-3 items-center max-w-[1200px] mx-auto px-8 h-16">

                <div className="flex items-center">
                    <img src={Logo} alt="Logo" />
                </div>
                <ul className="flex gap-8 items-center justify-center">
                    <li><a href="#home" className="text-[#DB2777] text-sm font-medium">Home</a></li>
                    <li><a href="#technologies" className="text-[#475569] text-sm font-medium transition-colors">Technologies</a></li>
                    <li><a href="#projects" className="text-[#475569] text-sm font-medium transition-colors">Projects</a></li>
                    <li><a href="#about" className="text-[#475569] text-sm font-medium transition-colors">About</a></li>
                    <li><a href="#contact" className="text-[#475569] text-sm font-medium transition-colors">Contact</a></li>
                </ul>
                <div className="flex gap-3 items-center justify-end">
                    <button className="text-[#334155] text-sm font-medium transition-colors">Sign In</button>
                    <button className="bg-[#D91B7E] text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">Sign Up</button>
                </div>
            </div>
            <div className="md:hidden flex items-center justify-between px-5 h-16">
                <button
                    className="text-2xl text-[#334155]"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <FiX /> : <FiMenu />}
                </button>
                <img src={Logo} alt="Logo" />
                <div className="flex gap-2 items-center">
                    <button className="text-[#334155] text-sm">Sign In</button>
                    <button className="bg-[#D91B7E] text-white px-4 py-1.5 rounded-full text-sm">Sign Up</button>
                </div>
            </div>
            {open && (
                <ul className="md:hidden px-5 pb-4 space-y-3 border-t">
                    <li><a href="#home" className="block pt-3 text-[#DB2777] font-medium">Home</a></li>
                    <li><a href="#technologies" className="block text-[#475569] font-medium">Technologies</a></li>
                    <li><a href="#projects" className="block text-[#475569] font-medium">Projects</a></li>
                    <li><a href="#about" className="block text-[#475569] font-medium">About</a></li>
                    <li><a href="#contact" className="block text-[#475569] font-medium">Contact</a></li>
                </ul>
            )}

        </nav>
    );
}