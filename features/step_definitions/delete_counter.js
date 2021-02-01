const assert = require("assert");
const { Given, When, Then } = require("@cucumber/cucumber");

function creationNewCounter(selected, click) {
  if (selected === "selected counter" && click === "delete button") {
    return "deleted";
  } else {
    return "not deleted";
  }
}

Given("User is with a {string}", function (selected) {
  this.selected = selected;
});

When("User clicks in the delete button", function () {});

When("Click {string} from the modal", function (click) {
  if (this.selected === "selected counter") {
    this.click = click;
  }
});

Then("User {string} a counter", function (expectedAnswer) {
  this.actualAnswer = creationNewCounter(this.selected, this.click);
  assert.equal(this.actualAnswer, expectedAnswer);
});
