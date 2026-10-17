import React from "react";
import tigerLily from "../assests/Tigerlily.png";
import tinkerbell from "../assests/Tinkerbell.png";
import Characters from "./Characters";
import Card from "./ComparisonCard";
import "../css/comparison.css";

function Comparison() {
    return (
        <div className="Comparison-page">
            <div className="comparison-container">
                <div className="comparison-column ">
                    <img src={tigerLily} alt="Tiger Lily"  style={{height: '400px', width: '145px', marginLeft: "60px"}}/>
                </div>
                <div className="column large">
                   <Card />
                </div>

                <div className="comparison-column">
                    <Characters image={tinkerbell} /> 
                </div>
            </div>
        </div>
    );
}

export default Comparison;