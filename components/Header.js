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
				<div className= "headerDivImg col-12">
					<img className= "logoImplicare" src="../static/midia/LogoImplicare.png" />
					<h1 className="title">Implicare</h1>	
				</div>
				
				
			</div>
		);
	}
}

export default Header;