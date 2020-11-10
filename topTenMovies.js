const express = require('express');
const movieList = require('./views/movieList');
const movieInfo = require('./views/movieInfo');
const path = require('path');
const app = express();
const {client,syncAndSeed} = require('./db')

console.log(path.join(__dirname,'public','thumbails'))
app.use(express.static(path.join(__dirname,'public','thumbnails')))
app.use(express.static(path.join(__dirname,'public')))

app.get('/', async(req,res,next)=>{
    try{
        const movielist = await client.query(`SELECT * FROM movies;`)
        res.send(movieList(movielist.rows))
    }catch(error){
        next(error)
    }
})

app.get('/details/:id',async(req,res,next)=>{
    const movie = await client.query(`SELECT * FROM movies WHERE movies.id=${req.params.id};`)
    if(!movie.rows[0].id){
        throw new Error('Not Found')
    }
    res.send(movieInfo(movie.rows[0]))
    })

const port = process.env.PORT || 3000

app.use(function(err,req,res,next){
    console.log(err.stack)
    res.status(404).send('PAGE NOT FOUND')
})

app.listen(port,()=>{console.log(`Listening on port: ${port}`)})

const init = async()=>{
    try{
        await client.connect();
        syncAndSeed()
    }catch(error){
        console.log(error)
    }
}

init();