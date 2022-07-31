Feature: Delete todo from list
remove a todo that is completed from todo list

Scenario: A todo is finished and needs to be removed
    Given a list of Todos
    And a todo that is finished
    When I click on the todo
    Then the todo is removed from the list