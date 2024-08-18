import loginPage from "../pageobjects/loginpage.js"
import loginurl from "../pageobjects/loginurl.js"

describe("Login & url test",()=>{


it("invoke browser with url",async()=>{

   await loginurl.homeurl

   await expect (browser).toHaveTitle("OrangeHRM");

});

it("Login with invalid user",async()=>{

await loginPage.login("ad","admin123");

});

it("Login with invalid pass",async()=>{

    await loginPage.login("Admin","Admin123");
    
    });

    it("Login with Correct Credentials",async()=>{

        await loginPage.login("Admin","admin123");
        
        });

});