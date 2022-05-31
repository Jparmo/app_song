// punto de entrada al micro
const router =  require('./router')
const express = require('express')


const app = express()
const port = 4004

app.use(express.json())
app.use(router)
//verificacion para ver si nuestro pod esta vivio
app.get('/health',(req,res)=>{
    return res.send('OK')
})

app.listen(port,()=>{
    console.log('listening on: http://localhost:'+port);
})