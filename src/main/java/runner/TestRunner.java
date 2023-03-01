package runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;


import cucumber.api.testng.CucumberFeatureWrapper;
import cucumber.api.testng.TestNGCucumberRunner;


	@RunWith(Cucumber.class)
	@CucumberOptions(
			features = "C:\\QA\\Selenium_Workspace\\BDDCrmTest\\src\\main\\java\\features\\", //the path of the feature files
			glue={"stepDefinitions"}, //the path of the step definition files
			format= {"pretty","html:test-outout", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"}, //to generate different types of reporting
			monochrome = true, //display the console output in a proper readable format
			strict = true, //it will check if any step is not defined in step definition file
			dryRun = false //to check the mapping is proper between feature file and step def file
			//tags = {"~@SmokeTest" , "~@RegressionTest", "~@End2End"}			
			)
	
public class TestRunner {

		 private TestNGCucumberRunner testNGCucumberRunner;
		 
		    @BeforeClass(alwaysRun = true)
		    public void setUpClass() throws Exception {
		        testNGCucumberRunner = new TestNGCucumberRunner(this.getClass());
		    }
		 
		    @Test(groups = "cucumber", description = "Runs Cucumber Feature", dataProvider = "features")
		    public void feature(CucumberFeatureWrapper cucumberFeature) {
		        testNGCucumberRunner.runCucumber(cucumberFeature.getCucumberFeature());
		    }
		 
		    @DataProvider
		    public Object[][] features() {
		        return testNGCucumberRunner.provideFeatures();
		    }
		 
		    @AfterClass(alwaysRun = true)
		    public void tearDownClass() throws Exception {
		        testNGCucumberRunner.finish();
		    }
}
