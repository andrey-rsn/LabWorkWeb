const Auth = require("../models/loginModel.js");
var token="";
exports.login = function (request, response){
    var login=request.body.login;
    var password=request.body.password;
    var isCrypto=request.body.isCrypto;
    var authManager = new Auth(login,password,isCrypto);
<<<<<<< HEAD
    var res1=authManager.auth();
    if(res1==200)
=======
    var res2=authManager.auth();
    if(res2==200)
>>>>>>> branch_2
    {
        
        response.render("nextPage.hbs");
        authManager.get_data();
    }
    else{
        response.render("exceptionPage.hbs");
    }
};

exports.getLoginPage = function (request, response){
    response.render("loginPage.hbs");
};