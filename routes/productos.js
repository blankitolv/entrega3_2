// importo express
const express = require ('express');
const fs = require('fs');

const { Router } = express
const router = Router();

// manejo de posicion relativa y absoluta
const path = require('path');

// clase
const Contenedor = require ('../Contenedor');

const name='\\productos.txt'
user_path_file=(__dirname.toString()).concat(name);

const oneContainer= new Contenedor(user_path_file)

router.get ('/', async (req,res)=>{
     response = await oneContainer.getAll();
     res.send (response)
})

router.get ('/:id', async (req,res)=>{
     const { id } = req.params;
     console.log ('ID: '+id);
     response = await oneContainer.getById(id);
     if (response == undefined) {
          response='Producto no encontrado'
     }
     res.send (response)
})

router.post ('/', async (req,res)=>{
     const obj = req.body
     response=null
     if (obj.title != '' || obj.price != ''){
          response = await oneContainer.save(obj)
     } else {
          response='Error al cargar el producto'
     }
     res.send (response)
})
router.put('/:id', async (req,res)=>{
     let response=null
     const { id } = req.params;
     const obj = req.body;
     if (obj.title != '' || obj.price != ''){
          response = await oneContainer.update(obj,id)
     } else {
          response='Error al cargar el producto'
          res.sendStatus(400);
     }
     console.log (response);
     res.send(response);
})

router.delete('/:id', async (req,res)=>{
     const { id } = req.params;
     await oneContainer.deleteById(id);
     res.sendStatus(200);
})

module.exports = router