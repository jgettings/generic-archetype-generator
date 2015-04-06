module.exports = {
	name: "Default",
	allProjects: true,
	questions: [{
			message: "Enter wiki project key",
			name: "wiki-key",
			type: "input"
		}, {
			message: "Enter jira project key",
			name: "jira-key",
			type: "input"
		}],
	filterValues: {
		"wiki-base-url": "https://confluence/display/",
		"jira-base-url": "https://jira/browse/",
	}
};