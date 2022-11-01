const mongoose = require('mongoose');

//CURSOS
const cursoSchema = mongoose.Schema({
    curso: {
        type:String,
        required:true,
        unique:true
    }
});

module.exports = mongoose.model("Cursos",cursoSchema);