const express = require('express');
const router = express.Router();

router.get('/add',async(req,res)=>{
    //res.send('soy el agregar');
    res.render('docentes/add');
});

router.get('/consultar',async(req,res)=>{
    //res.send('soy el consultar');
    res.render('docentes/consultar');
});

router.get('/update',async(req,res)=>{
    //res.send('soy el modificar');
    res.render('docentes/update');
});

router.get('/eliminar',async(req,res)=>{
    //res.send('soy el eliminar');
    res.render('docentes/eliminar');
});
module.exports= router;