const express = require('express')
const songs = require('./routes/songs')



const app = express()

app.use(express.json())
songs(app)

app.get('/', (req,res)=>{
    return res.json({hola: 'mundo'})
})


app.listen(4003, ()=>{
    console.log('listening... http://localhost:4003')
})