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
    const movie = movieData.find(id)
    if(!movie.id){
        throw new Error('Not Found')
    }
    res.send(movieInfo(movie))
    })

const port = 3000

app.use(function(err,req,res,next){
    console.log(err.stack)
    res.status(404).send('PAGE NOT FOUND')
})

app.listen(port,()=>{console.log(`Listening on port: ${port}`)})