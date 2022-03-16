const http = require('http')
const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.end('<h1>This is an HTML tag</h1>')
})

app.listen(3000)