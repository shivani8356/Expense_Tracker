const mongoose = require('mongoose')

const groupSchema = mongoose.Schema({
    groupName : {
        type : String,
        require : [true , "Enter group name"]
    },
    groupMember : [
        {
            name : {
                type : String,
                require : [true , 'enter group member name'],
            },
            email : {
                type : String,
                require : [true , "enter email address"]
            }
        }
    ],
    groupExpense : {
        type : Number,
        require : [true , "enter expense"]
    }
})

const Group = mongoose.model('Group' , groupSchema)

module.exports = Group;