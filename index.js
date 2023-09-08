const express = require('express')
const morgan = require('morgan')
const cors = require("cors");

const handleRouter = require('./Routers/handleRoute')




const dotenv  = require('dotenv')

const app = express()
app.set('trust proxy', true)
app.use(cors());

dotenv.config({path:'./config.env'})


const PORT = process.env.PORT||4000

app.use(morgan('dev'))
app.use(express.json())


app.use('/',handleRouter)

const server = app.listen(PORT,()=>{
    console.log(`Listening on Port ${PORT}`)
})
