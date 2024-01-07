import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "./index.css";

const notesList = document.getElementById(".notes-list");
const appHeaderTitle = document.getElementById(".app-header__title");

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
