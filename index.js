const express =require("express")
const app = express()
const mongoose = require("mongoose")
 require ("dotenv").config()
const connectDB =require("./touristDb")
const tourRout = require("./Routes/TouristRoutes")

const port =5500
app.use(express.json())


app.use("/api",tourRout)



app.listen(port,async ()=>{
    try {
     await connectDB()
      console.log("saver 'je suis en train de courir'....")
    } catch (error) {
      console.error(error)
    }
  
  })