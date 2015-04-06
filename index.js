#! /usr/bin/env node

console.log("==============================================");
console.log("|            Archetype Generator             |");
console.log("==============================================");


var inquirer = require("inquirer");
var extend = require("extend");

var configuration = require("./configuration");

var generator = require("./generator");
var types = require("./types");

var questions = configuration.questions.concat(types.getDefault().questions);


askAndGenerate(questions, {}, function(answers) {
  var type = types.getByValue(answers["project-type"]);
  if (type) {
    askAndGenerate(type.questions, answers, generator.generate);
  }
});

function askAndGenerate(questions, answers, next) {
  if (questions.length) {
    inquirer.prompt(questions, function(newAnswers) {
      next(extend(answers, newAnswers));
    });
  } else {
    next(answers);
  }
}
