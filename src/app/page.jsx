// "use client";

// import AwardsSection from "@/components/AwardsSection";
// import Banner from "@/components/Banner";
// import BitCoin from "@/components/BitCoin";
// import BitCoin1 from "@/components/BitCoin1";
// import Highlights from "@/components/Highlights";
// import SecondBitCoin from "@/components/SecondBitCoin";
// import { Fragment } from "react";

// const Home = () => {
//     return (
//         <Fragment>
//             <Banner />

//             <div className="spacing">
//                 <AwardsSection />
//             </div>

//             <div className="spacing">
//                 <BitCoin />
//             </div>

//             <div className="spacing">
//                 <BitCoin1 />
//             </div>

//             <div className="spacing">
//                 <SecondBitCoin />
//             </div>

//             <div className="spacing">
//                 <Highlights />
//             </div>
//         </Fragment>
//     );
// }

// export default Home

// "use client";

// import AwardsSection from "@/components/AwardsSection";
// import Banner from "@/components/Banner";
// import Highlights from "@/components/Highlights";
// import { Fragment, useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// const Home = () => {
//     const root = useRef(null);

//     useEffect(() => {
//         gsap.registerPlugin(ScrollTrigger);

//         const ctx = gsap.context(() => {
//             gsap.from(".nav-item", {
//                 y: -30,
//                 opacity: 0,
//                 stagger: 0.12,
//                 duration: 0.8,
//                 ease: "power3.out",
//             });

//             gsap.from(".hero-title span", {
//                 y: 160,
//                 opacity: 0,
//                 rotate: 10,
//                 stagger: 0.08,
//                 duration: 1,
//                 ease: "back.out(1.7)",
//             });

//             gsap.from(".main-bitcoin", {
//                 scale: 0,
//                 opacity: 0,
//                 duration: 1,
//                 ease: "back.out(1.8)",
//                 delay: 0.4,
//             });

//             // gsap.to(".main-bitcoin", {
//             //     scrollTrigger: {
//             //         trigger: ".hero-section",
//             //         start: "top top",
//             //         endTrigger: ".future-section",
//             //         end: "top center",
//             //         scrub: 1.5,
//             //     },
//             //     x: window.innerWidth > 768 ? 420 : 0,
//             //     y: window.innerWidth > 768 ? 850 : 650,
//             //     scale: 1,
//             //     rotate: 360,
//             //     ease: "none",
//             // });

//             gsap.set(".main-bitcoin", {
//                 opacity: 1,
//                 scale: 1,
//             });

//             gsap.to(".main-bitcoin", {
//                 scrollTrigger: {
//                     trigger: ".hero-section",
//                     start: "top top",
//                     endTrigger: ".future-section",
//                     end: "top center",
//                     scrub: 1.5,
//                 },
//                 x: window.innerWidth > 768 ? 420 : 0,
//                 y: window.innerWidth > 768 ? 850 : 650,
//                 scale: 1,
//                 rotate: 360,
//                 ease: "none",
//             });
//         }, root);

//         return () => ctx.revert();
//     }, []);

//     return (
//         <Fragment>
//             <Banner />

//             <div className="spacing">
//                 <AwardsSection />
//             </div>

//             <main
//                 ref={root}
//                 className="min-h-screen bg-[#f7931a] text-[#321400] overflow-visible"
//             >

//                 <section className="hero-section relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 overflow-visible">
//                     <img
//                         src="/images/bitcoin.png"
//                         alt="Bitcoin"
//                         className="main-bitcoin absolute top-[12%] w-[200px] h-[200px] object-contain z-[100] drop-shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
//                     />

//                     <h2 className="hero-title text-[22vw] md:text-[18vw] font-black uppercase leading-none tracking-tighter text-center">
//                         {"Bitcoin".split("").map((letter, i) => (
//                             <span key={i} className="inline-block">
//                                 {letter}
//                             </span>
//                         ))}
//                     </h2>
//                 </section>

//                 <section className="future-section relative bg-[#321400] text-[#f7931a] px-6 py-32 md:py-40 overflow-visible">
//                     <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
//                         <div>
//                             <h3 className="text-5xl md:text-8xl font-black uppercase leading-none">
//                                 Taste The Future.
//                             </h3>

//                             <p className="mt-8 text-lg md:text-xl text-orange-100 max-w-xl leading-relaxed">
//                                 Decentralized. Digital. Powerful. Bitcoin brings a new way to
//                                 store, trade and move value across the world.
//                             </p>
//                         </div>

//                         {/* <div className="relative min-h-[500px] flex items-center justify-center">
//                             <div className="absolute w-[320px] h-[320px] bg-orange-400/20 blur-[120px] rounded-full" />
//                         </div> */}
//                     </div>
//                 </section>
//             </main>

//             <div className="spacing">
//                 <Highlights />
//             </div>
//         </Fragment>
//     );
// };

// export default Home;


// "use client";

// import AwardsSection from "@/components/AwardsSection";
// import Banner from "@/components/Banner";
// import Highlights from "@/components/Highlights";
// import { Fragment, useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import BitCoin from "@/components/BitCoin";
// import BitCoin1 from "@/components/BitCoin1";

// const Home = () => {
//     const root = useRef(null);

//     useEffect(() => {
//         gsap.registerPlugin(ScrollTrigger);

//         const ctx = gsap.context(() => {
//             gsap.from(".nav-item", {
//                 y: -30,
//                 opacity: 0,
//                 stagger: 0.12,
//                 duration: 0.8,
//                 ease: "power3.out",
//             });

//             gsap.from(".hero-title span", {
//                 y: 160,
//                 opacity: 0,
//                 rotate: 10,
//                 stagger: 0.08,
//                 duration: 1,
//                 ease: "back.out(1.7)",
//             });

//             gsap.from(".main-bitcoin", {
//                 scale: 0,
//                 opacity: 0,
//                 duration: 1,
//                 ease: "back.out(1.8)",
//                 delay: 0.4,
//             });

//             gsap.set(".main-bitcoin", {
//                 opacity: 1,
//                 scale: 1,
//             });

//             gsap.to(".main-bitcoin", {
//                 scrollTrigger: {
//                     trigger: ".hero-section",
//                     start: "top top",
//                     endTrigger: ".future-section",
//                     end: "top center",
//                     scrub: 1.5,
//                 },
//                 x: window.innerWidth > 768 ? 420 : 0,
//                 // x: window.innerWidth >= 1024 ? 320 : window.innerWidth >= 768 ? 320 : 220,
//                 // y: window.innerWidth > 768 ? 850 : 650,
//                 y: window.innerWidth > 768 ? 550 : 450,
//                 // y: window.innerWidth > 1200 ? 550 : window.innerWidth >= 1024 ? 510 : window.innerWidth >= 768 ? 450 : 320,
//                 scale: 1,
//                 rotate: 360,
//                 ease: "none",
//             });
//         }, root);

//         return () => ctx.revert();
//     }, []);

//     return (
//         <Fragment>
//             <Banner />

//             <div className="spacing">
//                 <AwardsSection />
//             </div>

//             {/* <div className="spacing">
//                 <BitCoin />
//             </div>

//             <div className="spacing">
//                 <BitCoin1 />
//             </div> */}

//             <section className="relative sm:px-10 px-5">
//                 <div className='container mx-auto relative'>
//                     <div className="container mx-auto relative">
//                         <div ref={root} className="min-h-screen overflow-visible">
//                             <div className="hero-section relative min-h-screen linear-background-secondary 
//                                 flex flex-col items-center justify-center"
//                             >
//                                 <img src="/images/bitcoin.png" alt="Bitcoin"
//                                     className="main-bitcoin absolute w-50 h-50 object-contain z-100"
//                                 />
//                             </div>

//                             <div className="future-section relative linear-background h-75 overflow-visible mt-12.5">
//                                 <div className="grid md:grid-cols-2 gap-8 items-center h-full">
//                                     <h3 className="text-3xl md:text-4xl text-white pl-8">
//                                         Bit Coin
//                                     </h3>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <div className="spacing">
//                 <Highlights />
//             </div>
//         </Fragment>
//     );
// };

// export default Home;

"use client";

import AwardsSection from "@/components/AwardsSection";
import Banner from "@/components/Banner";
import Highlights from "@/components/Highlights";
import { Fragment, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BitCoin from "@/components/BitCoin";
import BitCoin1 from "@/components/BitCoin1";
import { VideoText } from "@/components/ui/video-text";

const Home = () => {
    const root = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.set(".main-bitcoin", {
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
            });

            gsap.to(".main-bitcoin", {
                scrollTrigger: {
                    trigger: ".hero-section",
                    start: "top top",
                    endTrigger: ".future-section",
                    end: "center center",
                    scrub: 1.5,
                    invalidateOnRefresh: true,
                },

                x: () => {
                    const coin = document.querySelector(".main-bitcoin");
                    const target = document.querySelector(".future-target");

                    const coinRect = coin.getBoundingClientRect();
                    const targetRect = target.getBoundingClientRect();

                    return (
                        targetRect.left -
                        coinRect.left +
                        targetRect.width / 2 -
                        coinRect.width / 2
                    );
                },

                y: () => {
                    const coin = document.querySelector(".main-bitcoin");
                    const target = document.querySelector(".future-target");

                    const coinRect = coin.getBoundingClientRect();
                    const targetRect = target.getBoundingClientRect();

                    return (
                        targetRect.top -
                        coinRect.top +
                        targetRect.height / 2 -
                        coinRect.height / 2
                    );
                },

                rotate: 360,
                ease: "none",
            });

            ScrollTrigger.refresh();
        }, root);

        return () => ctx.revert();
    }, []);

    return (
        <Fragment>
            <Banner />

            <section className="sm:px-10 px-5 pt-12.5">
                <div className='container mx-auto'>
                    <div className="relative h-40 w-full overflow-hidden">
                        <VideoText src="./videos/occams_advisory_hero.mp4">
                            Occams Advisory
                        </VideoText>
                    </div>
                </div>
            </section>

            <div className="spacing">
                <AwardsSection />
            </div>

            <div className="spacing">
                <section className="sm:px-10 px-5">
                    <div className='container mx-auto'>
                        <BitCoin />
                    </div>
                </section>
            </div>

            <div className="spacing">
                <section className="sm:px-10 px-5">
                    <div className='container mx-auto'>
                        <BitCoin1 />
                    </div>
                </section>
            </div>

            <section className="relative sm:px-10 px-5">
                <div className="container mx-auto relative">
                    <div ref={root} className="min-h-screen overflow-visible">
                        <div className="hero-section relative min-h-screen linear-background-secondary
                            flex items-center justify-center overflow-visible rounded-4xl"
                        >
                            <img src="/images/bitcoin.png" alt="Bitcoin"
                                className="main-bitcoin absolute top-1/2 left-1/2 -translate-x-1/2 
                                -translate-y-1/2 w-50 h-50 object-contain z-100"
                            />
                        </div>

                        <div className="future-section relative linear-background h-75 overflow-visible mt-12.5 rounded-4xl">
                            <div className="grid md:grid-cols-2 gap-8 items-center h-full">
                                <h3 className="text-3xl md:text-4xl text-white pl-8">
                                    Bit Coin
                                </h3>

                                <div className="future-target flex items-center justify-center h-full">
                                    <div className="w-50 h-50" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="spacing">
                <Highlights />
            </div>
        </Fragment>
    );
};

export default Home;