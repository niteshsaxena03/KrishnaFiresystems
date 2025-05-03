import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { theme } from "./theme";

// Apply global styles
const globalStyles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: ${theme.typography.fontFamily};
    background-color: #f8f9fa;
    color: ${theme.colors.dark};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  a {
    text-decoration: none;
  }
  
  img {
    max-width: 100%;
  }
`;

// Create a style element and append global styles
const styleEl = document.createElement("style");
styleEl.innerHTML = globalStyles;
document.head.appendChild(styleEl);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
