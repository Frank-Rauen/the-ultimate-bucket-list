const mongoose = require('mongoose');
const bcrypt = require('bcrypt');   
const Schema = mongoose.Schema;

const SALT_ROUNDS = 6;

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        lowercase: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        lowercase: true,
        required: true,
        unique: true
    }
}, {
    timestamps: true
})

userSchema.set('toJSON', {
    transform: function(doc, ret) {
        delete ret.password
        delete ret.createdAt
        delete ret.updatedAt
        delete ret.__V
    }
});

userSchema.pre('save', function(next){
    const user = this;
    if(!user.isModified('password')) return next();
    bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
        if(err) return next(err);
        user.password = hash;
        next();
    })
})

module.exports = mongoose.model('User', userSchema);