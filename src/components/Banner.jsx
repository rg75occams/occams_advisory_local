"use client";

import Link from "next/link"

const Banner = () => {
    return (
        <section className='relative'>
            <video autoPlay muted loop playsInline className="absolute top-0 left-0 w-full h-full z-0
                object-cover object-[80%] sm:object-right sm:object-fill -scale-x-100"
            >
                <source src="./videos/occams_advisory_hero.mp4" type="video/mp4" />
            </video>

            <div className="relative w-full h-screen sm:px-10 px-5 flex items-center">
                <div className='container mx-auto'>
                    <div className="relative z-20 container mx-auto h-full flex items-center">
                        <div className="relative flex sm:items-center items-start flex-col w-full">
                            <div className={`group md:inline-flex items-center text-white py-2.5 px-7.5
                                hidden bg-[#F1783C1A] rounded-full text-lg gap-3 mb-2.5`}
                            >
                                <img src="./images/incubation.svg" alt="Business Incubation" />
                                Business Incubation
                            </div>

                            <h1 className="lg:text-[40px] md:text-3xl text-2xl font-bold text-white text-center">
                                Join thousand of SMB’s that have put <br />
                                their trust in Occams
                            </h1>

                            <p className="md:text-lg text-base font-light mt-2 text-white">
                                Our world class advisory services are here to help ypu conveniently set up and manage
                                your business.
                            </p>

                            <Link href="#" className={`group md:inline-flex items-center text-white py-3.75 pl-7.5 
                                hidden pr-3.75 bg-[#F47B39] rounded-full hover:scale-105 text-lg transition-all 
                                duration-500 ease-in gap-3 lg:mt-7 mt-5`}
                            >
                                Grow your Company with us
                                <img className="transition-all duration-500 ease-in group-hover:rotate-44"
                                    src="./images/arrow.svg" alt="Arrow Right"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner