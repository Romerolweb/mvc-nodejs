const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/add',async(req,res)=>{
    //res.send('soy el consultar');
    res.render('links/add');
});

router.post('/add',async(req,res)=>{
    //res.send('soy el agregar');
   // console.log(req.body);
    const {nombre, usuario, contra, edad} = req.body;
    const newUser ={nombre, usuario, contra, edad};
    await pool.query('insert into usuarios set ?',[newUser]);
    res.redirect('/links/add');
   // res.render('links/add');
});

router.get('/consultar',async(req,res)=>{
    //res.send('soy el consultar');
    const usua = await pool.query('select * from usuarios');

    res.render('links/consultar',{usua});
});

router.get('/update',async(req,res)=>{
    //res.send('soy el modificar');
    const usua = await pool.query('select * from usuarios');
    res.render('links/update',{usua});
});

router.get('/eliminar',async(req,res)=>{
    //res.send('soy el eliminar');
    const usua = await pool.query('select * from usuarios');
    res.render('links/eliminar',{usua});
});

router.get('/delete/:id',async(req,res)=>{
    const {id}= req.params;
    const usua =await pool.query('delete from usuarios where id=?',[id]);
    res.render('links/add');
});
module.exports= router;