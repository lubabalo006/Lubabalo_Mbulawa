import React from "react";
import Portfolio from "./App";

const Certificates = () =>{

    const [showPortfolio, setShowPortfolio] = React.useState(false);

    const handleclick = () =>{
        setShowPortfolio(true);
    }
    return(
        <div>
            {showPortfolio ? (
        <Portfolio />
        ) : (
        <>
            <button onClick={handleclick}>back</button>
            <div>
                <iframe src="src\certificates\LUBMBU219 Lubabalo Mbulawa_CodeSpaceCertificate-merged.pdf" width="100%" height="500px"></iframe>
            </div>
        </>
        )}
        </div>
    )
}

export default Certificates