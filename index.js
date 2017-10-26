const express = require('express')
const passport = require('passport')
//GoogStrat, that's short for GoogleStrategy yay
const GoogStrat = require('passport-google-oatuh20').Strategy
const app = express()

passport.use(new GoogStrat())


const PORT = process.env.PORT || 4200
app.listen(PORT)