import express from 'express'
import users from './MOCK_DATA.json' assert { type: "json" };
const app = express()
const PORT = 8030

// Routs

app.get('/users',(req,res)=>{
 const html = `
 <ul>
 ${users.map(user=>`<li>${user.first_name}</li>`).join('')}
 </ul>
 `
 res.send(html)
})

app.get('/api/users',(req,res)=>{
    return res.json(users)
})
app.listen(PORT, ()=>{
    console.log(`Server started at ${PORT}`)
})