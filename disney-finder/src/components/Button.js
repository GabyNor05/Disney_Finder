import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/button.css";

const Button = (props) => {
    const navigate = useNavigate();

    return (
        <button className="custom-button" onClick={() => navigate(props.link)}>
            {props.text}
        </button>
    )
}

export default Button;