"use client";

import Link from "next/link"

const Banner = () => {
    return (
        // <section style={{ backgroundImage: `url(./assets/home_banner.svg)` }} className='h-screen bg-cover 
        //     bg-no-repeat bg-center sm:px-10 px-5 flex items-center'
        // >
        //     <div className='container mx-auto'>
        //         <div className='pt-37.5' data-aos="zoom-in-right">
        //             <div className='xl:w-1/2 lg:w-[60%] w-full'>
        //                 <h2 className='xl:text-[3rem] text-3xl text-white font-semibold ringift lg:pr-12 pr-0'>
        //                     Empowering you to achieve holistic mental wellness through personalized & integrative care.

        //                     <Link to='#' className='mt-6 text-white flex gap-0.5 items-center border-b-[3px] w-max inter'>
        //                         <p className='sm:text-lg text-sm font-normal'>Now accepting new patients in California.</p>
        //                         <GoArrowUpRight className='sm:text-lg text-sm sm:mt-1.5 mt-1 font-normal' />

        //                         {/* <img src={'./assets/mindclaire_cta.png'} alt='mindclaire_cta'
        //                             className="w-auto mt-6"
        //                         /> */}
        //                     </Link>
        //                 </h2>
        //             </div>

        //             <div>
        //                 <h5 className='text-white lg:w-[45%] w-full mt-6 sm:text-lg text-base font-sans'>
        //                     Welcome to MindClaire, where I assist you towards harmony among mind, body, and spirit. As a
        //                     board-certified psychiatrist specializing in child, adolescent, and adult care, I'm here to
        //                     guide you through the challenges of depression, anxiety, ADHD, insomnia and autism.
        //                 </h5>
        //             </div>
        //         </div>
        //     </div>
        // </section>

        <section className='relative'>
            <video autoPlay muted loop playsInline className="absolute top-0 left-0 w-full h-full z-0
                object-cover object-[80%] sm:object-right sm:object-fill rotate-180"
            >
                <source src="./videos/occams_advisory_hero.mp4" type="video/mp4" />
            </video>

            <div className="relative w-full h-screen sm:px-10 px-5 flex items-center">
                <div className='container mx-auto' data-aos="zoom-in-up">
                    <div className="relative z-20 container mx-auto h-full flex items-center" data-aos='zoom-in-up'>
                        <div className="relative flex sm:items-center items-start flex-col w-full">
                            <h1 className="lg:text-[52px] md:text-4xl text-2xl font-bold linear-text-gradient">
                                Applied AI for America’s SMBs
                            </h1>

                            <p className="sm:text-[24px] md:text-lg text-base font-medium mt-1">
                                Clear. Understandable. Actionable.
                            </p>

                            <p className="sm:text-[22px] md:text-lg text-base font-light max-w-3xl mx-auto mt-2
                                sm:text-center text-left"
                            >
                                We build AI that founders and finance teams can understand, use, and trust-clear value,
                                transparent guardrails
                            </p>

                            <div className='flex sm:flex-row flex-col items-center gap-4 mt-5' data-aos='zoom-in-up'>
                                <Link rel="preload" href='/' className="rounded-lg text-base py-2.5 h-12 flex items-center
                                    font-semibold cursor-pointer text-white px-5 linear-background w-48 justify-center
                                    sm:w-auto"
                                >
                                    Speak with our team
                                </Link>

                                <Link rel="preload" href='/' className="rounded-lg text-base py-2.5 h-12 flex items-center px-5
                                    font-semibold cursor-pointer text-[#EF6A24] bg-white border-2 border-[#F99D3C] w-48
                                    justify-center sm:w-auto"
                                >
                                    See our Products
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="absolute md:bottom-20 sm:bottom-10 bottom-7 flex w-full justify-center z-20 opacity-40">
                <img src="./assets/scroll_down.gif" alt="scroll down" className='w-12.5' />
            </div> */}
        </section>

        // <section className="relative h-screen w-full overflow-hidden">
        //     {/* Background Image layer */}
        //     <img
        //         src="./assets/home_banner.svg"
        //         alt="bg"
        //         className="absolute w-full h-full object-cover z-0"
        //     />

        //     {/* Video layer (blended, not opacity) */}
        //     <video
        //         autoPlay
        //         muted
        //         loop
        //         playsInline
        //         className="absolute  w-full h-full z-10 object-cover
        //   object-[80%] sm:object-right
        //   mix-blend-multiply"
        //     >
        //         <source src="./assets/videos/occams_ai_hero.mp4" type="video/mp4" />
        //     </video>

        //     {/* Content */}
        //     <div className="relative z-20 h-full flex items-center sm:px-10 px-5">
        //         {/* your content */}
        //     </div>

        //     {/* Scroll */}
        //     <div className="absolute md:bottom-20 sm:bottom-10 bottom-7 w-full flex justify-center z-20 opacity-40">
        //         <img src="./assets/scroll_down.gif" alt="scroll down" className="w-12.5" />
        //     </div>
        // </section>
    )
}

export default Banner