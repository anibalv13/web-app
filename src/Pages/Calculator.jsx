import React, { Component } from "react";
import CalculatorButton from "./Calculator_button";

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayValue: "0",
            currentInput: "",
            operator: null,
            prevValue: null,
        };
    }

    handleDigitClick = (digit) => {
        const { currentInput, displayValue } = this.state;

        if (currentInput.length < 10) {
            const newInput = currentInput + digit;
            this.setState({
                currentInput: newInput,
                displayValue: newInput !== "0" ? newInput : displayValue,
            });
        }
    };

    handleOperatorClick = (operator) => {
        const { currentInput, prevValue } = this.state;

        if (prevValue === null) {
            this.setState({
                prevValue: currentInput,
                currentInput: "",
                operator: operator,
            });
        } else {
            const result = this.calculateResult();
            this.setState({
                prevValue: result,
                currentInput: "",
                operator: operator,
                displayValue: result,
            });
        }
    };

    calculateResult = () => {
        const { prevValue, currentInput, operator } = this.state;
        const prev = parseFloat(prevValue);
        const current = parseFloat(currentInput);

        switch (operator) {
            case "+":
                return prev + current;
            case "-":
                return prev - current;
            case "*":
                return prev * current;
            case "/":
                return prev / current;
            default:
                return current;
        }
    };

    handleEqualsClick = () => {
        const result = this.calculateResult();
        this.setState({
            prevValue: null,
            currentInput: result.toString(),
            operator: null,
            displayValue: result.toString(),
        });
    };

    handleClearClick = () => {
        this.setState({
            displayValue: "0",
            currentInput: "",
            operator: null,
            prevValue: null,
        });
    };

    render() {
        return (
            <div className="Calculator">
                <div className="Calculator-display">
                    {this.state.displayValue}
                </div>
                <div className="Calculator-buttons">
                    <CalculatorButton
                        label="7"
                        onClick={() => this.handleDigitClick("7")}
                    />
                    <CalculatorButton
                        label="8"
                        onClick={() => this.handleDigitClick("8")}
                    />
                    {/* ... Render other digit buttons ... */}
                    <CalculatorButton
                        label="+"
                        onClick={() => this.handleOperatorClick("+")}
                    />
                    <CalculatorButton
                        label="-"
                        onClick={() => this.handleOperatorClick("-")}
                    />
                    {/* ... Render other operator buttons ... */}
                    <CalculatorButton
                        label="="
                        onClick={this.handleEqualsClick}
                    />
                    <CalculatorButton
                        label="C"
                        onClick={this.handleClearClick}
                    />
                </div>
            </div>
        );
    }
}

export default Calculator;
