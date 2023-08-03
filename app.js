const express = require('express');
const app = express();
const expenseRouter = require('./routes/expenseRouter')
const userRouter = require('./routes/userRouter')
const groupRouter = require('./routes/groupRouter')

app.use(express.json());

app.use('/api/v1/expenses' , expenseRouter)
app.use('/api/v1/users' , userRouter) 
app.use('/api/v1/groups' , groupRouter)

module.exports = app;