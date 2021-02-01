const assert = require("assert");
const { Given, When, Then } = require("@cucumber/cucumber");

function creationNewCounter(text) {
  if (text === "enters") {
    return "create";
  } else {
    return "not create";
  }
}

Given("The user is in the modal Create counter", function () {

});

When("The user {string} in the input the new counter", function (text) {
  this.text = text;
});

When("Click in the Save button", function () {
  
});

Then("The user is {string} new counter", function (expectedAnswer) {
  this.actualAnswer = creationNewCounter(this.text);
  assert.equal(this.actualAnswer, expectedAnswer);
});
