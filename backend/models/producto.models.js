const {DataTypes} = require ('sequelize');
const sequelize = require ('../config/sequelize.config');

const Producto = sequelize.define('Producto',{
    id:{
        type: DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        validate:{
            notNull:{
                msg: 'El campo id no puede ser nulo'
            }
        }
    },
    nombre:{
        type: DataTypes.STRING(50),
        allowNull: false,
        validate:{
            notNull:{
                msg:'El campo nombre no puede ser nulo'
            }
        }
    },
    precio:{
        type: DataTypes.DECIMAL(10,2),
        allowNull: false,
        validate:{
            notNull:{
                msg:'El campo precio no puede ser nulo'
            }
        }
    }
});

module.exports = Producto;