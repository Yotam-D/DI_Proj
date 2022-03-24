const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()

const app = express();
app.use('/', express.static(__dirname + '/public'))
app.set('view engine', 'ejs')

app.get('/home', (req,res)=>{
    let data = getData()
    res.render('home', {data});
})

app.listen(process.env.PORT || 8080, ()=>{
    console.log('listening on port 5000 (backup 8080)');
})

function getData(params) {
    
}
