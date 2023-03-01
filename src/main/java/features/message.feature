Feature: message data creation

Scenario: Free CRM Create a new message scenario

Given user is already Login Page
When title login page
Then user enters username and password
| patelpoojaa1432@gmail.com | 8153866233p |

Then user clicks login button
Then user get error
Then user is home page
Then user moves to new message page
Then user enters deal details
| milanmiyani37@gmail.com hii, this is pooja for testing ....... |
| milanmiyani37@gmail.com hi |

Then Close the browser