import http from 'http'
import fs from 'fs'
import url from 'url'

const myServer = http.createServer((req,res)=>{
    if(req.url==='/favicon.ico') return res.end();
    const log = `${Date.now()}: ${req.url} New Req Received \n`
    const myUrl = url.parse(req.url,true)
    console.log(myUrl)
    fs.appendFile('log.txt',log,(err,data)=>{
        switch(myUrl.pathname){
            case '/': res.end('Welcome to Home Page boy')
            break
            case '/about':
                const qp =myUrl.query.myname
                res.end(`Welcome ${qp} to the apge`)
            break
            case '/search':
                const search = myUrl.query.search_query;
                res.end(`Here are your result for ${search}`)
                break
            default: res.end('404 Not found')
            break
        }
    })
})
 
myServer.listen(8000,()=>{
    console.log('Server Started')
})