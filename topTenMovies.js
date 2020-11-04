const express = require('express');
const movieList = require('./views/movieList');
const movieInfo = require('./views/movieInfo');
const path = require('path');
const movieData = require('./movieData');
const app = express();

console.log(path.join(__dirname,'public','thumbails'))
app.use(express.static(path.join(__dirname,'public','thumbnails')))
app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res,next)=>{
res.send(movieList(movieData.list()))
})

app.get('/details/:id',(req,res,next)=>{
    const id = req.params.id
    res.send(movieInfo(movieData.find(id)))
    })

const port = 3000
app.listen(port,()=>{console.log(`Listening on port: ${port}`)})