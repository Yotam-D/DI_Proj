const express = require('express')
const path = require('path')
const multer = require('multer')


const app = express();

app.use('/', express.static(path.join(__dirname,'/public')))
app.use('/uploads',express.static(path.join(__dirname,'/uploads')))

app.listen(5000, () => {
    console.log('listen on port 5000')
})

const storage = multer.diskStorage({
    destination: (req, file, cbFun) => {
        cbFun(null, 'uploads')
    },
    filename: (req, file, cbFun) => {
       cbFun(null, Date.now()+path.extname(file.originalname)) 
    }
});

const fileFilter = (req,file,cbFun) => {
    if(file.mimetype == 'image/jpeg' || file.mimetype == 'image/png' || file.mimetype == 'image/jpg') {
        cbFun(null, true)
    } else {
        cbFun(null, false)
    }
}
const upload = multer ({storage: storage , fileFilter: fileFilter})


app.post('/uploadFile', upload.single('image'), (req,res) => {
    try{
    return res.status(201).json({msg: 'file uploaded'})
}
catch(e){
    console.error(e)
}
})


