var fs = require("fs");


var typeDirs = fs.readdirSync(__dirname + "/archetypes");
var types = [];
var defaultType = {};

for (var i in typeDirs) {
	var type = require("./archetypes/" + typeDirs[i] + "/config");
	type.key = i;
	type.value = typeDirs[i];
	if (type.allProjects) {
		defaultType = type;
	} else {
		types.push(type);
	}
}

module.exports = {
	getTypes: function() {
		return types;
	},
	getByValue: function(value) {
		for (var i in types) {
			if (types[i].value == value) {
				return types[i];
			}
		}
	},
	getDefault: function() {
		return defaultType;
	}
};