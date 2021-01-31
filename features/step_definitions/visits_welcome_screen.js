const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function visitsWelcomeScreen(time) {
  if (time === "First time") {
    return "WelcomeScreen";
  } else {
    return "MainScreen";
  }
}

Given('The user is in main page from platform', function () {

});

When('The user is {string} in platform', function (times) {
  this.time = times;
});

Then('The user can see the {string}', function (expectedAnswer) {
  this.actualAnswer = visitsWelcomeScreen(this.time);
  assert.equal(this.actualAnswer, expectedAnswer);
});
