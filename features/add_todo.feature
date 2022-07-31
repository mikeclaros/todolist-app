Feature: List with Todos
    a list to hold todos

  Scenario: A todo is thought of and needs to be written down
    Given A "<todo>" is ready to be written
    When I enter my todo into an entryList
    Then My "<todo>" is listed at the top of my entryList

  Examples:
    | todo            | entryList               |
    | example todo    | example todo |