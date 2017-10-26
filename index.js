const express = require('express')
const app = express()

app.get('/', (req, res) => {
	res.send({hey: 'fool'})
})


const PORT = process.env.PORT || 4200
app.listen(PORT)