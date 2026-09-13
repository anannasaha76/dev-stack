import Logo from "./assets/logo-text.png";

export default function Footer() {
    return (
        <footer className="border-t mt-20 bg-white">

            <div className="max-w-[1200px] mx-auto px-8 py-14">

                <div className="flex flex-col md:flex-row gap-10">
                    <div className="flex flex-col items-center text-center md:items-start md:text-left md:w-[340px] shrink-0">
                        <img src={Logo} alt="Logo" />
                        <p className="text-sm text-[#64748B] mt-3 max-w-[280px]">
                            Curated tools, technologies, and resources for developers building
                            modern software.
                        </p>
                        <div className="flex items-center gap-3 mt-4 text-sm justify-center md:justify-start">
                            <a href="#github" className="text-[#475569]">GitHub</a>
                            <a href="#twitter" className="text-[#475569]">Twitter</a>
                            <a href="#linkedin" className="text-[#475569]">LinkedIn</a>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 flex-1">
                        <div>
                            <h3 className="font-bold text-[#0F172A] text-sm tracking-wide">PRODUCT</h3>
                            <ul className="mt-3 space-y-2 text-sm">
                                <li><a href="#home" className="text-[#64748B]">Home</a></li>
                                <li><a href="#technologies" className="text-[#64748B]">Technologies</a></li>
                                <li><a href="#projects" className="text-[#64748B]">Projects</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-[#0F172A] text-sm tracking-wide">COMPANY</h3>
                            <ul className="mt-3 space-y-2 text-sm">
                                <li><a href="#about" className="text-[#64748B]">About</a></li>
                                <li><a href="#contact" className="text-[#64748B]">Contact</a></li>
                                <li><a href="#careers" className="text-[#64748B]">Careers</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-[#0F172A] text-sm tracking-wide">LEGAL</h3>
                            <ul className="mt-3 space-y-2 text-sm">
                                <li><a href="#privacy" className="text-[#64748B]">Privacy Policy</a></li>
                                <li><a href="#terms" className="text-[#64748B]">Terms of Service</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            <div className="border-t">
                <div className="max-w-[1200px] mx-auto px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-[#94A3B8]">
                    <p className="text-center md:text-left">© 2026 Dev Stack. All rights reserved.</p>
                    <div className="flex gap-5">
                        <a href="#privacy" className="text-[#94A3B8]">Privacy</a>
                        <a href="#terms" className="text-[#94A3B8]">Terms</a>
                    </div>
                </div>
            </div>

        </footer>
    );
}