Feature: Visits welcome screen?

  Scenario Outline: See the welcome screen
    Given The user is in main page from platform
    When The user is "<times>" in platform
    Then The user can see the "<screen>"

  Examples:
    | times          | screen          |
    | First time     | WelcomeScreen   |
    | Anytimes       | MainScreen      |