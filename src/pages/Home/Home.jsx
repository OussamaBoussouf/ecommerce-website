import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import NewArrivals from "../../components/NewArrivals/NewArrivals";
import Categories from "../../components/Categories/Categories";
import Trendy from "../../components/Trendy/Trendy";

function Home() {
    return (
        <div>
            <HeroSection/>
            <NewArrivals/>
            <Categories/>
            <Trendy/>
        </div>
    );
}

export default Home;