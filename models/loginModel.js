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
        client.withCredentials=true;
        client.send(JSON.stringify(bodyData));
        this.access_token=client.getResponseHeader('access_token');
        console.log(client.status);
        console.log(this.access_token);

        return(client.status);
    }

    get_data()
    {
        var client = new  XMLHttpRequest();

        client.open("GET", 'https://helloworldprojectt.herokuapp.com/v1/cars',false);
        client.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        client.setRequestHeader("access_token", this.access_token);
        client.responseType='json';
        //client.withCredentials=true;
        client.send(null);
        console.log(client.responseText);
        console.log(client.getRequestHeader('access_token'));
        //return(client.status);

    }
}