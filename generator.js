var fs = require("fs");
var types = require("./types");
var extend = require("extend");

var options = {};

module.exports = {
	generate: function(answers) {
		options = answers;
		options["project-title"] = createTitleString(options["project-name"]);
		options = extend(options, types.getByValue(options["project-type"]).filterValues);
		options = extend(options, types.getDefault().filterValues);

		var copyFromDefault = __dirname + "/archetypes/default/files";
		var copyFrom = __dirname + "/archetypes/" + answers["project-type"] + "/files";
		var copyTo = process.cwd() + "/" + answers["project-name"];

		recursiveCopyDirectoryAndApplyFilters(copyFromDefault, copyTo);
		recursiveCopyDirectoryAndApplyFilters(copyFrom, copyTo);
	}
};

function recursiveCopyDirectoryAndApplyFilters(from, to) {
	if (!fs.existsSync(to)) {
		fs.mkdirSync(to);
	}

	fs.readdir(from, function(err, files) {
		for (var i in files) {
			var file = from + "/" + files[i];
			if (fs.statSync(file).isDirectory()) {
				recursiveCopyDirectoryAndApplyFilters(file, to + "/" + files[i]);
			} else {
				copyFileAndApplyFilter(file, to + "/" + files[i]);
			}
		}
	});
}

function copyFileAndApplyFilter(from, to) {
	fs.readFileSync(from).toString().split('\n').forEach(function (line) { 
    	fs.appendFileSync(to, applyFilters(line.toString()) + "\n");
	});
}

function applyFilters(line) {
	for (var i in options) {
		line = line.replace("${" + i + "}", options[i]);
	}
	return line;
}

function createTitleString(string) {
    return string.replace(/-/g, ' ').replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};
