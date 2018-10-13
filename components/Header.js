import '../scss/style.scss';
//import Link from "next/link";
import React, { Component } from 'react';

class Header extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="headerContainer col-12">
				<div className= "headerDivImg col-1">
					<img className="logoImplicare" src="../static/midia/LogoImplicare.png" />
				</div>
				<div className= "headerDivTitulo col-3">
					<h1>Implicare</h1>	
				</div>
			</div>
		);
	}
}

export default Header;