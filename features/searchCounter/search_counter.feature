Feature: Search counter

  Scenario: Not enters text in search input
    Given User is in the main screen with any counters
    When The user "<text>" in search input
    And Press enter in your keyboard
    Then User can see "<counters>"

  Examples:
      | text             | counters         |
      | enters text      | specific counter | 
      | not enters text  | any counters     |