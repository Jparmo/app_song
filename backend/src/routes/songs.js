const express =  require('express')
const SongsService = require('../services/songs')

const songsService =  new SongsService()

function songs(app){
    const router = express.Router()
    app.use('/api/songs', router)

    router.get('/', async (req,res)=>{
        const songs = await songsService.getAll()
        return res.json(songs)
    })

    router.post('/create', async (req,res)=>{
        const songs = await songsService.create(req.body)
        return res.json(songs)
    })

    router.put('/:id', async (req,res)=>{
        const id = req.params.id
        const songs = await songsService.update(id,req.body)
        return res.json(songs)
    })

    router.delete('/:id', async (req,res)=>{
        const id = req.params.id
        const songs = await songsService.delete(id)
        return res.json(songs)
    })
}

module.exports = songs