const assert = require("assert");
const { Given, When, Then } = require("@cucumber/cucumber");

function searchCounter(text) {
  if (text === "enters text") {
    return "specific counter";
  } else {
    return "any counters";
  }
}

Given("User is in the main screen with any counters", function () {

});

When("The user {string} in search input", function (text) {
  this.text = text;
});

When("Press enter in your keyboard", function () {
  
});

Then("User can see {string}", function (expectedAnswer) {
  this.actualAnswer = searchCounter(this.text);
  assert.equal(this.actualAnswer, expectedAnswer);
});