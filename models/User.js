const mongoose =require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");
// Define Model
const UserSchema = new Schema({
  email: {
        type: String,
        unique: true,
        required: true,
        lowercase:true
    },
  password: {
        type: String,
        required: true
    }
});

// on save hook encrypt password================================================================
// before saving a model, run this function
UserSchema.pre('save', function (next) {
    // get access to user model
    const user = this;
    // generate a salt then run callback
    bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            // hash (encrypt) the password using the salt
            bcrypt.hash(user.password, salt, null, function (err, hash) {
                if (err) {
                    return next(err);
                }
                // overwrite plain text password with encrypted password
                user.password = hash;
                next();
            });
        });
    }); 

UserSchema.methods.comparePassword = function (candiidatePassword, callback) {
    bcrypt.compare(candiidatePassword, this.password, function(err, isMatch){
        if (err) {
            return callback(err);
        }
        callback(null, isMatch);
    })
}

// Create model class============================================================================
const ModelClass = mongoose.model("user",UserSchema);

// Export the model
module.exports = ModelClass;