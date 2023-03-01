$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "title of login page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user get error for email",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user select profile",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user edit intro \"\u003cfName\u003e\" and \"\u003cLNAme\u003e\" and \"\u003caddNAme\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user click login button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user quit",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "fName",
        "LNAme",
        "addNAme"
      ],
      "line": 17,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "patelpoojaa1432@gmail.com",
        "8153866233p",
        "punii",
        "pooooooooooo",
        "Pooja"
      ],
      "line": 18,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;2"
    },
    {
      "cells": [
        "tom",
        "test456",
        "tommm",
        "fhgdjhg",
        "",
        "pooooooooooo"
      ],
      "line": 19,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "title of login page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters \"patelpoojaa1432@gmail.com\" and \"8153866233p\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user get error for email",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user select profile",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user edit intro \"punii\" and \"pooooooooooo\" and \"Pooja\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user click login button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user quit",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 4604094701,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_and()"
});
formatter.result({
  "duration": 11196101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "patelpoojaa1432@gmail.com",
      "offset": 13
    },
    {
      "val": "8153866233p",
      "offset": 45
    }
  ],
  "location": "LoginStepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "duration": 855595900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 114835801,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_get_error_for_email()"
});
formatter.result({
  "duration": 62998400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_select_profile()"
});
formatter.result({
  "duration": 6568568400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "punii",
      "offset": 17
    },
    {
      "val": "pooooooooooo",
      "offset": 29
    },
    {
      "val": "Pooja",
      "offset": 48
    }
  ],
  "location": "LoginStepDefinition.user_edit_intro_and(String,String,String)"
});
formatter.result({
  "duration": 4266780800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_login_button()"
});
formatter.result({
  "duration": 50239700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 1161558700,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "title of login page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters \"tom\" and \"test456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user get error for email",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user select profile",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user edit intro \"tommm\" and \"fhgdjhg\" and \"\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user click login button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user quit",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 4422221099,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_and()"
});
formatter.result({
  "duration": 10450200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tom",
      "offset": 13
    },
    {
      "val": "test456",
      "offset": 23
    }
  ],
  "location": "LoginStepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "duration": 874790400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 100583700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_get_error_for_email()"
});
formatter.result({
  "duration": 47382201,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_select_profile()"
});
formatter.result({
  "duration": 4020582900,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: //a[contains(@class,\u0027global-nav__primary-link--active global-nav__primary-link\u0027)]//div[contains(@class,\u0027\u0027)]//div[contains(@class,\u0027\u0027)]\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DREAM\u0027, ip: \u0027192.168.1.70\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 110.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20230227191043, moz:geckodriverVersion: 0.31.0, moz:headless: false, moz:platformVersion: 10.0, moz:processID: 33988, moz:profile: C:\\Users\\miyan\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, moz:windowless: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: e5a01ab3-896f-4d22-859e-cab50fc75347\n*** Element info: {Using\u003dxpath, value\u003d//a[contains(@class,\u0027global-nav__primary-link--active global-nav__primary-link\u0027)]//div[contains(@class,\u0027\u0027)]//div[contains(@class,\u0027\u0027)]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepDefinitions.LoginStepDefinition.user_select_profile(LoginStepDefinition.java:60)\r\n\tat ✽.Then user select profile(login.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "tommm",
      "offset": 17
    },
    {
      "val": "fhgdjhg",
      "offset": 29
    },
    {
      "val": "",
      "offset": 43
    }
  ],
  "location": "LoginStepDefinition.user_edit_intro_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("message.feature");
formatter.feature({
  "line": 1,
  "name": "message data creation",
  "description": "",
  "id": "message-data-creation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM Create a new message scenario",
  "description": "",
  "id": "message-data-creation;free-crm-create-a-new-message-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is already Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title login page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters username and password",
  "rows": [
    {
      "cells": [
        "patelpoojaa1432@gmail.com",
        "8153866233p"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user get error",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user is home page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user moves to new message page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user enters deal details",
  "rows": [
    {
      "cells": [
        "milanmiyani37@gmail.com hii, this is pooja for testing ......."
      ],
      "line": 15
    },
    {
      "cells": [
        "milanmiyani37@gmail.com hi"
      ],
      "line": 16
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MessageStepDefinition.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 4144881801,
  "status": "passed"
});
formatter.match({
  "location": "MessageStepDefinition.user_enters_and()"
});
formatter.result({
  "duration": 3883600,
  "status": "passed"
});
formatter.match({
  "location": "MessageStepDefinition.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 731414901,
  "status": "passed"
});
formatter.match({
  "location": "MessageStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 93440901,
  "status": "passed"
});
formatter.match({
  "location": "MessageStepDefinition.user_get_error_for_email()"
});
formatter.result({
  "duration": 63731800,
  "status": "passed"
});
formatter.match({
  "location": "MessageStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 4002640099,
  "status": "passed"
});
formatter.match({
  "location": "MessageStepDefinition.user_moves_to_new_message_page()"
});
formatter.result({
  "duration": 3250787000,
  "status": "passed"
});
formatter.match({
  "location": "MessageStepDefinition.user_enters_deal_details(DataTable)"
});
formatter.result({
  "duration": 1010856600,
  "status": "passed"
});
formatter.match({
  "location": "MessageStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 1000282500,
  "status": "passed"
});
});