const mysql = require('mysql')

const conn = async()=>{
     mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Emiliano!13',
    database: 'songsapp'
})

conn.connect();

}
module.exports = {conn, mysql}