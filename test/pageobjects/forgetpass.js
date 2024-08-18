class forgetpass{


get forgetbtn(){


return $("//*[@id='app']/div[1]/div/div[1]/div/div[2]/div[2]/form/div[4]/p");

}


get pass(){

return $("//*[@id='app']/div[1]/div[1]/div/form/div[1]/div/div[2]/input");

}

get reset(){

    return $("//*[@id='app']/div[1]/div[1]/div/form/div[2]/button[2]");
}

get text(){

    return $("//*[@id='app']/div[1]/div[1]/div/h6");
}

async resetpassword(admin){

       await this.forgetbtn.click();
       await this.pass.setValue(admin);
       await this.reset.click();
      

}

async textmsg(){


    await this.text();
}

}

export default new forgetpass();