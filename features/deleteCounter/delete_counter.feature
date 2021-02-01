Feature: Delete counter

  Scenario Outline: Delete a counter
    Given User is with a "<selected>"
    When User clicks in the delete button
    And Click "<click>" from the modal
    Then User "<success>" a counter

  Examples:
      | selected              | click          | success      |
      | selected counter      | delete button  | deleted      |
      | selected counter      | cancel button  | not deleted  |
      | not selected counter  |                | not deleted  |