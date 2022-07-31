const { Given, When, Then } = require('@cucumber/cucumber')
const assert = require('assert')
const exp = require('constants')

var list = ["entry1", "entry2", "entry3"]
// function GetList() {
//     return list
// }

function delTodo(entryToDelete, list){
    for(let i = 0; i < list.length; i++){
        if(list[i] === entryToDelete){
            list.splice(i,1)
        }
    }

    return list
}

Given('a list of Todos', function () {
    //this.list = GetList()
    this.list = list
})

Given('a todo that is finished', function () {
    this.finishedTodo = this.list[1]
})

When('I click on the todo', function () {
   this.list = delTodo(this.finishedTodo, this.list)
})

Then('the todo is removed from the list', function () {
    let actual = !this.list.includes(this.finishedTodo)
    assert(actual == true, "list does not have the finished todo")
})