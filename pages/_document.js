import Document, { Head, Main, NextScript} from 'next/document';
import '../scss/style.scss';

export default class MyDocument extends Document {
	render(){
		return(
			<html>
				<Head>
					
						
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}