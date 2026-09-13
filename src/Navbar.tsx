import Logo from "./assets/logo-text.png"
import { useState } from "react";
import {FiMenu,FiX} from "react-icons/fi";
export default function Navbar()
{
    const [open,setOpen] = useState(false);
    return(
        <nav className="bg-white border-b sticky top-0 z-50">
            <div className="hidden md:flex container mx-auto px-5 h-16  justify-between items-center">
                    <img src={Logo} alt="Logo"className="ml-16"></img>
            
            <ul className="hidden md:flex gap-8 items-center">
             <li><a href="#home" className="text-[#DB2777]">Home</a></li>
             <li><a href="#technologies"className="text-[#475569]">Technologies</a></li>
             <li><a href="#projects"className="text-[#475569]">Projects</a></li>
             <li><a href="#about"className="text-[#475569]">About</a></li>
             <li><a href="#contact"className="text-[#475569]">Contact</a></li>
            </ul>
            <div className="flex gap-3 items-center mr-16">
                <button className="hidden sm:block text-[#334155]">Sign In</button>
                <button className="bg-[#D91B7E] text-[#FFFFFF] px-4 py-2 rounded-full">Sign Up</button>
            </div>
            </div>
            <div className="md:hidden flex items-center justify-between px-5 h-16">
                <button
                    className="text-2xl text-[#334155]"
                    onClick={()=>setOpen(!open)}>{open?<FiX/>:<FiMenu/>}
                </button>
                <img src={Logo} alt="Logo"></img>
                <div className="flex gap-2 items-center">
                <button className="text-[#334155]">Sign In</button>
                <button className="bg-[#D91B7E] text-[#FFFFFF] px-4 py-2 rounded-full">Sign Up</button>
            </div>
            </div>
            {open &&(<ul className="md:hidden px-5 pb-4 space-y-3">
             <li><a href="#home" className="text-[#DB2777]">Home</a></li>
             <li><a href="#technologies"className="text-[#475569]">Technologies</a></li>
             <li><a href="#projects"className="text-[#475569]">Projects</a></li>
             <li><a href="#about"className="text-[#475569]">About</a></li>
             <li><a href="#contact"className="text-[#475569]">Contact</a></li>
            </ul>)}
            
        </nav>
    )
}