var api = require('./../controller/userAPI.js');

module.exports = function(app){
	app.get('/login', function(req, res){
		res.render('index')
	})


}