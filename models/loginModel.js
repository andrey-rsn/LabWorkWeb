const { cookie } = require('express/lib/response');
var fetch = require('node-fetch');

module.exports= class LoginModel{
    constructor(login,password){
        this.login=login,
        this.password=password
    }

    auth()
    {
        var bodyData = {
            login:this.login,
            password:this.password
        }

        fetch('https://helloworldprojectt.herokuapp.com/v1/authorization',
        {
            method:'POST',
            body:JSON.stringify(bodyData),
            headers: {'Content-Type':'application/json'}
        })
        //.then(res => res.headers.get('Set-Cookie'))
        .then(res=>res.status)
        .then(json=>this.result=json)

        return('this.result');


    }
}