const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const LearnerModel = require('./models/Learner')

const app = express()
app.use(express.json())
app.use(cors(
    {
        origin: ["https://chinese-happy-hour.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
));
app.use(express.json())



mongoose.connect("mongodb+srv://ellalyang:DooYJjBIp4PXz4xw@cluster0.wq2l2kp.mongodb.net/?retryWrites=true&w=majority").then(()=> {
    console.log('DB connected')
}).catch(()=>{
    console.log('DB err')
})




app.post('/login', (req, res)=>{
    const {email, password} = req.body;
    LearnerModel.findOne({email:email})
    .then (user => {
        if(user) {
            if (user.password === password) {
                res.json("Success")
            } else {
                res.json("The password is incorrect")
            }
        } else {
            res.json("No record")
        }
    })
})

app.post('/register', (req, res)=> {
LearnerModel.create(req.body)
.then((learners)=> res.json(learners))
.catch((err)=> res.json(err))
})




app.listen(3001, ()=> {
    console.log('server is running')
})
