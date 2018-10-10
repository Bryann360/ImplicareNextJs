import Link from "next/link";
import "../scss/style.scss";


const Index = () => (
	<section>
		<h1>Hello</h1>
		<Link href="/about">
			<a title="About NextJs">AboutShit</a>
		</Link>
	</section>
);

export default Index;