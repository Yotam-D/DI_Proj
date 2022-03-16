const http = require('http')

const server = http.createServer((req,res)=>{
    console.log('server here');
    res.end(`<h1>This is my first Response</h1>
    <h1>This is my Sec Response</h1>
    This is my third Response`)
})

server.listen(3000, ()=>{
    console.log('server listening');
})