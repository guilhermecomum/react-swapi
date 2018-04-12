import React, { Component } from "react";
import Star from "../images/star.svg";
import Wars from "../images/wars.svg";

export default class Header extends Component {
  render() {
    return (
      <div className="starwars-header">
        <img src={Star} className="star" alt="logo" /><br />
        <img src={Wars} className="wars" alt="logo" />
      </div>
    );
  }
}
