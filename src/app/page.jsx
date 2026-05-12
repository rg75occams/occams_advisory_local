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


"use client";

import AwardsSection from "@/components/AwardsSection";
import Banner from "@/components/Banner";
import Highlights from "@/components/Highlights";
import { Fragment, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BitCoin from "@/components/BitCoin";
import BitCoin1 from "@/components/BitCoin1";

const Home = () => {
    const root = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.from(".nav-item", {
                y: -30,
                opacity: 0,
                stagger: 0.12,
                duration: 0.8,
                ease: "power3.out",
            });

            gsap.from(".hero-title span", {
                y: 160,
                opacity: 0,
                rotate: 10,
                stagger: 0.08,
                duration: 1,
                ease: "back.out(1.7)",
            });

            gsap.from(".main-bitcoin", {
                scale: 0,
                opacity: 0,
                duration: 1,
                ease: "back.out(1.8)",
                delay: 0.4,
            });

            gsap.set(".main-bitcoin", {
                opacity: 1,
                scale: 1,
            });

            gsap.to(".main-bitcoin", {
                scrollTrigger: {
                    trigger: ".hero-section",
                    start: "top top",
                    endTrigger: ".future-section",
                    end: "top center",
                    scrub: 1.5,
                },
                x: window.innerWidth > 768 ? 420 : 0,
                // y: window.innerWidth > 768 ? 850 : 650,
                y: window.innerWidth > 768 ? 550 : 450,
                scale: 1,
                rotate: 360,
                ease: "none",
            });
        }, root);

        return () => ctx.revert();
    }, []);

    return (
        <Fragment>
            <Banner />

            <div className="spacing">
                <AwardsSection />
            </div>

            <div className="spacing">
                <BitCoin />
            </div>

            <div className="spacing">
                <BitCoin1 />
            </div>

            <section ref={root} className="min-h-screen overflow-visible">
                <div className="hero-section relative min-h-screen linear-background-secondary flex flex-col 
                    items-center justify-center"
                >
                    <img src="/images/bitcoin.png" alt="Bitcoin"
                        className="main-bitcoin absolute w-50 h-50 object-contain z-100"
                    />
                </div>

                <div className="future-section relative h-75 linear-background overflow-visible mt-12.5">
                    <div className="container mx-auto h-full">
                        <div className="grid md:grid-cols-2 gap-8 items-center h-full">
                            <h3 className="text-3xl md:text-4xl text-white">
                                Bit Coin
                            </h3>
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