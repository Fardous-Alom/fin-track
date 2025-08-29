import express from 'express'

const app = express();

app.get('/',(req,res)=>{
  res.send("Server started")
})

app.listen(5000);