import '../scss/style.scss'
import Link from 'next/link'
import MenuVertical from '../components/menuVertical.js'
import Header from '../components/Header.js'
import Footer from '../components/footer.js'
import fetch from 'isomorphic-unfetch'


export default class index extends React.Component {
	
	static async getInitialProps(){
	  const res = await fetch('http://localhost:8080/ImplicareApplication/ListarAreaEstudo')
	  const data = await res.json()	
	  return {data: data} 
	}



	render() {

		const datas = Array.from(this.props.data)

		return (

			
				<section>

			    		
						    <Header />
							<MenuVertical />
							<Footer />
							<ul>			
								<Link href="/Login">
							      <a>Log In</a>
							    </Link>
						      {datas.map(content => <li key={content.Cod_Area_Estudo}><h3>{content.Cod_Area_Estudo}</h3></li>)}
						    </ul>

				</section>
	

		);
	}
}
