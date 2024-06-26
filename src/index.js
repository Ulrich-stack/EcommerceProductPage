import React from "react";
import {createRoot} from "react-dom/client"
import App from "./App";
import "./app.css"

const rootNode = document.getElementById("root");
const root = createRoot(rootNode);
root.render(<App/>);