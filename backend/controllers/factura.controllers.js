const Factura = require ('../models/factura.models.js');

module.exports.CrearFactura = async(req, res)=>{
    const {fecha, total}=  req.body;
    try{
        if(!fecha || !total){
            return res.status(400).json({error:'Los campos fecha y total son obligatorios'});
        }
        const nuevaFactura = await Factura.create({fecha,total});
        res.status(201).json(nuevaFactura);
    }catch(error){
        console.error('Error al crear la factura:', error);
        res.status(500).json({error:'Error al crear la factura'});
    }
};

module.exports.ObtenerFactura = async(req,res)=>{
    try{
        const facturas = await Factura.findAll();
        res.status(200).json(facturas);
    }catch(error){
        console.error('Error al obtener las facturas:', error);
        res.status(500).json({error:'Error al obtener las facturas'});
    }
};

module.exports.EliminarFactura = async(req,res)=>{
    try{
        const factura = await Factura.findOne({where:{id:req.params.id}});
        if(!factura){
            return res.status(404).json({error:'Factura no encontrada'});
        }
        await Factura.destroy({where:{id:req.params.id}});
        res.status(200).json({message:'Factura eliminada correctamente'});
    }catch(error){
        console.error('Error al eliminar la factura:', error);
        res.status(500).json({error:'Error al eliminar la factura'});
    }
};

module.exports.ActualizarFactura = async(req,res)=>{
    const {fecha, total} = req.body;
    try{
        const factura = await Factura.findOne({where:{id:req.params.id}});
        if(!factura){
            return res.status(404).json({error:'Factura no encontrada'});
        }
        await Factura.update({fecha, total},{where:{id:req.params.id}});
        res.status(200).json({message:'Factura actualizada correctamente'});
    }catch(error){
        console.error('Error al actualizar la factura:', error);
        res.status(500).json({error:'Error al actualizar la factura'});
    }
};
