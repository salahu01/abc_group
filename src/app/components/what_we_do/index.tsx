import Image from "next/image";
import homeImprovements from "@/src/assets/images/what_we_do/home_improvements.svg";
import shippingLogistics from "@/src/assets/images/what_we_do/shipping_and_logistics.svg";
import retailLifestyle from "@/src/assets/images/what_we_do/retail_and_lifestyle.svg";
import everydayEssentials from "@/src/assets/images/what_we_do/every_day_essensials.svg";
import foodProcessing from "@/src/assets/images/what_we_do/food_processing.svg";
import wholesaleDistribution from "@/src/assets/images/what_we_do/wholesale_and_distribution.svg";
import homeFurniture from "@/src/assets/images/what_we_do/home_funrniture_and_fittings.svg";
import realEstate from "@/src/assets/images/what_we_do/real_estate.svg";

const tabs = ["Operations", "Solutions"];

const sectors = [
    { title: "Home Improvements", image: homeImprovements },
    { title: "Shipping & Logistics", image: shippingLogistics },
    { title: "Retail & Lifestyle", image: retailLifestyle },
    { title: "Everyday Essentials", image: everydayEssentials },
    { title: "Food Processing", image: foodProcessing },
    { title: "Wholesale & Distribution", image: wholesaleDistribution },
    { title: "Home Furniture & Fittings", image: homeFurniture },
    { title: "Real Estate", image: realEstate },
];

function WhatWeDo() {
    return (
        <section className="w-full bg-black px-6 pb-24 pt-28 text-white lg:px-12 lg:pb-36 lg:pt-36">
            <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-16">
                <div className="flex flex-col gap-12">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between gap-6">
                            <span className="text-lg font-semibold tracking-wide text-white/60 lg:text-2xl">
                                (01 What we do)
                            </span>
                            <button
                                type="button"
                                className="flex items-center gap-4 text-base uppercase tracking-[0.08em] text-white/70"
                            >
                                <span className="font-[var(--font-bl-melody)]">View More</span>
                                <span className="grid h-12 w-12 place-items-center rounded-full border border-white/50">
                                    <ArrowIcon className="h-4 w-4" />
                                </span>
                            </button>
                        </div>
                        <h2 className="text-[clamp(2.75rem,5vw,6rem)] font-bold leading-tight text-white/10">
                            Strength In Every Sector
                        </h2>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                        {tabs.map((tab, index) => {
                            const isActive = index === 0;
                            return (
                                <button
                                    key={tab}
                                    type="button"
                                    className={`rounded-full px-8 py-3 text-base font-semibold capitalize tracking-wide transition ${isActive
                                            ? "bg-white text-black"
                                            : "border border-white/25 text-white/60"
                                        }`}
                                >
                                    {tab}
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {sectors.map((sector) => (
                        <article
                            key={sector.title}
                            className="group relative h-[420px] overflow-hidden rounded-2xl sm:h-[520px] lg:h-[622px]"
                        >
                            <Image
                                src={sector.image}
                                alt=""
                                fill
                                priority={sector.title === "Home Improvements"}
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/10" />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-l from-black/95 via-black/70 to-transparent p-6">
                                <div className="flex items-center justify-between gap-4">
                                    <span className="text-lg font-normal capitalize tracking-wide text-white lg:text-2xl">
                                        {sector.title}
                                    </span>
                                    <span className="grid h-8 w-8 place-items-center rounded-full border border-white/70 text-white">
                                        <ArrowIcon className="h-3.5 w-3.5" />
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ArrowIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
            <path
                d="M7 17L17 7M10 7h7v7"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default WhatWeDo;
