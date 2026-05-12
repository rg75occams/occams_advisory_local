"use client";

import Link from "next/link";

const awards = [
    {
        logo: "./images/inc-5000.svg",
        title: "INC 5000",
        background: "linear-bg-primary",
        desc: "Fastest Growing US Companies – 2016 to 2021, 2023 and 2024",
    },
    {
        logo: "./images/fortune.svg",
        title: "FORTUNE AMERICA’S",
        background: "linear-bg-secondary",
        desc: "Most Innovative Companies Award list - 2023.",
    },
    {
        logo: "./images/financial-times.svg",
        title: "Financial Times",
        background: "linear-bg-primary",
        desc: "The America’s Fastest-Growing Companies - 2020 to 2023, 2025",
    },
    {
        logo: "./images/fortune.svg",
        title: "FORTUNE AMERICA’S",
        background: "linear-bg-secondary",
        desc: "Most Innovative Companies Award list - 2023.",
    },
];

const AwardsHonours = () => {
    const loopAwards = [...awards, ...awards, ...awards];

    return (
        <section className="py-12.5 bg-white sm:px-10 px-5">
            <div className="container mx-auto">
                <div className="justify-end lg:flex hidden">
                    <Link href="#" className="underline text-[#F36B21] text-xl font-medium">
                        View All
                    </Link>
                </div>

                <div className="grid grid-cols-12 items-center lg:gap-10 gap-6 lg:mt-10 mt-0">
                    <div className="lg:col-span-3 col-span-12 mx-auto">
                        <img src="./images/awards-honours.svg" alt="Awards & Honours" className="lg:flex hidden" />
                        <img src="./images/awards-honours-md.svg" alt="Awards & Honours" className="lg:hidden flex" />
                    </div>

                    <div className="lg:col-span-9 col-span-12 relative overflow-hidden lg:mt-0 mt-10">
                        <div className="absolute left-0 top-0 z-30 h-full bg-linear-to-r from-white to-transparent" />

                        <div className="absolute right-0 top-0 z-20 hidden w-82 h-82 sm:block">
                            <div className="absolute z-20 left-0 top-10 h-[80%] w-full rounded-[26px] linear-bg-primary" />
                            <div className="absolute z-40 -left-5 top-7.5 h-[85%] w-full rounded-[26px] linear-bg-secondary" />
                            <div className="absolute z-40 -left-10 top-5 h-[90%] w-full rounded-[26px] linear-bg-primary" />
                            <div className="absolute z-40 -left-15 top-2.5 h-[95%] w-full rounded-[26px] linear-bg-secondary" />
                            <div className="absolute z-40 -left-20 top-0 h-full w-full rounded-[26px] linear-bg-primary" />
                        </div>

                        <div className="relative z-30 sm:mr-26 overflow-hidden marquee-mask">
                            <div className="marquee flex gap-7 w-max items-center">
                                {loopAwards?.map((item, index) => (
                                    <div key={index} className={`w-82 h-82 shrink-0 rounded-[26px] px-10 py-15
                                        ${item.background}`}
                                    >
                                        <img src={item.logo} alt={item.title} className="h-12.5 w-max" />

                                        <h3 className="lg:text-xl text-lg font-semibold text-[#242424] mt-3">
                                            {item.title}
                                        </h3>

                                        <div className="my-5 h-px w-full bg-[#00000040]" />

                                        <p className="lg:text-base text-sm text-[#555555] font-light">
                                            {item.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10 justify-center lg:hidden flex">
                    <Link href="#" className="underline text-[#F36B21] text-xl font-medium">
                        View All
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default AwardsHonours