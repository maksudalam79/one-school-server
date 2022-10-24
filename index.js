const express=require('express');
const app=express();
const cors = require('cors')
const port=process.env.PORT||5000;
const coursesCategory=require('./data/courses.json')
app.get('/',(req,res)=>{
    res.send('Education API Running')
})
app.listen(port,()=>{
    console.log('Education Server running on port',port)
})