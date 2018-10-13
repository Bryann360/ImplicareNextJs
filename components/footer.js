import '../scss/style.scss';

import React, { Component } from 'react';

class Footer extends Component {
	constructor(props) {
		super(props);
	}
    
	render(){
		return(
			<div className="footerContainer col-12">
				<div className="footerDiv col-3">
					<p className="footerContent">
                        Labore adipisicing quis culpa esse exercitation.
					</p>
					<p className="footerContent">
                        Labore adipisicing quis culpa esse exercitation.
					</p>
					<p className="footerContent">
                        Labore adipisicing quis culpa esse exercitation.
					</p>
				</div>
				<div className="footerDiv col-3">
					<p className="footerContent">
                        Labore adipisicing quis culpa esse exercitation.
					</p>
					<p className="footerContent">
                        Labore adipisicing quis culpa esse exercitation.
					</p>
					<p className="footerContent">
                        Labore adipisicing quis culpa esse exercitation.
					</p>
				</div>
				<div className="footerDiv col-3">
					<p className="footerContent">
                        Labore adipisicing quis culpa esse exercitation.
					</p>
					<p className="footerContent">
                        Labore adipisicing quis culpa esse exercitation.
					</p>
					<p className="footerContent">
                        Labore adipisicing quis culpa esse exercitation.
					</p>
				</div>
				<div className="footerDiv col-3">
					<p className="footerContent">
                        Labore adipisicing quis culpa esse exercitation.
					</p >
					<p className="footerContent">
                        Labore adipisicing quis culpa esse exercitation.
					</p>
					<p className="footerContent">
                        Labore adipisicing quis culpa esse exercitation.
					</p>
				</div>    
			</div>
		);
	}
}

export default Footer;