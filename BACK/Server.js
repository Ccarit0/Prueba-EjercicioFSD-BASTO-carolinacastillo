const express = require('express')
const app = express()



// importo conexion mongoDB

const archivoBD = require('./conection')

//Importacion del archivo de rutas y modelo animal

const animalroute = require('./routes/animal')


//Importacion de body parser

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: 'true'}))


//creacion de rutas

app.use('/api/animal', animalroute) // localhost3001/api/animal/blabla --> accedo a la ruta que necesito

app.get('/', (req, res) => {
    res.end('wellcome to server eject successful')
})

//Configuración del servidor básico
app.listen(3001, function(){
    console.log('server listen port 3001, ok!')
})