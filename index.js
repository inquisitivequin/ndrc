const express = require('express')
const passport = require('passport')
//GoogStrat, that's short for GoogleStrategy yay
const GoogStrat = require('passport-google-oauth20').Strategy
const app = express()
const keys = require('./config/keys')


passport.use(
	new GoogStrat({
	    clientID: keys.googleClientID,
	    clientSecret: keys.googleClientSecret,
	    callbackURL: 'auth/google/callback'
	  },
	    accessToken => {
	    	console.log('access Token', accessToken)
	    	
	  })
	);


app.get(
	'auth/google', 
	passport.authenticate('google', {
		scope: ['profile', 'email']
}))

 


const PORT = process.env.PORT || 4200
app.listen(PORT)