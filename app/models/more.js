// MODEL more
var mongoose = require('mongoose');


var moreSchema = new mongoose.Schema({
  description: String
});

var More = {
    
    model: mongoose.model('More', moreSchema),
    
    create: function(req, res) {
		More.model.create({
			description: req.body.description
		}, function(){
			res.sendStatus(200);
		})
	},

	findAll: function(req, res) {
		More.model.find(function (err, data) {
			res.send(data);
		});
	},

	update: function(req, res){
		More.model.findByIdAndUpdate(req.params.id, {
			description: req.body.description
		}, function(){
			res.sendStatus(200);
		})
	},

	delete: function(req, res){
		More.model.findByIdAndRemove(req.params.id, function(){
			res.sendStatus(200);
		})
	} 
}

module.exports = More;