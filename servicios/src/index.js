const express = require('express');
//const {config} = require('../config');
const cors = require('cors');
require('dotenv').config();

const medicoApi = require('./routes/doctor.route');
const especialidadesApi = require('./routes/especialidad.route');
const usuarioApi = require('./routes/usuario.route');
const citaApi = require('./routes/cita.route');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.json({
        status:true,
        content:'servidor activo'
    })
});

medicoApi(app);
especialidadesApi(app);
usuarioApi(app);
citaApi(app);

//app.use('/',require('../routes/usuario.routes'));

app.listen(process.env.PORT,function(){
    console.log(`ms usuarios : http://localhost:${process.env.PORT}`);
})
