import React from "react";
import Portfolio from "./App";
import "./certificate.css"
import "./App.css"

const Certificates = () =>{

    const [showPortfolio, setShowPortfolio] = React.useState(false);

    const handleclick = () =>{
        setShowPortfolio(true);
    }
    return(
        <div className="container">
            {showPortfolio ? (
        <Portfolio />
        ) : (
        <>
            <button onClick={handleclick}>back</button>
            <div>
                <iframe src="src\certificates\LUBMBU219 Lubabalo Mbulawa_CodeSpaceCertificate-merged.pdf" width="98%" height="600px"></iframe>
            </div>
        </>
        )}
        </div>
    )
}

export default Certificates