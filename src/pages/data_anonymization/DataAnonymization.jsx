import React,{useState} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./DataAnonymization.css"
import { updateData } from "../../api/api";

 const DataAnonymizationPage = () => {
    /** States for message response and input textbox */
    const [submitMessage, setSubmitMessage] = useState("");
    const [trackingNumber, setTrackingNumber] = useState("");


    /** Handle submit button click */
    const handleButtonClick = () => {
       updateData()
       .then(response => {
        if(response && response.status === 200) {
            //If successfull, show message and clear textbox
            setSubmitMessage('Data updated.');
            setTrackingNumber("");
        } else {
            setSubmitMessage("Error: 404 Not Found. Check console log.")
        }
       })
       .catch(error => {
        console.log(error);
        setSubmitMessage("An error occured while updating data. Check console log. ")
       })
      };
      
      /**Text box focus */
      const handleTextBoxFocus = () => {
        setSubmitMessage("");
        setTrackingNumber("");
      }

    return(
        <div className="DataAnonymization-container">
            <Header />
            <h1>Data Anonmymization Page</h1>
            <p>{submitMessage}</p>
            <label>Tracking Number</label>
            <input type="text" value={trackingNumber} onChange={e => setTrackingNumber(e.target.value)} onFocus={handleTextBoxFocus} />
            <button onClick={handleButtonClick}>Submit</button>
            <Footer />
        </div>
    );
 };

 export default DataAnonymizationPage;