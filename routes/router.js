const Authentication = require( "../controllers/Authentication");


module.exports = function(app){
app.post("/signup",Authentication.signup)

};