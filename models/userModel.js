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
        require : [true , "enter password"]
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

userSchema.methods.checkPassword = async function(userPassword , databasePassword){
    return await bcrypt.compare(userPassword , databasePassword);
}

const User = mongoose.model('User' , userSchema);
module.exports = User;