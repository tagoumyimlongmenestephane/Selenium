const { Builder, By, Key } = require("selenium-webdriver");
const assert = require("assert");
var should = require("chai").should();

// describe blocs
describe("My first test", function () {
  // it bloc
  it("should add a todo", async function () {
    // launch the browser
    let driver = await new Builder().forBrowser("chrome").build();

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
