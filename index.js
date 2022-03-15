const express = require("express");
const app = express();
const AuthController = require("./controllers/AuthController.js");

app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: false }));
 
// определяем роутеры
const userRouter = express.Router();  // для адресов с "/users"
 
userRouter.post("/loginPost", AuthController.login);
userRouter.get("/login",AuthController.getLoginPage);
// сопоcтавляем роутер с конечной точкой "/users"
app.use("/", userRouter);
 
// общие обработчики

app.get("/", function (request, response) {
    response.redirect('/login')
});
 
// обработка ошибки 404
app.use(function (req, res, next) {
    res.status(404).send("Not Found")
});
 
app.listen(3000);