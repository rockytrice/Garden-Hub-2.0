const passport = require("passport");
const User = require("../models/User");
const config = require("../config");
const JwtStrategy =  require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;


// set options for JWT Strategy
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader("authorization"),
    secretOrKey: config.secret
};

// Create JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
    // See if user ID in the payload exists in out database
    // If it does, call "done" with that other 
    // otherwise, call done without a user object
    User.findById(payload.sub, function(err, user){
        if (err) { return done(err, false); }

        if (user) {
            done(null, user);
        } else {
            done(null, false);
        }
    })

});

// Tell passport to use this strategy
passport.use(jwtLogin);