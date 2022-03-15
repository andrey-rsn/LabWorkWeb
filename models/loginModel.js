const { cookie } = require('express/lib/response');
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const sha1=require('sha1')

module.exports= class LoginModel{
    constructor(login,password,isCrypto){
        this.login=login,
        this.password=password
        this.isCrypto=isCrypto
    }

    auth()
    {
        if(this.isCrypto)
        {
            this.password=sha1(this.password)
        }
        var bodyData = {
            login:this.login,
            password:this.password
        }

        var client = new  XMLHttpRequest();
    
    client.open("POST", 'https://helloworldprojectt.herokuapp.com/v1/authorization',false);
    client.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    client.send(JSON.stringify(bodyData));

    console.log(client.status)
    return(client.status);
    }
}