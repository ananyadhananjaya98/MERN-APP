const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 8080


app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology:true})
const connection = mongoose.connection
connection.once('open', ()=>{
    console.log("MongoDB connection established successfully")
})

const mernappRouter = require('./routes/mernapp')
const usersRouter = require('./routes/users')

app.use('/mernapp', mernappRouter)
app.use('/users', usersRouter)


app.listen(port,()=>{
    console.log("server is running on port")
})