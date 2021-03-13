import React from "react";
import Calculator from "./Layout/Calculator/Calculator";
import "./styles/styles.css";

const app = () => (
  <div className="app">
    <Calculator />
    <p>Made with dedication by <a href="https://nslcoder.github.io/" target="_blank" rel="noreferrer">nslcoder</a> (Lokesh Gurung) for learning.</p>
  </div>
);

export default app;