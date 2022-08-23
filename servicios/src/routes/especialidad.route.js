const express = require('express');
const EspecialidadService = require('../services/especialidad.service');

function especialidadesApi(app){
    const router = express.Router();
    app.use('/especialidad',router);

    const objEspecialidadService = new EspecialidadService();

    router.get('/',async function(req,res){
        try{
            const especialidades = await objEspecialidadService.getAll();
            res.status(200).json({
                status:true,
                content:especialidades
            })
        }catch(err){
            console.log(err)
        }
    })

}

module.exports = especialidadesApi;