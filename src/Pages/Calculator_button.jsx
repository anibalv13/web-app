import React from "react";

const CalculatorButton = (props) => {
    return (
        <button className="CalculatorButton" onClick={props.onClick}>
            {props.label}
        </button>
    );
};

export default CalculatorButton;
