import Logo from "./assets/logo-text.png"
export default function Footer()
{
    return(
        <footer className="border-t mt-20 bg-white">
          <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 grid gap-10 md:grid-cols-[1.8fr_1fr_1fr_1fr]">
           <div>
                    <img src={Logo} alt="Logo"className="ml-16"></img>
                    <p className="text-sm text-[#64748B] mt-3 max-w-xs">
                        Curated tools, technologies, and resources for developers
                        building modern software.
                    </p>

                    <div className="flex gap-4 mt-4">
                        <a href="#github" className="text-[#475569]">
                            GitHub
                        </a>

                        <a href="#twitter" className="text-[#475569]">
                            Twitter
                        </a>

                        <a href="#linkedin" className="text-[#475569]">
                            LinkedIn
                        </a>
                    </div>
                </div>
                <div>
                    <h3 className="font-bold text-[#0F172A]">PRODUCT</h3>

                    <ul className="mt-3 space-y-2">
                        <li><a href="#home" className="text-[#64748B]">Home</a></li>
                        <li><a href="#technologies" className="text-[#64748B]">Technologies</a></li>
                        <li><a href="#projects" className="text-[#64748B]">Projects</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-[#0F172A]">COMPANY</h3>
                    <ul className="mt-3 space-y-2">
                        <li><a href="#about" className="text-[#64748B]">About</a></li>
                        <li><a href="#contact" className="text-[#64748B]">Contact</a></li>
                        <li><a href="#careers" className="text-[#64748B]">Careers</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-[#0F172A]">LEGAL</h3>
                    <ul className="mt-3 space-y-2">
                        <li><a href="#privacy" className="text-[#64748B]">Privacy Policy</a></li>
                        <li><a href="#terms" className="text-[#64748B]">Terms of Service</a></li>
                    </ul>
                </div>
                </div>

                <div className="border-t px-5 py-5 flex flex-col md:flex-row justify-between gap-3 text-sm text-[#94A3B8]">
                <p>© 2026 Dev Stack. All rights reserved.</p>

                <div className="flex gap-5">
                    <a href="#privacy" className="text-[#94A3B8]">Privacy</a>
                    <a href="#terms"className="text-[#94A3B8]">Terms</a>
                </div>
            </div>
        </footer>
    )
}