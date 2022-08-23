const express = require('express');
const UsuarioService = require('../services/usuario.service');

function usuarioApi(app){
    const router = express.Router();
    app.use('/usuario',router);

    const objUsuarioService = new UsuarioService();

    router.get('/validarEmail',async function(req,res){
        try{
            const existe = await objUsuarioService.VerificarEmailRepetido();
            res.status(200).json({
                status:true,
                content:existe
            })
        }catch(err){
            console.log(err)
        }
    })

}

module.exports = usuarioApi;