const jwt = require('jsonwebtoken')

// necesitamos la req para obtener el token
// res para poder saber si tiene permiso o no el usuario
// next ya validado pase a la instancia que se necesite
function auth(req, res, next ){
    const token = req.cookies.token
    try{
        const decoded = jwt.verify(token,'12345') //recibir el token y la clave secreta
        console.log(decoded)
        req.user = decoded
        next()
    }catch(error){
        console.log(error)
        return res.status(403).json({
            error:true,
            message:'No permissionsS'
        })
    }
}

module.exports = auth