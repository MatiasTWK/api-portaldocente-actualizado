const express = require('express');
const bodyParser = require('body-parser')
const CursoCtrl = require ('../controllers/curso')
const userCtrl = require('../controllers/user')
const auth = require('../middlewares/auth')
const api = express.Router();
const { validateCreate } = require('../validators/curso')



//RUTAS GET,PUT,POST,DELETE,ETC 
api.get('/cursos', auth, CursoCtrl.getCursos );
api.get('/cursos/:id', CursoCtrl.getCurso );
api.post('/cursos', auth, validateCreate, CursoCtrl.saveCurso );
api.put('/cursos/:id', auth, CursoCtrl.updateCurso );
api.delete('/cursos/:id', auth, CursoCtrl.deleteCurso );
api.post('/signup', userCtrl.signUp)
api.post('/signin', userCtrl.signIn)
api.get('/private', auth,  (req,res) => {
    res.status(200).send({message: 'Tienes acceso'})
})

module.exports = api;