const assert = require("assert");
const { Given, When, Then } = require("@cucumber/cucumber");

function selectCounter(status) {
  if (status === "clicked") {
    return "nothing";
  } else {
    return "delete button and share button";
  }
}

Given("The user is in main page from platform and have counters", function () {

});

When("The user is click in any counter", function () {

});

When("The counter was {string}", function (status) {
  this.status = status;
});

Then("The user can see {string}", function (expectedAnswer) {
  this.actualAnswer = selectCounter(this.status);
  assert.equal(this.actualAnswer, expectedAnswer);
});
