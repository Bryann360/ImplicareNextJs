import "../scss/style.scss";
import Link from "next/link";
import React, { Component } from "react";


class MenuVertical extends Component {
	constructor(props){
		super(props);
		this.props = props;
	}


	render() {
		return (
			<div className="menuVerticalContainer col-s-3 col-2">
				<ul className="col-12">
					<li className="col-12">Cadastro de Vagas</li>
					<li className="col-12">Gerenciamento de Vagas</li>
					<li className="col-12">Sair</li>
				</ul>
			</div>
		);
	}
	
}

export default MenuVertical;