import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
/* import App from "./App"; */
import reportWebVitals from "./reportWebVitals";
import Calculator from "./Pages/Calculator";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div className="App">
        <Calculator />
    </div> /* <App color="green" size="20" /> */
);

reportWebVitals();
