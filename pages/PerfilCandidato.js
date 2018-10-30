import Link from 'next/link';
import '../scss/style.scss';
import MenuVertical from '../components/menuVertical.js';
import Header from '../components/Header.js';
import Footer from '../components/footer.js'

const PerfilCandidato = () => (
	<section>
		<Header />
		<MenuVertical />
		<Footer />
		<Link href="/about">
			<a title="About NextJs">Teste</a>
		</Link>
		
	</section>
);

export default PerfilCandidato;