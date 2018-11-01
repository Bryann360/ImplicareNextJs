import Link from 'next/link';
import '../scss/style.scss';
import MenuVertical from '../components/menuVertical.js';
import $ from 'jquery';
import Header from '../components/Header.js';
import Footer from '../components/footer.js'



const Index = () => (
	  <html>
        <head>
          <script src="/static/jquery.js"></script>
          <script>
          	function ajaxCall()
			    {
				    $.ajax({
				        type: 'GET',
				        dataType:"html",
				        url: "http://localhost:7001/Macaw/MacawServlet",
				        success:function(data){
				         alert(data);
				        },
				    error:function(){
				         alert("failure");
				        }                   
				    })
			    }
          </script>
        </head>
        <body>
			<section>
				<Header />
				<MenuVertical />
				<Footer />
				<Link href="/about">
					<a title="About NextJs">Teste</a>
				</Link>
			</section>
		</body>
      </html>
);

export default Index;