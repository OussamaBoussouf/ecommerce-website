import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import NewArrivals from "../../components/NewArrivals/NewArrivals";
import Categories from "../../components/Categories/Categories";

function Home() {
    return (
        <div>
            <HeroSection/>
            <NewArrivals/>
            <Categories/>
        </div>
    );
}

export default Home;