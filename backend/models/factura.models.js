const {DataTypes} = require ('sequelize');
const sequelize = require ('../config/sequelize.config');

const Factura = sequelize.define('Factura',{
    id:{
        type: DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        validate:{
            notNull:{
                msg:'El campo id no puede ser nulo'
            }
        }
    },
    fecha:{
        type: DataTypes.DATE,
        allowNull:false,
        validate:{
            notNull:{
                msg:'El campo fecha no puede ser nulo'
            }
        }
    },
    total:{
        type: DataTypes.DECIMAL(10,2),
        allowNull:false,
        validate:{
            notNull:{
                msg:'El campo total no puede ser nulo'
            }
        }
    }
});

module.exports = Factura;