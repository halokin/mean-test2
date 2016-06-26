// ROUTES mores
var More = require('../models/more.js');
module.exports 	= function(app) {

	app.get('/mores', More.findAll);
	app.post('/mores', More.create);
	app.put('/mores/:id', More.update);
	app.delete('/mores/:id', More.delete);
    
}