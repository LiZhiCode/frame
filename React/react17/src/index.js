/*
 * @Author: Lizhi
 * @Date: 2022-04-19 15:00:06
 * @LastEditors: Lizhi
 * @LastEditTime: 2022-05-01 18:17:00
 * @FilePath: \frame\React\react17\src\index.js
 * @Description:
 */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./01-base/Cinema";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
