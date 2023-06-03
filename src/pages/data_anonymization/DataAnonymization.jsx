import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./DataAnonymization.css"
import { updateData } from "../../api/api";

 const DataAnonymizationPage = () => {

    /** Handle submit button click */
    const handleButtonClick = () => {
       updateData();
      };
      


    return(
        <div className="DataAnonymization-container">
            <Header />
            <h1>Data Anonmymization Page</h1>
            <label>Tracking Number</label>
            <input />
            <button onClick={handleButtonClick}>Submit</button>
            <Footer />
        </div>
    );
 };

 export default DataAnonymizationPage;