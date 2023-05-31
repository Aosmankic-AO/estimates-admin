 import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./DataAnonymization.css"

 const DataAnonymizationPage = () => {
    return(
        <div className="DataAnonymization-container">
            <Header />
            <h1>Data Anonmymization Page</h1>
            <label>Tracking Number</label>
            <input />
            <button>Submit</button>
            <Footer />
        </div>
    );
 };

 export default DataAnonymizationPage;