const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/crudmernstack');

const objBd = mongoose.connection

objBd.on('connected', () => {console.log('conection success with MongoDb')})
objBd.on('error', () => {console.log('conection fallied with MongoDb')})

module.exports = mongoose