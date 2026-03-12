const express=require("express")
  const fs=require('fs')
const app=express()

app.get('/',(req,res)=>{
    res.send("wellcome to  home page")
    
})

app.get('/product',(req,res)=>{
    fs.readFile('db.json','utf-8',(err,data)=>{
        if(err){
            res.send("something went wrong")
        }
        else{
            res.send(data)
        }
    })
})

 app.listen(8080,()=>{
    console.log("http://localhost:8080")
    console.log("server is runing") 
 })