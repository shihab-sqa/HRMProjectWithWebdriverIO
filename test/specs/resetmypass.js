import forgetpass from "../pageobjects/forgetpass.js";
import loginurl from "../pageobjects/loginurl.js";

describe("Test Reset Password",()=>{

it("Password Reset",async()=>{

await loginurl.homeurl
await forgetpass.resetpassword("Admin");



});

  it("test msg verify",async()=>{

  await expect (forgetpass.textmsg).toHaveText("Reset Password link sent successfully");
  })


});