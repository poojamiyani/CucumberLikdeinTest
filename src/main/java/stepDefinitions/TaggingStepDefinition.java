package stepDefinitions;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;

public class TaggingStepDefinition {

	   @Before
		public void beforeScenario(){
		      System.out.println("This will run before the Scenario");
		      
		  }	
			
		@After
	     public void afterScenario(){
		      System.out.println("This will run after the Scenario");
		      
		 }
		
		@Given("^This is a valid login test$")
		public void this_is_a_valid_login_test()  {
			 System.out.println("This is a valid login test");
		   
		}
		
		@Given("^This is a invalid login test$")
		public void this_is_a_invalid_login_test()  {
			 System.out.println("This is a invalid login test");
		   
		}
		
		@Given("^This is a group test case$")
		public void this_is_a_group_test_case()  {
			 System.out.println("This is a group test case");
		   
		}
		
		@Given("^This is a event test case$")
		public void this_is_a_event_test_case()  {
			 System.out.println("This is a event test case");
		   
		}
		
		@Given("^This is a myNetwork test case$")
		public void this_is_a_myNetwork_test_case()  {
			 System.out.println("This is a myNetwork test case");
		   
		}
		
		@Given("^This is a search call test$")
		public void this_is_a_search_call_test()  {
			 System.out.println("This is a search call test");
		   
		}
		
		@Given("^This is a search email test$")
		public void this_is_a_search_email_test()  {
			 System.out.println("This is a search email test");
		   
		}
		
		@Given("^This is a search job test$")
		public void this_is_a_search_job_test()  {
			 System.out.println("This is a search job test");
		   
		}
		
		@Given("^This is a report test$")
		public void this_is_a_report_test()  {
			 System.out.println("This is a report test");
		   
		}
		
		@Given("^This is a logout test$")
		public void this_is_a_logout_test()  {
			 System.out.println("This is a logout test");
		   
		}
		
		@Given("^This is a close broswer test$")
		public void this_is_a_close_broswer_test()  {
			 System.out.println("This is a close broswer test");
		   
		}


}
