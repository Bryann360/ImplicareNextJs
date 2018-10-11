import "../scss/style.scss";
import Link from "next/link";
import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="headerContainer col-12">
      		<img src="../midia/LogoImplicare.png" />
      		<h1>Implicare</h1>
      </div>
    );
  }
}

export default Header;