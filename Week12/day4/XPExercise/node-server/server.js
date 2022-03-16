const http = require('http')

const server = http.createServer((req,res)=>{
    console.log('server here')
    const user = {
        firstname: 'John',
        lastname: 'Doe'
    }
    res.end(JSON.stringify(user))
})

server.listen(8080)