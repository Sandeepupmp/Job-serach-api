import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRout  from './routes/userRout.mjs'


// CONFIGRATION

const app = express()
dotenv.config()
app.use(express.json())
app.use(express.static('public'));

// PORT 
const PORT = process.env.PORT || 3030


// ROUTS
app.get('/',  (req, res)=>{
   res.render('index')
})

app.use(authRout)
// starter 

const start = async ()=>{
    try {
      await  mongoose.connect(process.env.MONGO_URI)
        app.listen(PORT , console.log("DB CONNECTED AND WORKING"))
    } catch (error) {
        console.log(error)
    }
}
start()