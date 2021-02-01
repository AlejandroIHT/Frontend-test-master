Feature: Select counter

  Scenario Outline: 
    Given The user is in main page from platform and have counters
    When The user is click in any counter
    And The counter was "<status>"
    Then The user can see "<buttons>"

  Examples:
      | status       | buttons                         |
      | clicked      | nothing                         |
      | not clicked  | delete button and share button  |