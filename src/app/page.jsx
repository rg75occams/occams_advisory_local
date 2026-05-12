"use client";

import AwardsSection from "@/components/AwardsSection";
import Banner from "@/components/Banner";
import BitCoin from "@/components/BitCoin";
import Highlights from "@/components/Highlights";
import Image from "next/image";
import { Fragment } from "react";

const Home = () => {


    return (
        <Fragment>
            <Banner />

            <AwardsSection />

            <BitCoin />

            <div className="spacing">
                <Highlights />
            </div>

            {/* <section className="relative h-screen">
                <div className="absolute inset-0">
                    <div style={{ backgroundImage: "url(/images/home-banner-desktop.webp)" }}
                        className="hidden md:block h-full bg-cover lg:bg-center md:bg-position-[20%] bg-position-[80%]"
                    />

                    <div className="block md:hidden h-full w-full bg-cover bg-center"
                        style={{ backgroundImage: "url(/images/home-banner-mobile.webp)" }}
                    />
                </div>

                <div className='sm:px-10 px-5 h-full'>
                    <div className="container mx-auto h-full">
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-6 h-full">
                            <div />

                            <div className="lg:mt-15 sm:mt-25 h-full flex flex-col sm:justify-center justify-end pb-7.5 sm:pb-0">
                                <Image id="logo" className='w-max mt-2' width={0} height={0} priority
                                    src='/logo/occams-podcast-footer.svg' alt="Occams Podcast"
                                />

                                <h1 className={`heading-1 sm:py-3.5 py-2 text-white`}>
                                    Inception to Infinity Podcast
                                </h1>

                                <p className="font-light body-2 text-[#E8E8E8]">
                                    A dialogue for system builders on capital, tech, and governance. Deep dives into
                                    reasoning, structure, and trade-offs, not surface sound bites.
                                </p>

                                <div className={`group inline-flex flex-nowrap items-center rounded-full mt-6 py-3.5 pl-8 
                                    pr-3.5 justify-center whitespace-nowrap gap-4 bg-white text-[#F36B21] w-max
                                    shadow-[0_10px_24px_rgba(243,107,33,0.3)] body-1 font-semibold!`}
                                >
                                    <span className="whitespace-nowrap">Listen Now</span>

                                    <div className="flex gap-2">
                                        <Link href="https://open.spotify.com/show/1FCHwR8dWex7l8jHjFqKou?si=0dbe85ff6bdb471b"
                                            target="_blank"
                                        >
                                            <img src='/images/spotify-banner.svg' alt="Spotify Banner" className={`h-auto 
                                                w-max shrink-0 transition-all duration-300 hover:-translate-y-[1.75px]`}
                                            />
                                        </Link>

                                        <Link href="https://youtube.com/@occams_advisory?si=OZVBc-R1Ch04GIT1" target="_blank">
                                            <img src='/images/you-tube-banner.svg' alt="You Tube Banner" className={`h-auto 
                                                w-max shrink-0 transition-all duration-300 hover:-translate-y-[1.75px]`}
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </Fragment>
    );
}

export default Home
