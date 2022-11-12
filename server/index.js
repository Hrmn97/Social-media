import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from './Routes/posts.js'

const app = express();

app.use('/posts', postRoutes)

app.use(bodyParser.json({limit: "30mb", extended : true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended : true}))
app.use(cors());



//Mongodb connection ATLAS
const CONNECTION_URL = 'mongodb+srv://Harman:Harman0909@cluster0.pbfyp8r.mongodb.net/?retryWrites=true&w=majority'


// mongoose.connect(CONNECTION_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(()=>{
//     console.log("connection successful")
// }).catch((err)=> console.log("connection failed"))











app.listen(5000, ()=>{
    console.log("server is up at 5000")
})













// const PORT = process.env.PORT || 5000;

// mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
//     .then(()=>
//         app.listen(PORT,()=> console.log(`Server running on port: ${PORT}`))
//     )
//     .catch((error)=> console.log(error.message))
