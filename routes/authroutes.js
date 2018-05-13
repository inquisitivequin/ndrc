const passport = require('passport');

module.exports = (app) => {
	app.get(
		'/google', 
		passport.authenticate('google', {
			scope: ['profile', 'email']
		})
	);

	app.get(
		'/auth/google/callback', passport.authenticate('google'))

	app.get(
		'/potato/bye', (req,res) => {
			req.logout()
			res.send(req.user)
		})

	app.get(
		'/potato/chip', (req, res) => {
			res.send(req.user)
		})
};