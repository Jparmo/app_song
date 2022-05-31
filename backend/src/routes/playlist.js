const express = require('express')
const auth = require('../middleware/auth')
const PlaylistService =  require('../services/playlist')

function playlist(app) {
    const router = express.Router()
    const playlistService = new PlaylistService()

    app.use('/api/playlists',router)

    router.post('/create', auth, async(req,res)=>{
        const name = req.body.name
        //obtencion del id del usuario, se hacer por medio de un middleware
        const userId = req.user.id
        const playlist = await playlistService.create(name,userId)

        return res.json(playlist)
    })
}

module.exports = playlist