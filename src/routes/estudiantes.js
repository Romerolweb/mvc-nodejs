const express = require('express');
const router = express.Router();

router.get('/add',async(req,res)=>{
    //res.send('soy el agregar');
    res.render('estudiantes/add');
});

router.get('/consultar',async(req,res)=>{
    //res.send('soy el consultar');
    res.render('estudiantes/consultar');
});

router.get('/update',async(req,res)=>{
    //res.send('soy el modificar');
    res.render('estudiantes/update');
});

router.get('/eliminar',async(req,res)=>{
    //res.send('soy el eliminar');
    res.render('estudiantes/eliminar');
});
module.exports= router;