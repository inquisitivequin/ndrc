const express = require('express')
const passport = require('passport')
//GoogStrat, that's short for GoogleStrategy yay
const GoogStrat = require('passport-google-oatuh20').Strategy
const app = express()
const keys = require('./config/keys')


passport.use(new GoogleStrat({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://www.example.com/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

app.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/users/' + req.user.username);
  });


const PORT = process.env.PORT || 4200
app.listen(PORT)