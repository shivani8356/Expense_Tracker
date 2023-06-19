const express = require('express');
const app = express();
const expenseRouter = require('./routes/expenseRouter')
const userRouter = require('./routes/userRouter')

app.use(express.json());

app.use('/api/v1/expenses' , expenseRouter)
app.use('/api/v1/user' , userRouter) 

module.exports = app;