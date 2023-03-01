Feature: Free CRM Login Feature

Scenario Outline: Free CRM Login Test Scenario


Given user is already on Login Page
When title of login page
Then user enters "<username>" and "<password>"
Then user clicks on login button
Then user get error for email
Then user select profile 
Then user edit intro "<fName>" and "<LNAme>" and "<addNAme>"
Then user click login button
Then user quit

Examples:
	| username | password | fName | LNAme |addNAme |
	| patelpoojaa1432@gmail.com  | 8153866233p |  punii | pooooooooooo |Pooja |
	|  tom     | test456  | tommm  | fhgdjhg | | pooooooooooo |
		







