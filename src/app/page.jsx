"use client";

import AwardsSection from "@/components/AwardsSection";
import Banner from "@/components/Banner";
import BitCoin from "@/components/BitCoin";
import Highlights from "@/components/Highlights";
import { Fragment } from "react";

const Home = () => {
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
                <Highlights />
            </div>
        </Fragment>
    );
}

export default Home