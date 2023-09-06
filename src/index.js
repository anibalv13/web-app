/* import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; */
/* import App from "./App"; */
/* import reportWebVitals from "./reportWebVitals";
import Calculator from "./Pages/Calculator"; */

/* const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div className="App">
        <Calculator />
    </div>  */ /* <App color="green" size="20" /> */
/* );

reportWebVitals(); */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import myReducers from "./reducers";
import { legacy_createStore as createStore } from "redux";

//Create the store
const myStore = createStore(myReducers);

//This will console log the current state everytime the state changes
myStore.subscribe(() => console.log(myStore.getState()));

//Enveloping the App inside the Provider, ensures that the states in the store are available
//throughout the application
ReactDOM.render(
    <Provider store={myStore}>
        <App />
    </Provider>,
    document.getElementById("root")
);
