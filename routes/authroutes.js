const passport = require('passport');

module.exports = (app) => {
	app.get(
		'/google', 
		passport.authenticate('google', {
			scope: ['profile', 'email']
		})
	);

	app.get(
		'/auth/google/callback',
		passport.authenticate('google'))
}