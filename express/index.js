import express from 'express'

const app = express()

app.get('/',(req,res)=>{
    console.log('req from root')
    return res.send("Hello from express")
})

app.get('/about',(req,res)=>{
    console.log('req from about')
    return res.send(`Hey ${req.query.name} welcome to about page`)

})

app.listen(8000,()=> console.log("Server Started"))