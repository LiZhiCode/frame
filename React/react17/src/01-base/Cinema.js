/*
 * @Author: Lizhi
 * @Date: 2022-05-01 18:06:48
 * @LastEditors: Lizhi
 * @LastEditTime: 2022-05-01 18:22:05
 * @FilePath: \frame\React\react17\src\01-base\Cinema.js
 * @Description:
 */
import React, { Component } from "react";
import axios from "axios";
export default class Cinema extends Component {
  state = {
    cinemaList: [],
  };

  handleClick() {
    axios({
      url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=5648987",
      method: "get",
      headers: {
        "X-Host": " mall.film-ticket.cinema.list",
      },
    }).then((res) => {
      console.log(res);
    });
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.handleClick();
          }}
        >
          Cinema
        </button>
      </div>
    );
  }
}
