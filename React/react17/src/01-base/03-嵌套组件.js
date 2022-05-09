/*
 * @Author: Lizhi
 * @Date: 2022-04-20 16:42:58
 * @LastEditors: Lizhi
 * @LastEditTime: 2022-04-30 22:29:38
 * @FilePath: \frame\React\react17\src\01-base\03-嵌套组件.js
 * @Description:
 */
import React, { Component } from "react";

const Navbar = () => {
  return (
    <div>
      Navbar
      <child>123</child>
    </div>
  );
};

const Swiper = () => {
  return <div>Swiper</div>;
};

const Tab = () => {
  return <div>Tab</div>;
};

class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Swiper></Swiper>
        <Tab></Tab>
      </div>
    );
  }
}

export default App;
