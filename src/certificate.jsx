import React from "react";
import Portfolio from "./App";
import "./certificate.css"
import "./App.css"
import { credentials } from "./data";

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
                {credentials.map((credential) =>(
                    <div className="credential">
                        <h4>{credential.organization}</h4>
                            {credential.name}
                            <div className="credential--links">
                                <a href={credential.url} target="_blank">Show credential</a>
                            </div>
                        
                    </div>
                    ))}
            </div>
        </>
        )}
        </div>
    )
}

export default Certificates