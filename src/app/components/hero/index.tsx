import Image from "next/image";
import bgImage from "@/src/assets/images/hero/hero-bg.svg";
import logo from "@/src/assets/images/hero/header-logo.svg";
import menuIcon from "@/src/assets/images/hero/header-menu.svg";
import retailIcon from "@/src/assets/images/hero/retail.svg";
import supplyChainIcon from "@/src/assets/images/hero/supply_chain.svg";
import distributionIcon from "@/src/assets/images/hero/distribution.svg";
import digitalTechIcon from "@/src/assets/images/hero/digital_and_technology.svg";

const navLinks = ["Operations", "Solutions", "Our Presence", "About Us", "Contact"];

const highlights = [
    { title: "Retail", index: "01", icon: retailIcon },
    { title: "Supply Chain", index: "02", icon: supplyChainIcon },
    { title: "Distribution", index: "03", icon: distributionIcon },
    { title: "Digital & Technology", index: "04", icon: digitalTechIcon },
];

function Hero() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
            <Image src={bgImage} alt="" fill priority className="object-cover" />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/90 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/90 to-transparent" />
            <div className="relative z-10 flex min-h-screen flex-col px-6 pb-10 pt-6 lg:px-12">
                <header className="flex items-center justify-between gap-6 mb-10">
                    <Image src={logo} alt="ABC Group" className="h-16 w-auto" />
                    <div className="flex items-center gap-18">
                        <nav className="hidden items-center gap-10 text-lg tracking-wide lg:flex">
                            {navLinks.map((link) => (
                                <span key={link} className="font-[var(--font-bl-melody)] text-white/90">
                                    {link}
                                </span>
                            ))}
                        </nav>
                        <button
                            type="button"
                            className="flex items-center gap-1 text-lg uppercase tracking-wide"
                        >
                            <span className="hidden lg:inline font-[var(--font-bl-melody)]">Menu</span>
                            <Image src={menuIcon} alt="Menu" width={24} height={24} className="h-12 w-12" priority />
                        </button>
                    </div>
                </header>

                <div className="mt-16 w-full xl:flex xl:items-start xl:justify-between xl:gap-10 mb-5">
                    <div>
                        <p className="text-[clamp(4.375rem,6vw,9.625rem)] font-[var(--font-manrope)] font-bold leading-none">
                            Building Legacies
                        </p>
                        <p className="mt-4 font-[var(--font-manrope)] leading-none text-white/90 text-[clamp(2.5rem,5vw,7.125rem)]">
                            Creating Growth
                        </p>
                    </div>
                    <div className="hidden xl:flex flex-1 flex-col items-end justify-start mt-6 xl:mt-2">
                        <span className="font-[var(--font-manrope)] text-[20px] font-semibold leading-[100%] tracking-[0.04em] capitalize text-light-e5">
                            1998
                        </span>
                    </div>
                </div>

                <div className="mt-8 flex items-start justify-between gap-6 mb-15">
                    <p className="max-w-xl text-[1rem] lg:text-[1.25rem] leading-8 text-white/80">
                        Rooted in trust and driven by vision, ABC Group builds lasting value across
                        diverse industries.
                    </p>
                    <span className="hidden xl:block text-right font-[var(--font-manrope)] text-[20px] font-semibold leading-[100%] tracking-[0.04em] capitalize text-light-e5">
                        Journey Started
                    </span>
                </div>

                <div className="hidden lg:grid mt-auto w-full pt-10 grid-cols-2 lg:grid-cols-4 gap-20">
                    {highlights.map((item) => (
                        <div key={item.index} className="flex flex-col gap-4 pt-4 justify-start">
                            <div className="flex items-center justify-between text-sm uppercase tracking-[0.3em] text-white/80 border-b border-white/30 pb-4">
                                <span className="font-[var(--font-manrope)] font-semibold">{item.title}</span>
                                <span className="text-white/50">{item.index}</span>
                            </div>
                            <Image src={item.icon} alt="" className="object-left" style={{ marginLeft: 0 }} />
                        </div>
                    ))}
                </div>

                <div className="flex flex-col items-start gap-3 lg:hidden">
                    <span className="font-[var(--font-manrope)] text-[14px] font-semibold tracking-[0.04em] capitalize text-light-e5">Journey Started</span>
                    <span className="w-px h-28 bg-white my-2 ml-2"></span>
                    <span className="font-[var(--font-manrope)] text-[14px] font-semibold tracking-[0.04em] capitalize text-light-e5">1998</span>
                </div>

            </div>
        </section >
    );
}

export default Hero;