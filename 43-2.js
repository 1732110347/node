const express=require('express')
const app=express()
const router =require('./43')
app.use(router)
app.listen(80,()=>{
    console.log('http://127.0.0.1');
})