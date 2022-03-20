const express = require('express');
const app = express();

app.use('/',express.static(__dirname+'/public'));

const user = {
    firstname: 'John',
    lastname: 'Doe'
}
app.get('/getuser', (req,res)=>{
    console.log('server got request');
    console.log(user);
    res.send(user)
})

app.get('/:id', (req,res)=>{
    console.log('server got id request');
    console.log(req.params);
    res.send(req.params)
})

app.listen(3000, ()=>{
    console.log('server Running on port 3000');
})