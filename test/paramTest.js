const { Builder, By, Key } = require("selenium-webdriver");
const assert = require("assert");
var should = require("chai").should();
const ItCapabilitis = require("../capabilities");

// describe blocs
describe("My second test", function () {
   var driver;
   
   //username
   const username = ItCapabilitis.capabilities.user;

   //accessKey
    const accessKey = ItCapabilitis.capabilities.accessKey;

   //host
   const host = "hub.lambdatest.com/wd/hub";

   //url
   const url = "https://" + username + ":" + accessKey + "@" + host; 

  beforeEach(function(){
      ItCapabilitis.capabilities.name = this.currentTest.title;
      driver = new Builder()
      .usingServer(url)
      .withCapabilities(ItCapabilitis.capabilities)
      .build();

  });

    afterEach(async function(){
      await driver.quit();
  });

  var browsers = [
      {browserName: "chrome", version: "latest", platform: "Windows 10"},
      {browserName: "firefox", version: "latest", platform: "Windows 10"},
      {browserName: "MicrosoftEdge", version: "latest", platform: "Windows 10"}
  ]

  browsers.forEach(({browserName, version, platform}) =>{
     // it bloc
  it("should add a todo to this test, it will run", async function () {
    // launch the browser
    // let driver = await new Builder().forBrowser("chrome").build();
    
    Itcapabilitis.capabilities.platformName = platform;
    Itcapabilitis.capabilities.browserVersion = version;
    Itcapabilitis.capabilities.browserName = browserName;

    // navigate to our application
    await driver.get("https://dummyjson.com/products");

    // add a todo
    await driver
      .findElement(By.id("add-todo"))
      .sendKeys("Learn Selenium", Key.RETURN);

    //assert
    let todoText = await driver
      .findElement(By.xpath("//"))
      .getText()
      .then(function (value) {
        return value; 
      });

    // assert using node assertion
    // assert.strictEqual(todoText, "Learn Selenium");

    //assert using chai should
    todoText.should.equal("Learn Selenium");

    // close the browser
    await driver.quit();
  });
  });

});









// async function example(){

// // launch the browser
// let driver = await new Builder().forBrowser('chrome').build();

// // navigate to our application
// await driver.get("https://dummyjson.com/products")

// // add a todo
// await driver.findElement(By.id("add-todo")).sendKeys("Learn Selenium", Key.RETURN);

// //assert
// let todoText = await driver.findElement(By.xpath("//")).getText().then(function(value){
//     return value;
// })

// // assert using node assertion
// // assert.strictEqual(todoText, "Learn Selenium");

// //assert using chai should
// todoText.should.equal("Learn Selenium");

// // close the browser
// await driver.quit();

// }

// example()
