
const { Given, When, Then } = require('@cucumber/cucumber')
const assert = require('assert')
const exp = require('constants')

var list = ["entry1", "entry2"]

function entryList(todo) {
    list.unshift(todo)
    return list
}

Given('A {string} is ready to be written', function (todo) {
    console.log(`Todo to be written: ${todo}`)
    this.todo = todo
});

When('I enter my todo into an entryList', function () {
    this.list = entryList(this.todo)
});

Then('My {string} is listed at the top of my entryList', function (todo) {
    let actual = this.list[0]
    let expected = todo
    assert.strictEqual(actual, expected)
});


