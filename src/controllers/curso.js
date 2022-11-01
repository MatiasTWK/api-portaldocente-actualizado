const cursos = require('../models/cursos');




function getCurso (req,res) {
    let id = req.params.id

    cursos.findById(id, (err, curso) => {
        if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`})
        if (!curso) return res.status(404).send({message: 'El usuario no existe'})

        res.status(200).send({ curso })
    })
}

function getCursos (req,res) {
    cursos.find({} , (err,cursos) => { 
        if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`})
        if(!cursos) return res.status(404).send({message: 'No existen cursos'})

        res.send(200, { cursos })
    })
}

function saveCurso (req, res)  {
    console.log('POST /api/cursos')
    console.log(req.body)

    let curso = new cursos
    curso.curso = req.body.curso

    curso.save((err, cursoStored) => {
        if (err) res.status(500).send({message: `Error al guardar el usuario:${err}`})

        res.status(200).send({curso: cursoStored})
    })

}

function updateCurso (req,res) {
    let id = req.params.id
    let update = req.body
    cursos.findByIdAndUpdate(id, update, (err, cursoUpdated) => {
        if (err) res.status(500).send({message: `Error al actualizar el curso:${err}`})

        res.status(200).send({ curso: cursoUpdated })
    })
}

function deleteCurso (req,res) {
    let id = req.params.id

    cursos.findById(id, (err, curso) => {
        if (err) res.status(500).send({message: `Error al borrar el curso: ${err}`})

        curso.remove(err => {
            if (err) res.status(500).send({message: `Error al borrar el curso: ${err}`})
            res.status(200).send({message: 'El curso ha sido eliminado'})
        })
    })

}


module.exports = {
    getCurso,
    getCursos,
    saveCurso,
    updateCurso,
    deleteCurso

}