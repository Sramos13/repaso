const {DataTypes}= require('sequelize');
const sequelize = require('../config/sequelize.config');
const Producto = require ('./producto.models.js');
const Factura = require ('./factura.models.js');

const FacturaProducto = sequelize.define('FacturaProducto',{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        validate:{
            notNull:{
                msg:'El campo id no puede ser nulo'
            }
        }
    },
    productoId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:Producto,
            key:'id'
        }
    },
    facturaId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:Factura,
            key:'id'
        }
    }
});
FacturaProducto.belongsTo(Producto,{foreignKey:'productoId',as:'producto'}); //hacer la relacion con el modelo producto
FacturaProducto.belongsTo(Factura,{foreignKey:'facturaId',as:'factura'});

module.exports = FacturaProducto;