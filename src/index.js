// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// Tự động detect basename:
// - GitHub Pages: /Portfolio
// - Custom domain (nguyenvanphong.com) hoặc localhost: /
const basename = process.env.PUBLIC_URL || "/";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename={basename}>
    <App />
  </BrowserRouter>
);
