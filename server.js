const mongoose = require('mongoose')
const app = require('./app');
const dotenv = require('dotenv')
dotenv.config({path : './config.env'});

mongoose.connect(process.env.DATABASE).then(()=>{
    console.log("DB connection is successfull")
});
console.log("trying to pull");

app.listen(process.env.PORT , ()=>{
    console.log(`Listening on port ${process.env.PORT}`)
});
