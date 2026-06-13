const express = require('express')
const connectDB = require("./config/database.js")
const User = require("./models/user.js")

const cookieParser = require("cookie-parser")
const {userAuth} = require("./middlewares/auth.js")
const authRouter = require('./routers/authRouter.js')
const profileRouter = require('./routers/profileRouter.js')
const connectionRouter = require('./routers/connectionRouter.js')
const userRouter = require('./routers/userRouter.js')
require('dotenv').config()
const cors = require('cors')
const http = require('http')


const app = express()

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
}))




app.use(cookieParser())
app.use(express.json())
app.use(authRouter)
app.use(profileRouter)
app.use(connectionRouter)
app.use(userRouter)

const server = http.createServer(app)


connectDB().then(()=>{
    console.log("DB has been connected")    
    server.listen(3000, ()=>{
        console.log('server is running on port: 3000')
    })

}).catch((err)=>{
    console.log("Something went wrong,", err.message)
})
