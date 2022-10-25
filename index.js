const express=require('express');
const app=express();
const cors = require('cors')
const port=process.env.PORT||5000;
const coursesCategory=require('./data/courses.json')
const deatiles=require('./data/deatiles.json')
app.use(cors())
app.get('/',(req,res)=>{
    res.send('Education API Running')
})

app.get('/coursesCategory',(req,res)=>{
    res.send(coursesCategory)
})
app.get('/deatiles',(req,res)=>{
    res.send(deatiles)
})


app.listen(port,()=>{
    console.log('Education Server running on port',port)
})