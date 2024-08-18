

class loginPage{


get user(){


    return $("//input[@name='username']");
}

get pass(){


    return $("//input[@name='password']");
}

get loginbtn(){

    return $("//button[@type='submit']");
}


async login(username,password){
await browser.pause(3000); 
   await this.user.setValue(username);
   await browser.pause(3000); 
   await this.pass.setValue(password);
   await browser.pause(3000); 
   await this.loginbtn.click();
   await browser.pause(3000); 
}


}

export default new loginPage();