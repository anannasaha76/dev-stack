import Logo from "./assets/logo-text.png";

export default function Footer() {
    return (
        <footer className="border-t mt-20 bg-white">

            <div className="max-w-[1200px] mx-auto px-8 py-14">

                {/* Top: Brand + Link columns */}
                <div className="flex flex-col md:flex-row gap-10">

                    {/* Brand — full width on mobile, fixed on desktop */}
                    <div className="flex flex-col items-center text-center md:items-start md:text-left md:w-[340px] shrink-0">
                        <img src={Logo} alt="Logo" />
                        <p className="text-sm text-[#64748B] mt-3 max-w-[280px]">
                            Curated tools, technologies, and resources for developers building
                            modern software.
                        </p>
                        <div className="flex items-center gap-3 mt-4 text-sm justify-center md:justify-start">
                            <a href="#github" className="text-[#475569] hover:text-[#0F172A]">GitHub</a>
                            <span className="text-[#CBD5E1]">•</span>
                            <a href="#twitter" className="text-[#475569] hover:text-[#0F172A]">Twitter</a>
                            <span className="text-[#CBD5E1]">•</span>
                            <a href="#linkedin" className="text-[#475569] hover:text-[#0F172A]">LinkedIn</a>
                        </div>
                    </div>

                    {/* Link columns — 2 col on mobile, 3 col on desktop */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 flex-1">

                        {/* Product */}
                        <div>
                            <h3 className="font-bold text-[#0F172A] text-sm tracking-wide">PRODUCT</h3>
                            <ul className="mt-3 space-y-2 text-sm">
                                <li><a href="#home" className="text-[#64748B] hover:text-[#0F172A]">Home</a></li>
                                <li><a href="#technologies" className="text-[#64748B] hover:text-[#0F172A]">Technologies</a></li>
                                <li><a href="#projects" className="text-[#64748B] hover:text-[#0F172A]">Projects</a></li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h3 className="font-bold text-[#0F172A] text-sm tracking-wide">COMPANY</h3>
                            <ul className="mt-3 space-y-2 text-sm">
                                <li><a href="#about" className="text-[#64748B] hover:text-[#0F172A]">About</a></li>
                                <li><a href="#contact" className="text-[#64748B] hover:text-[#0F172A]">Contact</a></li>
                                <li><a href="#careers" className="text-[#64748B] hover:text-[#0F172A]">Careers</a></li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div>
                            <h3 className="font-bold text-[#0F172A] text-sm tracking-wide">LEGAL</h3>
                            <ul className="mt-3 space-y-2 text-sm">
                                <li><a href="#privacy" className="text-[#64748B] hover:text-[#0F172A]">Privacy Policy</a></li>
                                <li><a href="#terms" className="text-[#64748B] hover:text-[#0F172A]">Terms of Service</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t">
                <div className="max-w-[1200px] mx-auto px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-[#94A3B8]">
                    <p className="text-center md:text-left">© 2026 Dev Stack. All rights reserved.</p>
                    <div className="flex gap-5">
                        <a href="#privacy" className="text-[#94A3B8] hover:text-[#475569]">Privacy</a>
                        <a href="#terms" className="text-[#94A3B8] hover:text-[#475569]">Terms</a>
                    </div>
                </div>
            </div>

        </footer>
    );
}