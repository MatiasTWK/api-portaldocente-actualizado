
const mongoose = require('mongoose');
const app = require('./app')

require("dotenv").config();


const port = process.env.PORT || 3000;
const uri = process.env.MONGODB_URI;




//CONEXION A MONGODB
mongoose
    .connect(uri).then(() => console.log("Conexion Completada"))
    .catch((error) => console.error(error));
app.listen(port, () => console.log('server listo en puerto', port)); 




