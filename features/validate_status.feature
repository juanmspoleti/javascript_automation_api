Feature: Example API validation of the response status


    Scenario Outline: I want to validate status <status> of the API
        Given I make a GET request to "https://httpbin.org/status/<status>"
        When I receive a response
        Then status is <status>
        Examples:
            | status |
            | 200    |
            | 400    |
            | 500    |

    Scenario Outline: I want to validate the example GET response from mock server
        Given I make a GET request to "http://localhost:3000/example-response"
        When I receive a response
        Then status is <status>
        Examples:
            | status |
            | 200    |