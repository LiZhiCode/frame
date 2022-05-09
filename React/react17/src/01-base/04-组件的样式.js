/*
 * @Author: Lizhi
 * @Date: 2022-04-20 16:42:58
 * @LastEditors: Lizhi
 * @LastEditTime: 2022-04-30 22:41:09
 * @FilePath: \frame\React\react17\src\01-base\04-组件的样式.js
 * @Description:
 */
import React, { Component } from "react";

class App extends Component {
  render() {
    const style = {
      background: "#f0f",
    };
    return <div style={style}>{10 + 20}</div>;
  }
}

export default App;
