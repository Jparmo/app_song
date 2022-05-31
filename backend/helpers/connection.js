const { PrismaClient } = require('@prisma/client')

let client

// una conexion con la base de datos

function connection(){
    if(client){
        return client
    }

    client =  new PrismaClient()
    return client 
    
}

module.exports = connection