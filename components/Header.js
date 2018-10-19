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
				<div className= "headerDivImg col-2">
					<img className= "logoImplicare" src="../static/midia/LogoImplicare.png" />
					<h1 className="title">Implicare</h1>	
				</div>
				<div className="headerDivMenu col-3">
					<input type="image" className="menuButton" src="../static/icons/userInterface/098-menu.png"/>
				</div>
				<div className= "divSeparacao col-4">
				</div>
				<div className= "headerDivSearchBar col-3">
					<form className="formSearch">
						<input type="text" className="inputSearch" name="Search" placeholder="Search..."/>
						<input type="submit" value="Find" className="botaoPesquisa" />
					</form>
				</div>
			</div>
		);
	}
}

export default Header;