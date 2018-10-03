const User = require("../models/User");


exports.signup = function(req,res,next) {
    console.log(req.body);
    const email = req.body.email;
    const password = req.body.password;
  // See if a user with the given email exists
  User.findOne({email:email}, function(err, existingUser) {
  if(err) {return next(err)}
  // if a user with email does exist, return an error
  if(existingUser){
    return res.status(422).send({error:"Email is already in use"});
  }

  // if a user with email does NOT exist, create and save user record
  const user = new User({
    email: email,
    password: password
  });
 user.save(function(err){
     if (err) {return next(err);}
     // Respond to request indicating the user was created
    res.json(user);
    });
  
  });

}