const express = require('express');
const UsuarioService = require('../services/usuario.service');

function usuarioApi(app){
    const router = express.Router();
    app.use('/usuario',router);

    const objUsuarioService = new UsuarioService();

    router.get('/validarEmail/:email',async function(req,res){
        try{

            const {email} = req.params;
            const existe = await objUsuarioService.VerificarEmailRepetido(email);
            res.status(200).json({
                status:true,
                content:existe
            })
        }catch(err){
            console.log(err)
        }
    });

    router.post('/crear',async function(req,res){
        try{
            const {body : usuario} = req;

            console.log({usuario});
            const crearUsuario = await objUsuarioService.create({usuario});
            res.status(201).json({
                status:true,
                content:crearUsuario
            })
        }catch(err){
            console.log(err)
        }
    });

    router.get('/:id',async function(req,res){
        try{

            const {id} = req.params;
            const usuario = await objUsuarioService.getOne({id});
            res.status(201).json({
                status:true,
                content:usuario
            })
        }catch(err){
            console.log(err)
        }
    });

    router.get('/login/:email/:password',async function(req,res){
        try{
            console.log(req.params);
            const {email,password} = req.params;
            const usuario = await objUsuarioService.login(email,password);
            res.status(201).json({
                status:true,
                content:usuario
            })
        }catch(err){
            console.log(err)
        }
    });

}

module.exports = usuarioApi;