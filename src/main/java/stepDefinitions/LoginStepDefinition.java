package stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefinition{

	 WebDriver driver;
		
		@Given("^user is already on Login Page$")
		public void user_is_already_on_Login_Page() {
			 System.setProperty("webdriver.gecko.driver","C:\\QA\\Seleniumjars\\geckodriver.exe");
			  driver = new FirefoxDriver();
			  driver.get("https://www.linkedin.com/home");
		}
		
		
		@When("^title of login page$")
		public void user_enters_and()  {
			 String title = driver.getTitle();
			 System.out.println(title);
			 Assert.assertEquals("LinkedIn: Log In or Sign Up", title);
		 
		}
	
		@Then("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
		public void user_enters_and(String username, String password)  {
			 driver.findElement(By.xpath("//input[@id='session_key']")).sendKeys(username);
		     driver.findElement(By.xpath("//input[@id='session_password']")).sendKeys(password);
		 
		}
		
		@Then("^user clicks on login button$")
		public void user_clicks_on_login_button() {
			WebElement loginBtn = driver.findElement(By.xpath("//button[@type='submit']"));
			 JavascriptExecutor js = (JavascriptExecutor)driver;
			 js.executeScript("arguments[0].click();", loginBtn);
					
		}
		
		@Then("^user get error for email$")
		public void user_get_error_for_email() throws Throwable {
			String actualErr = driver.findElement(By.xpath("//p[@class='alert-content']")).getText();  
			String expectedErr = "Please enter a valid email address or mobile number.";
		     System.out.println(actualErr);   
		 
		}
				 
		@Then("^user select profile$")
		public void user_select_profile() throws InterruptedException  {
			Thread.sleep(4000);
			 driver.findElement(By.xpath("//a[contains(@class,'global-nav__primary-link--active global-nav__primary-link')]//div[contains(@class,'')]//div[contains(@class,'')]")).click();
			 driver.findElement(By.xpath("//div[contains(@class,'t-16 t-black t-bold')]")).click();
			 driver.findElement(By.xpath("//div[contains(@class,'pv-top-card__badge-wrap')]//div")).click();
				
		}
		
		@Then("^user edit intro \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
		public void user_edit_intro_and(String fName,String LName, String AddNAme) throws InterruptedException {
			Thread.sleep(4000);
			driver.findElement(By.cssSelector("#single-line-text-form-component-profileEditFormElement-TOP-CARD-profile-ACoAAC4h8CUBfY44yxU0Ond-q-ImKV8CRb8GvEk-firstName")).sendKeys(fName);
			driver.findElement(By.cssSelector("#single-line-text-form-component-profileEditFormElement-TOP-CARD-profile-ACoAAC4h8CUBfY44yxU0Ond-q-ImKV8CRb8GvEk-lastName")).sendKeys(LName);
			driver.findElement(By.cssSelector("#single-line-text-form-component-profileEditFormElement-TOP-CARD-profile-ACoAAC4h8CUBfY44yxU0Ond-q-ImKV8CRb8GvEk-maidenName")).sendKeys(AddNAme);
			
		}
		
		@Then("^user click login button$")
		public void user_click_login_button(){
			WebElement loginBtn = driver.findElement(By.xpath("//span[contains(@class,'artdeco-button__text')][text()='Save']"));
			 JavascriptExecutor js = (JavascriptExecutor)driver;
			 js.executeScript("arguments[0].click();", loginBtn);
				
		}
		
		@Then("^user quit$")
		public void close_the_browser() {
			 driver.quit();
		}


}
