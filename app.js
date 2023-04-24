const express = require('express');
const path = require('path');
require('dotenv').config();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT;
const multer = require('multer');


const indexRouter = require('./routes/index.routes');
const app = express();

// view engine setup
app.set('views', 'views');
app.set('view engine', 'ejs');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'public/upload')
  },
  filename: (req, file, cb) => {
      cb(null, file.originalname.split('.')[0] + "_" + Date.now() + "." + file.originalname.split('.')[1])
  }
});
const fileFilter = (req, file, cb) => {
  const fileTypes = /jpeg|jpg|png|gif/;
  const extname = fileTypes.test(file.originalname);
  const mimetype = fileTypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true)
  }
  if (file.mimetype === 'image' && file. size > 2 * 1014 * 1024) {
    return cb(new Error('File too large'))
  }
  else {
    cb('Error : Images only!')  
  }
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(multer({ storage: storage, fileFilter: fileFilter }).single("image"))

app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))
app.use('/', indexRouter);

mongoose.connect(MONGODB_URI)
  .then(() => {
    // console.log("Database Connected");
    app.listen(PORT,()=>{
      console.log(`App is Running On : http://localhost:${PORT}`)
    })
  })
  .catch(err => console.log(err))
module.exports = app;
