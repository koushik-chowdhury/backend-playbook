import http from 'http'
import fs from 'fs'

const myServer = http.createServer((req,res)=>{
    const log = `${Date.now()}: ${req.url} New Req Received \n`
    fs.appendFile('log.txt',log,(err,data)=>{
        switch(req.url){
            case '/': res.end('Welcome to Home Page')
            break
            case '/about':res.end('Welcome to about page')
            break
            default: res.end('404 Not found')
            break
        }
    })
})

myServer.listen(8020,()=>{
    console.log('Server Started')
})