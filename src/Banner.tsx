import BannerImg from "./assets/banner-stack.png";

export default function Banner() {
    return (
        <div className="bg-white py-14 md:py-20">
            <div className="max-w-[1200px] mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">

                {/* Text Content — centered on mobile, left on desktop */}
                <div className="flex flex-col items-center text-center md:items-start md:text-left max-w-[480px] w-full">

                    <h1 className="text-[36px] md:text-[58px] font-extrabold leading-tight text-[#0F172A]">
                        Build Your Ideal
                        <br />
                        <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent whitespace-nowrap">
                            Development Stack
                        </span>
                    </h1>

                    <p className="text-[#475569] text-[15px] md:text-[17px] leading-relaxed mt-4 mb-7">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits your
                        next project.
                    </p>

                    <div className="flex items-center justify-center md:justify-start gap-3 flex-wrap">
                        <button className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] text-white font-semibold text-sm md:text-base px-7 py-2.5 md:py-3 rounded-full shadow-lg hover:opacity-90 transition-opacity">
                            Explore Technologies
                        </button>
                        <button className="text-[#374151] font-semibold text-sm md:text-base px-6 py-2.5 md:py-3 rounded-full border border-[#E5E7EB] hover:bg-gray-50 transition-colors">
                            Learn More
                        </button>
                    </div>

                </div>

                {/* Banner Image — below text on mobile, right on desktop */}
                <div className="flex justify-center items-center shrink-0 order-last md:order-none">
                    <img
                        className="w-72 h-72 md:w-[420px] md:h-[420px] object-contain"
                        src={BannerImg}
                        alt="Development Stack Illustration"
                    />
                </div>

            </div>
        </div>
    );
}