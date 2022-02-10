const express = require ('express');
const path = require('path');
const { Router } = express
const router = Router();

router.get ('/',(req,res)=>{
     res.sendFile(path.join(__dirname,'../public/index.html'))
})
router.get ('/productos',(req,res)=>{
     res.sendFile(path.join(__dirname,'../public/productos.html'))
})
module.exports = router;