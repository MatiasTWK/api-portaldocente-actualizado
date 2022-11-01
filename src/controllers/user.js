
const User = require('../models/user')
const service = require('../services')


function signUp (req, res) {
    const user = new User({
        rut: req.body.rut,
        password: req.body.password
    })

    user.save((err) => {
        if (err) res.status(500).send({message: `Error al crear el usuario: ${err}`})
        
        return res.status(201).send({ token: service.createToken(user) })
    })
}

function signIn(req, res) {
    User.find({ rut: req.body.rut }, { password: req.body.password } , (err, user) =>{
        if (err) return res.status(500).send({message: err});
        if (!user) return res.status(404).send({message: 'El usuario no existe'})

        req.user = user
        res.status(200).send({
            message: 'Te has logeado de manera exitosa',
            token: service.createToken(user)
        })
    })
}

module.exports = {
    signUp,
    signIn
}