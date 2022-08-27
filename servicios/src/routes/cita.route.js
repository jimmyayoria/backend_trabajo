const express = require('express');
const CitasService = require('../services/citas.service');

function citaApi(app){

    const router = express.Router();
    app.use('/cita',router);

    const objCitaService = new CitasService();

    router.get('/:id',async function(req,res){
        try{

            const {id} = req.params;
            const citas = await objCitaService.getAll(id);
            res.status(200).json({
                status:true,
                content:citas
            })
        }catch(err){
            console.log(err)
        }
    })

    router.post('/crear',async function(req,res){
        try{
            const {body : cita} = req;
            const crearCita = await objCitaService.create({cita});
            res.status(201).json({
                status:true,
                content:crearCita
            })
        }catch(err){
            console.log(err)
        }
    });


}

module.exports = citaApi;