const mongoose =require('mongoose');
const Schema = mongoose.Schema;
// import bcrypt from 'bcrypt-nodejs';

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


// Create model class
const ModelClass = mongoose.model("user",UserSchema);




// UserSchema.pre('save', function (next) {
//     var user = this;
//     if (this.isModified('password') || this.isNew) {
//         bcrypt.genSalt(10, function (err, salt) {
//             if (err) {
//                 return next(err);
//             }
//             bcrypt.hash(user.password, salt, null, function (err, hash) {
//                 if (err) {
//                     return next(err);
//                 }
//                 user.password = hash;
//                 next();
//             });
//         });
//     } else {
//         return next();
//     }
// });

// UserSchema.methods.comparePassword = function (passw, cb) {
//     bcrypt.compare(passw, this.password, function (err, isMatch) {
//         if (err) {
//             return cb(err);
//         }
//         cb(null, isMatch);
//     });
// };

// Export the model
module.exports = ModelClass;