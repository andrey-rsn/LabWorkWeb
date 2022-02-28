const Auth = require("../models/loginModel.js");

exports.login = function (request, response){
    var login=request.body.login;
    var password=request.body.password;
    var authManager = new Auth(login,password);
    var res=authManager.auth();
    response.send(JSON.stringify(res));
};

exports.getLoginPage = function (request, response){
    response.render("loginPage.hbs");
};