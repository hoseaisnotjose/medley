const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

const userSchema = new mongoose.Schema({
    name: String,
    email: {type: String, 
        required: true, 
        lowercase: true, 
        unique: true
    },
    password: String,
    isAdmin: Boolean
}, {
    timestamps: true
});

userSchema.pre('save', function(next) {
    // can't use arrow functions here
    const user = this;
    if (!user.isModified('password')) return next();
    bcrypt.hash(
        user.password,
        SALT_ROUNDS,
        function(err, hash) {
            if(err) return next(err);
            user.password = hash;
            return next();
        }
    );
});

userSchema.methods.comparePassword = function(tryPassword, cb) {
    // 'this' = user doc
    bcrypt.compare(tryPassword, this.password,
        function(err, isMatch) {
            if (err) return cb(err);
            cb(null, isMatch);
        });
};


userSchema.set('toJSON', {
    transform: function(doc, ret) {
        // remove the password property when serializing doc to JSON
        delete ret.password;
        return ret;
    }
});



module.exports = mongoose.model('User', userSchema);