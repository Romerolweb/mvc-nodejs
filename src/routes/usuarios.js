const express = require('express');
const router = express.Router();

router.get('/add',async(req,res)=>{
    //res.send('soy el agregar');
    res.render('usuarios/add');
});

router.get('/consultar',async(req,res)=>{
    //res.send('soy el consultar');
    res.render('usuarios/consultar');
});

router.get('/update',async(req,res)=>{
    //res.send('soy el modificar');
    res.render('usuarios/update');
});

router.get('/eliminar',async(req,res)=>{
    //res.send('soy el eliminar');
    res.render('usuarios/eliminar');
});
module.exports= router;