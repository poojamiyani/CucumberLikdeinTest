package stepDefinitions;

import java.sql.Driver;
import java.util.List;
import org.junit.Assert;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MessageStepDefinition {

	 WebDriver driver;
	 
		@Given("^user is already Login Page$")
		public void user_is_already_on_Login_Page() {
			 System.setProperty("webdriver.gecko.driver","C:\\QA\\Seleniumjars\\geckodriver.exe");
			  driver = new FirefoxDriver();
			  driver.get("https://www.linkedin.com/home");
		}
		
		@When("^title login page$")
		public void user_enters_and()  {
			 String title = driver.getTitle();
			 System.out.println(title);
			 Assert.assertEquals("LinkedIn: Log In or Sign Up", title);
		 
		}
		
		@Then("^user enters username and password$")
		public void user_enters_username_and_password(DataTable credentials)  {
			List<List<String>> data = credentials.raw();
			driver.findElement(By.xpath("//input[@id='session_key']")).sendKeys(data.get(0).get(0));
		     driver.findElement(By.xpath("//input[@id='session_password']")).sendKeys(data.get(0).get(1));
		  
		}
		
		@Then("^user clicks login button$")
		public void user_clicks_on_login_button() {
			WebElement loginBtn = driver.findElement(By.xpath("//button[@type='submit']"));
			 JavascriptExecutor js = (JavascriptExecutor)driver;
			 js.executeScript("arguments[0].click();", loginBtn);
					
		}
		
		@Then("^user get error$")
		public void user_get_error_for_email() throws Throwable {
			String actualErr = driver.findElement(By.xpath("//p[@class='alert-content']")).getText();  
			String expectedErr = "Please enter a valid email address or mobile number.";
		     System.out.println(actualErr);   
		 
		}
		
		@Then("^user is home page$")
		public void user_is_on_home_page() throws InterruptedException  {
			Thread.sleep(4000);
			String title = driver.getTitle();
			System.out.println("Home Page title ::::::::::::::::::::::::::::::::::::::::"+ title);
			
		}
		
		@Then("^user moves to new message page$")
		public void user_moves_to_new_message_page() throws InterruptedException  {

			Thread.sleep(3000);
			driver.findElement(By.xpath("//div[contains(@class,'share-box-feed-entry__top-bar')]")).click();
					
		}
		
		@Then("^user enters deal details$")
		public void user_enters_deal_details(DataTable dealData)  {
			 List<List<String>> dealValues =  dealData.raw();
			 System.out.println(dealValues+"---------------------------------dvalue");
			 System.out.println(dealData+"dealdata>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
			 driver.findElement(By.xpath("//div[contains(@class,'ql-editor ql-blank')]")).sendKeys(dealValues.get(0).get(0));
			 driver.findElement(By.xpath("//div[contains(@class,'share-box_actions')]")).click();
			 
		}
		
		@Then("^Close the browser$")
		public void close_the_browser()  {
		  driver.quit();
		}


}
