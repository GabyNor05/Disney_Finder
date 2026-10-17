import React from "react";
import Thumbnail from "./Thumbnail";
import Characters from "./Characters";
import stitch from "../assests/Stitch.png";
import lilo from "../assests/Lilo.png";
import Button from "./Button";
import "../css/home.css";

function Home() {
    return (

        <div className="page">
            <div className="home-container">
                <div className="column small">
                    <Characters image={lilo} />
                </div>
                <div className="column large">
                    <div className = "large-column-content">
                        <div className="TitleText">
                            <h1>Disney+ Finder</h1>
                        </div>
                        <div className="homeParagraphText">
                            <p>Disney Plus Finder provides instant access to a curated list making it easier to find the best possible TV Shows and Movies for you.</p>
                        </div>
                        <Thumbnail />
                        <div className="button-row">
                                <Button text="Compare Titles" link="/comparison" />
                        </div>
                    </div>
                </div>

                <div className="column small">
                    <Characters image={stitch} />
                </div>
            </div>
        </div>
    );
}

export default Home;