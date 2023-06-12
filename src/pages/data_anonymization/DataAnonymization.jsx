import React,{useState} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./DataAnonymization.css"
import { updateData } from "../../api/api";

 const DataAnonymizationPage = () => {
    /** States for message response and input textbox */
    const [submitMessage, setSubmitMessage] = useState("");
    const [trackingNumber, setTrackingNumber] = useState("");
    /**Status spinner state */
    const [isLoading, setIsLoading] = useState(false);


    /** Handle submit button click */
    const handleButtonClick = () => {
        //show spinner
        setIsLoading(true);

        setTimeout(() => {
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
        setSubmitMessage("An error occured while updating data. Check console log.")
       })
       .finally(() => {
        setIsLoading(false); //hide spinner
       });
        }, 1000); //API delay 1 sec
       
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
            <div className="overlay" style={{display: isLoading ? "block" : "none"}}></div>
            {isLoading ? (<div className="spinner-overlay">
                <div className="spinner"></div>
            </div>
            ) : (
            <p>{submitMessage}</p>)}
            <label>Tracking Number</label>
            <input type="text" value={trackingNumber} onChange={e => setTrackingNumber(e.target.value)} onFocus={handleTextBoxFocus} />
            <button onClick={handleButtonClick}>Submit</button>
            <Footer />
        </div>
    );
 };

 export default DataAnonymizationPage;