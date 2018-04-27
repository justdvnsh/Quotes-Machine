const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const hbs = require('hbs');

const axios = require('axios');

app.set('view engine', 'hbs');
app.use(bodyParser.json())

app.use(express.static(__dirname + '/assets'))

app.get('/', (req, res) => {

	let quotes , author;

	axios.get('https://talaikis.com/api/quotes/random/')
		.then(result => {
			console.log(result.data)
			quotes = result.data.quote
			author = result.data.author
			res.render('index.hbs', {quotes, author})
		}).catch(e => console.log(e))

})
app.listen(3000, (err) => {
	return	err ? console.log(err) : console.log('Server is running on 3000 port')
})
