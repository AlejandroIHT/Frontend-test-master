Feature: Create new counter

  Scenario Outline: Creation counter
    Given The user is in the modal Create counter
    When The user "<text>" in the input the new counter
    And Click in the Save button
    Then The user is "<counter>" new counter

  Examples:
      | text        | counter     |
      | enters      | create      |
      | not enters  | not create  |