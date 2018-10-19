const express = require('express');
const next = require('next');

const PORT = process.env.PORT || 8081
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
	.prepare()
	.then(() => {
		const server = express();

		server.get("*", (req, res) => {
			return handle(req, res);
		});

		server.listen(PORT, err =>{
			if(err) throw err;
			console.log('> Ready on ${PORT}');
		});

		server.get("/ListarAreaEstudo", (req, res) => {
			res.send(req.params);
		});

	})
	.catch(ex => {
		console.error(ex.stack);
		process.exit(1);
	});