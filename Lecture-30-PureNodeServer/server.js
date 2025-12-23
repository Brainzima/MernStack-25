const http = require('http')
const server = http.createServer((req, res)=>{
    res.writeHead(200,{"content-type":"plain/text"})

    if (req.url === '/') {
        res.end("Welcome to pure node server")
    }else if(req.url === '/api/users'){
        res.end("Hello User")
    }else{
        res.end("404 Not Found")
    }
})

server.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000")
})