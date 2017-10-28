const express = require('express')
const passport = require('passport')
//GoogStrat, that's short for GoogleStrategy yay
const GoogStrat = require('passport-google-oatuh20').Strategy
const app = express()

//!!!!DO NOT PUSH THIS TO GITHUB!!!!!
//client ID 9914596456-6su3e2mh73n9ar4pp47080r9gk0i8rhl.apps.googleusercontent.com
//client seceret 1BNjFpH2UGwbt0Ad-czBbfcy
passport.use(new GoogStrat())


const PORT = process.env.PORT || 4200
app.listen(PORT)