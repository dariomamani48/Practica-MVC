let path = require('path')

const controller = {
    /* index:(req, res)=>{
        res.sendFile(path.join(__dirname,'../views/index.html'))
    }, */
    product: (req, res)=>{
        let idProducto = req.params.id;
        res.send("producto")
    }
    

 }

 module.exports =  controller;