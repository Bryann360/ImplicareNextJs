import Link from "next/link";
import "../scss/style.scss";
import MenuVertical from "../components/menuVertical.js";
import Header from "../components/Header.js";


const Index = () => (
	<section>
		<Header />
		<MenuVertical />
		<Link href="/about">
			<a title="About NextJs">AboutShit</a>
		</Link>
	</section>
);

export default Index;