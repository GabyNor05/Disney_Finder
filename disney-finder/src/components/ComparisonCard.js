import React, { useState } from "react";
import Dropdown from "./Dropdown";
import DoughnutChart from "./Doughnut";

const Card = () => {
    const [selectedTitle, setSelectedTitle] = useState(null);
    const [secondSelectedTitle, setSecondSelectedTitle] = useState(null);

    return (
        <div className="large-column-content">
            <div className="TitleText">
                <h1>Compare Titles</h1>
            </div>
            <div className="comparison-pickers">
                <div>
                    <h3>First title</h3>
                    <Dropdown label="Search first title" setSelectedTitle={setSelectedTitle} />
                </div>
                <div>
                    <h3>Second title</h3>
                    <Dropdown label="Search second title" setSelectedTitle={setSecondSelectedTitle} />
                </div>
            </div>
            <div className="comparisonChart">
                <div className="card">
                    <div className="card-content">
                        {selectedTitle ? (
                            <>
                                <div className="doughnut-chart">
                                    <DoughnutChart selectedTitle={selectedTitle} />
                                </div>
                                <h2>{selectedTitle.Title}</h2>
                                <p className="rating">IMDb: {selectedTitle.imdbRating || "N/A"}</p>
                            </>
                        ) : (
                            <p className="comparison-empty">Search for a title above.</p>
                        )}
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        {secondSelectedTitle ? (
                            <>
                                <div className="doughnut-chart">
                                    <DoughnutChart selectedTitle={secondSelectedTitle} />
                                </div>
                                <h2>{secondSelectedTitle.Title}</h2>
                                <p className="rating">IMDb: {secondSelectedTitle.imdbRating || "N/A"}</p>
                            </>
                        ) : (
                            <p className="comparison-empty">Search for a title above.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;