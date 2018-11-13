import Link from 'next/link';
import '../scss/style.scss';
import Header from '../components/Header.js';



export default class Login extends React.Component {
	

	constructor(props) {
		super(props);

		this.set.state = ({
	      cpf: null,
	      senha: null,
	      person:{}
	    });
	}


	
    Logn = (e) => {
		
  	}




	render() {
		return (
			<section>
				<Header />
				<form onSubmit={this.Logn}>
				</form>
			</section>
		);
	}
}

