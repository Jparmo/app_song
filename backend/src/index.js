const express = require('express')
const cookie = require('cookie-parser')

// importando routers
const auth = require('./routes/auth')
const songs = require('./routes/songs')
const playlist = require('./routes/playlist')



const app = express()
//middlewares
app.use(express.json())
app.use(cookie())

songs(app)
auth(app)
playlist(app)

app.get('/', (req,res)=>{
    return res.json({hola: 'mundo'})
})


app.listen(4003, ()=>{
    console.log('listening... http://localhost:4003')
})