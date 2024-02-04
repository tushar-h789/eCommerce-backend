require('dotenv').config()
const express = require('express');
const app = express()
const dbConnection = require('./config/dbConfig')
const route = require('./routes')


//middleware
app.use(express.json())

//database connect
dbConnection()

//routes connection
app.use(route)



app.get('/', (req, res)=>{
    res.send('Server is running')
})

app.listen(3000, ()=>{
    console.log(`Server is running on port ${3000}`);
})