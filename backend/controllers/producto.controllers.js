const Producto = require('../models/producto.models.js');

module.exports.CrearProducto = async (req,res)=>{
    const {nombre,precio}= req.body;
    try{
        if(!nombre || !precio){
            return res.status(400).json({error:'Los campos nombre y precio son obligatorios'});
        }
        const nuevoProducto = await Producto.create({nombre, precio});
        res.status(201).json(nuevoProducto);
    }catch(error){
        console.error('Error al crear el producto:', error);
        res.status(500).json({
            error: 'Error al crear el producto',
            detalle: error.message,
            stack: error.stack
        });
    }
};

module.exports.ObtenerProductos = async(req,res)=>{
    try{
        const productos = await Producto.findAll();
        res.status(200).json(productos);
    }catch(error){
        console.error('Error al obtener los productos:', error);
        res.status(500).json({error:'Error al obtener los productos'});
    }
};

module.exports.EliminarProductos = async(req,res)=>{
    try{
        const producto = await Producto.findOne({where:{id:req.params.id}});
        if(!producto){
            return res.status(404).json({error:'Producto no encontrado'});
        }
        await Producto.destroy({where:{id:req.params.id}});
        res.status(200).json({message:'Producto eliminado correctamente'});
    }catch(error){
        console.error('Error al eliminar el producto:', error);
        res.status(500).json({error:'Error al eliminar el producto'});
    }
};

module.exports.ActualizarProducto = async(req,res)=>{
    const {nombre, precio} = req.body;
    try{
        const producto = await Producto.findOne({where:{id:req.params.id}});
        if(!producto){
            return res.status(404).json({error:'Producto no encontrado'});
        }
        await Producto.update({nombre, precio},{where:{id:req.params.id}});
        res.status(200).json({message:'Producto actualizado correctamente'});
    }catch(error){
        console.error('Error al actualizar el producto:', error);
        res.status(500).json({error:'Error al actualizar el producto'});
    }
};
