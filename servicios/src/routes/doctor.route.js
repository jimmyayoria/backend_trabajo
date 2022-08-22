const express = require('express');
const DoctorService = require('../services/doctor.service');

function medicoApi(app){
    const router = express.Router();
    app.use('/doctor',router);

    const objDoctorService = new DoctorService();

    router.get('/',async function(req,res){
        try{
            const medicos = await objDoctorService.getAll();
            res.status(200).json({
                status:true,
                content:medicos
            })
        }catch(err){
            console.log(err)
        }
    })

}

module.exports = medicoApi;