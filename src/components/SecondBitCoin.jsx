// import React from 'react'

// const SecondBitCoin = () => {
//     return (
//         <div className='h-screen bg-black flex justify-center items-center'>
//             <img src="./images/bitcoin.png" alt="Bitcoin" className='w-50 h-50' />
//         </div>
//     )
// }

// export default SecondBitCoin

// "use client";

// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// const SecondBitCoin = () => {
//   const sectionRef = useRef(null);
//   const coinRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

//     const ctx = gsap.context(() => {
//       gsap.to(coinRef.current, {
//         rotation: 1080,
//         ease: "none",
//         motionPath: {
//           path: [
//             { x: 0, y: 0 },
//             { x: 180, y: 160 },
//             { x: 420, y: 260 },
//             { x: 620, y: 120 },
//           ],
//           curviness: 1.5,
//           autoRotate: false,
//         },
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top top",
//           end: "+=1400",
//           scrub: true,
//           pin: true,
//         },
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative h-screen bg-black overflow-hidden text-white"
//     >
//       <div className="container mx-auto h-full grid grid-cols-1 lg:grid-cols-2 items-center px-5">
//         <div>
//           <h2 className="text-5xl font-bold">
//             Bitcoin scroll motion
//           </h2>
//           <p className="mt-4 text-white/70">
//             Scroll par coin path follow karke right side settle hoga.
//           </p>
//         </div>

//         <div className="relative h-full">
//           <img
//             ref={coinRef}
//             src="/images/bitcoin.png"
//             alt="Bitcoin"
//             className="absolute left-0 top-[20%] w-40 h-40 object-contain"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SecondBitCoin;

"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SecondBitCoin = () => {
    const wrapperRef = useRef(null);
    const coinRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // initial position
            gsap.set(coinRef.current, {
                top: "8%",
                left: "50%",
                xPercent: -50,
                rotate: 0,
                scale: 1,
            });

            // banner se second section me
            const tl1 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".bitcoin-second-section",
                    start: "top bottom",
                    end: "center center",
                    scrub: true,
                    // markers: true,
                },
            });

            tl1.to(coinRef.current, {
                top: "120%",
                left: "70%",
                rotate: 360,
                scale: 0.9,
                ease: "none",
            });

            // second se third section me jaake settle
            const tl2 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".bitcoin-third-section",
                    start: "top bottom",
                    end: "center center",
                    scrub: true,
                    // markers: true,
                },
            });

            tl2.to(coinRef.current, {
                top: "220%",
                left: "73%",
                rotate: 720,
                scale: 0.8,
                ease: "none",
            });

            ScrollTrigger.refresh();
        }, wrapperRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={wrapperRef} className="relative overflow-hidden bg-black text-white">

            {/* Moving Bitcoin */}
            <img
                ref={coinRef}
                src="/images/bitcoin.png"
                alt="Bitcoin"
                className="absolute z-30 w-40 h-40 lg:w-56 lg:h-56 object-contain pointer-events-none"
            />

            {/* SECTION 1 */}
            <section className="bitcoin-hero-section h-screen flex items-center justify-center">
                <h1 className="text-5xl lg:text-8xl font-bold">
                    Bitcoin
                </h1>
            </section>

            {/* SECTION 2 */}
            <section className="bitcoin-second-section h-screen">
                <div className="container mx-auto h-full px-5 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
                    <div>
                        <h2 className="text-4xl lg:text-6xl font-bold">
                            Digital Finance
                        </h2>

                        <p className="mt-5 text-white/70 text-lg max-w-xl">
                            Scroll karte hi Bitcoin rotate hota hua yaha right side column me aayega.
                        </p>
                    </div>

                    <div className="h-full flex items-center justify-center">
                        <div className="w-64 h-64 rounded-full border border-white/20"></div>
                    </div>
                </div>
            </section>

            {/* SECTION 3 */}
            <section className="bitcoin-third-section h-screen">
                <div className="container mx-auto h-full px-5 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
                    <div>
                        <h2 className="text-4xl lg:text-6xl font-bold">
                            Settled Position
                        </h2>

                        <p className="mt-5 text-white/70 text-lg max-w-xl">
                            Bitcoin rotate hote hue final section me jaake fix position par settle ho jayega.
                        </p>
                    </div>

                    <div className="h-full flex items-center justify-center">
                        <div className="w-52 h-52 rounded-full border border-orange-400/40"></div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default SecondBitCoin;