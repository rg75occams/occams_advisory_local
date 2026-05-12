"use client";

import { motion, useMotionValue, animate } from "framer-motion";
import Link from "next/link";
import React, { Fragment, useEffect } from "react";

function VoiceBar({ height, backgroundColor, className = "", speed = 500 }) {
    const scale = useMotionValue(1);
    // const shouldAnimate = Number(height) !== 50;

    useEffect(() => {
        // if (!shouldAnimate) return;

        const loop = setInterval(() => {
            animate(scale, 0.75 + Math.random() * 0.55, {
                duration: 0.6, ease: "easeInOut",
            });
        }, speed);

        return () => clearInterval(loop);
    }, [scale, speed /* shouldAnimate */]);

    return (
        <motion.div className={`w-10 lg:w-12.5 shrink-0 rounded-full ${className}`} style={{
            height: height, backgroundColor: backgroundColor,
            scaleY: scale,
            // scaleY: shouldAnimate ? scale : 1,
            transformOrigin: "center",
        }} />
    );
}

function VoiceBarHorizontal({ width, backgroundColor, speed = 500, className = "" }) {
    const scale = useMotionValue(1);

    useEffect(() => {
        const loop = setInterval(() => {
            animate(scale, 0.75 + Math.random() * 0.55, { duration: 0.6, ease: "easeInOut" });
        }, speed);
        return () => clearInterval(loop);
    }, [scale, speed]);

    return (
        <motion.div className={`h-10 rounded-full shrink-0 ${className}`} style={{
            width: width, backgroundColor,
            scaleX: scale, transformOrigin: "center",
        }} />
    );
}

const Highlights = () => {
    return (
        <Fragment>
            <section className="relative sm:px-10 px-5 hidden md:flex">
                <div className='container mx-auto relative'>
                    <div className="absolute top-1/2 left-0 w-full h-0.5 linear-line-color
                        -translate-y-1/2 z-0"
                    />

                    <div className='relative z-10 flex items-center justify-center gap-4 md:gap-5 xl:gap-8'>
                        <div className="lg:w-12.5 w-10 lg:h-12.5 h-10 shrink-0 rounded-full bg-[#DCF5FF]" />
                        <VoiceBar height={125} backgroundColor="#FFE8DC" />
                        <VoiceBar height={83} backgroundColor="#FE9F66" />
                        <VoiceBar height={170} backgroundColor="#DCF5FF" />

                        <div className="border-[5px] border-[#FF5A004D] rounded-full">
                            <div className="w-auto lg:h-auto flex flex-col lg:justify-center linear-background-secondary 
                                lg:pl-4.5 xl:pr-10.75 pl-6.5 pr-6.5 lg:py-6 py-5 rounded-full h-90"
                            >
                                <div className="flex flex-col lg:flex-row xl:gap-5 lg:gap-4 gap-2 items-center">
                                    <img src="/images/podcast-gif.gif" alt="Podcast Gif" className="xl:h-auto h-25 shrink-0" />

                                    <div className="flex flex-col">
                                        <h5 className="xl:text-xl text-lg font-bold text-white">
                                            Inception to <br /> Infinity Podcast
                                        </h5>

                                        <p className="xl:text-base text-sm text-[#363636] font-light mt-1.5">
                                            A dialogue for system builders on <br className="xl:flex hidden" />
                                            capital, tech, & governance.
                                        </p>

                                        <Link href="https://podcast.occamsadvisory.com/" target="_blank" className="w-max flex 
                                            mt-4 items-center lg:text-base text-sm curesor-pointer lg:mt-2 font-medium py-1.25
                                            px-4 rounded-full gap-2 border border-white text-white"
                                        >
                                            Go to podcast
                                            <i className="fa-sharp fa-solid fa-arrow-right text-[12px] mt-px"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <VoiceBar height={145} backgroundColor="#DCF5FF" />
                        <VoiceBar height={103} backgroundColor="#FFE8DC" />
                        <VoiceBar height={129} backgroundColor="#DCF5FF" />
                        <div className="lg:w-12.5 w-10 lg:h-12.5 h-10 shrink-0 rounded-full bg-[#FFA069]" />
                    </div>
                </div>
            </section>

            <section className="md:hidden flex justify-center items-center relative sm:px-10 px-5">
                <div className='container mx-auto flex flex-col items-center justify-center gap-5'>
                    <VoiceBarHorizontal width={37} backgroundColor="#DCF5FF" />
                    <VoiceBarHorizontal width={105} backgroundColor="#FFE8DC" />
                    <VoiceBarHorizontal width={63} backgroundColor="#FE9F66" />
                    <VoiceBarHorizontal width={150} backgroundColor="#DCF5FF" />

                    <div className="border-[5px] border-[#FF5A004D] rounded-full">
                        <div className="w-auto flex flex-col justify-center items-center linear-background-secondary 
                            pl-4.5 pr-10.75 py-6 rounded-full"
                        >
                            <div className="flex gap-5 items-center">
                                <img src="/images/podcast-gif.gif" alt="Podcast Gif" className="shrink-0" />

                                <div className="flex flex-col">
                                    <h5 className="lg:text-xl text-lg font-bold text-white">
                                        Inception to <br /> Infinity Podcast
                                    </h5>

                                    <p className="lg:text-base text-sm text-[#363636] font-light mt-1.5">
                                        A dialogue for system builders on <br className="xl:flex hidden" />
                                        capital, tech, & governance.
                                    </p>

                                    <Link href="https://podcast.occamsadvisory.com/" target="_blank" className="w-max flex 
                                        items-center lg:text-base text-sm curesor-pointer mt-2 font-medium text-white py-1.25 
                                        px-4 rounded-full gap-2 border border-white">
                                        Go to podcast
                                        <i className="fa-sharp fa-solid fa-arrow-right text-[12px] mt-px"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <VoiceBarHorizontal width={139} backgroundColor="#DCF5FF" />
                    <VoiceBarHorizontal width={83} backgroundColor="#FFE8DC" />
                    <VoiceBarHorizontal width={125} backgroundColor="#DCF5FF" />
                    <VoiceBarHorizontal width={37} backgroundColor="#FFA069" />
                </div>
            </section>
        </Fragment>
    )
}

export default Highlights