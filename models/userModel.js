const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = mongoose.Schema({
    name: {
        type : String,
        require : [true , "enter name"],
    },
    email : {
        type : String,
        require : [true , "enter email address"]
    },
    password : {
        type : String,
        require : [true , "enter password"],
        select : false
    } ,
    passwordConfirm : {
        type : String,
        require : [true , "enter passworConfirm"],
        validate : {
            validator : function(el){
                return el === this.password;
            },
            message : "Passwords didnt match"
        }
    }
});

userSchema.pre('save' , async function(next){
    if(!this.isModified('password')){
        return next();
    }
    this.password = await bcrypt.hash(this.password, 12);
    this.passwordConfirm = undefined;
    next();
})

userSchema.methods.checkPassword = async function(userPassword , databasePassword){
    return await bcrypt.compare(userPassword , databasePassword);
}


const User = mongoose.model('User' , userSchema);
module.exports = User;