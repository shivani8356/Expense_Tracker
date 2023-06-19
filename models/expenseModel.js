const mongoose = require('mongoose')

const expenseSchema = mongoose.Schema({
    title : {
        type : String,
        require : [true , "enter title"],
    },
    description : {
        type : String,
        require : [true , "enter description"]
    },
    cost : {
        type : Number,
        require : [true , "enter cost"]
    } 
});

const Expense = mongoose.model('Expense' , expenseSchema);

module.exports = Expense;