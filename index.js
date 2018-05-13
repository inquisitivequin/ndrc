const express = require('express')
const mongoose = require('mongoose')
const keys = require('./config/keys')
const cookSes = require('cookie-session')
const passport = require('passport')
require('./models/User')
require('./services/passport')

mongoose.connect(keys.mong)

const app = express()

app.use(
	cookSes({
		maxAge: 30 * 24* 60 * 60 * 1000,
		keys: [keys.cookKey]
	}))

app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoutes')(app)

const PORT = process.env.PORT || 4200
app.listen(PORT)