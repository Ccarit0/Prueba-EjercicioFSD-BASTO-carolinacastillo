const express = require('express')
const app = express()

// importo conexion mongoDB

const archivoBD = require('./conection')

//creacion de ruta

app.get('/', (req, res) => {
    res.end('wellcome to server eject successful')
})

//Configuración del servidor básico
app.listen(3001, function(){
    console.log('server listen port 3001, ok!')
})