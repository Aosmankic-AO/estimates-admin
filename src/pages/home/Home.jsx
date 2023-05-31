import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./Home.css";

const Home = () => {
    return(
        <div className="homeContainer">
            <Header />
            <h1>Home / Landing Page</h1>
            <Footer />
        </div>
    )
}

export default Home