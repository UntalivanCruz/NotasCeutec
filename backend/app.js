const { bd } = require('./bd')

const express = require('express')
const api = express()

api.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
    next();
});

api.get('/alumnos/', function(req, res) {
    res.send(bd.alumno)
})

api.listen(3000)