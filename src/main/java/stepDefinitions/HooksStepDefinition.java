package stepDefinitions;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HooksStepDefinition {
	
		@Before
		public void setUP(){
			System.out.println("launch FF");
			System.out.println("Enter URL for Free CRM APP");
		}
		
		@After
		public void tearDown(){
			System.out.println("close the browser");
		
		}
		
		@Given("^user is on Group page$")
		public void user_is_on_Group_page()  {
		
			System.out.println("user is on Group page");
		   
		}
	
		@When("^user fills the Group form$")
		public void user_fills_the_Group_form()  {
			System.out.println("user fills the Group form");
		   
		}
	
		@Then("^Group is created$")
		public void group_is_created()  {
			System.out.println("Group is created");
		   
		}
	
		@Given("^user is on Event page$")
		public void user_is_on_Event_page()  {
			System.out.println("user is on Event page");
		   
		}
	
		@When("^user fills the Event form$")
		public void user_fills_the_Event_form()  {
			System.out.println("user fills the Event form");
		   
		}
	
		@Then("^Event is created$")
		public void event_is_created()  {
		    
			System.out.println("Event is created");
		}


}
