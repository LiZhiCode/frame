/*
 * @Author: Lizhi
 * @Date: 2022-04-30 22:44:41
 * @LastEditors: Lizhi
 * @LastEditTime: 2022-05-01 17:17:27
 * @FilePath: \frame\React\react17\src\01-base\05-事件绑定-1.js
 * @Description:
 */
import React, { Component } from "react";

export default class App extends Component {
  a = 100;
  render() {
    return (
      <div>
        <input />
        <button
          onClick={() => {
            console.log(111, this.a);
          }}
        >
          add2
        </button>
        <button onClick={this.handleClick2.bind(this)}>add2</button>
        <button onClick={this.handleClick3}>add3</button>
        <button
          onClick={() => {
            this.handleClick4();
          }}
        >
          add4
        </button>
      </div>
    );
  }

  handleClick2() {
    console.log(2222);
  }
  handleClick3 = () => {
    console.log(333);
  };
  handleClick4 = () => {
    console.log(444);
  };
}
