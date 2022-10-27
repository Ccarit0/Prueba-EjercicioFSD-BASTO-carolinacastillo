const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const eschema = mongoose.Schema

const eschemaAnimal = new eschema({
    idSenasa: String,
    type: String,
    weight: String,
    paddling: String,
    device: String
})

const AnimalModel = mongoose.model('animals', eschemaAnimal)

module.exports = router

//------------- ruta de prueba funcionando -------------//
// router.get('/test', (req, res) => {
//     res.end('esta funcionando la carga desde ruta test')
// })

//-------------rutas que quedan ---------------//
//----Agregar animales ---------->>
router.post('/addanimal', (req, res) => {
    const newAnimal = new AnimalModel({
        idSenasa: req.body.idSenasa,
        type: req.body.type,
        weight: req.body.weight,
        paddling: req.body.paddling,
        device: req.body.device
    })
    //llamo al nuevo animal y utilizo el metodo save de mongo
    newAnimal.save(function(err){
        if(!err){
            res.send('animal add success')
        }else{
            res.send(err)
        }
    })
})

//----Obtener animales ---------->>
router.get('/getanimal', (req, res) => {
    AnimalModel.find({}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})

//----Obtener data de animales ---------->>
router.post('/getdataanimal', (req, res) => {
    AnimalModel.find({idSenasa:req.body.idSenasa}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})

//----refresca datos editados de animales ---------->>
router.post('/updatinganimal', (req, res) => {
    AnimalModel.findOneAndUpdate({idSenasa: req.body.idSenasa}, {
        idSenasa: req.body.idSenasa,
        type: req.body.type,
        weight: req.body.weight,
        paddling: req.body.paddling,
        device: req.body.device
    }, (err) => {
        if(!err){
            res.send('animal successful updated')
        }else{
            res.send(err)
        }
    })
})

//----elimina animales ---------->>
router.post('/deleteanimal', (req, res) => {
    AnimalModel.findOneAndDelete({idSenasa: req.body.idSenasa}, (err) => {
        if(!err){
            res.send('animal successful deleted')
        }else{
            res.send(err)
        }

    })
})