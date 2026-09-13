import BannerImg from "./assets/banner-stack.png"
export default function Banner(){
    return(
        <div className="flex flex-col md:flex-row justify-around items-center w-full mx-auto px-5 py-16 bg-white">
            <div className="flex flex-col justify-center">
                <h1 className="text-4xl md:text-[60px] font-bold leading-none text-[#0F172A] pb-3">
                    Build Your Ideal
                    <br/>
                    <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
                        Devolopment Stack
                    </span>
                </h1>
                <p className="text-[#475569] pb-3">
                    Explore frontend, backend, and tooling options,
                    <br/>
                    compare them side by side, and put together the stack that fits Your
                    <br/>
                    next project.
                </p>
                <div className="flex items-center gap-2">
                    <button className="bg-linear-to-r from-orange-500 via-rose-500 to-pink-500 text-white font-semibold px-6 py-3 rounded-2xl shadow-md hover:opacity-95 transition">
                        Explore Technologies
                    </button>
                 <button className="text-[#374151] font-semibold px-6 py-3 rounded-2xl shadow-md hover:opacity-95 transition border border-[#E5E7EB]">
                        Learn More
                    </button>
                </div>
                </div>
                <div className="flex justify-center items-center mt-10 md:mt-0">
                <img
                    className="w-72 h-72 md:w-96 md:h-96"
                    src={BannerImg}
                    alt="Development stack"
                />
            </div>
            

        </div>
    )

}