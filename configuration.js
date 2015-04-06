
var types = require("./types");

module.exports = {
	questions: [{
	    message: "Select a Project Type",
	    name: "project-type",
	    type: "list",
	    choices: types.getTypes(),
    }, {
		message: "Enter Project Name",
		name: "project-name",
		type: "input",
		default: "Test Project",
		filter: function(value) {
			return value.replace(/\s+/g, '-').toLowerCase();
		},
		validate: function(value) {
			return value !== "";
		}
	}, {
		message: "Enter a project description",
		name: "project-description",
		type: "input"
	}]
};

