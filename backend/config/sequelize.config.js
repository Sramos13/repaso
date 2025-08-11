const {Sequelize} = require ('sequelize');

const username = 'root';
const password = 'solange13';
const bdd_name = 'repaso';
const hostname ='localhost';

const initializeSequelize = new Sequelize(`mysql://${username}:${password}@localhost`);
initializeSequelize.query(`CREATE DATABASE IF NOT EXISTS ${bdd_name};`)
.then (()=>console.log('Base de datos creada o ya existe'))
.catch ((error) => {console.error('Error al crear la base de datos:',error); process.exit(1);});

const sequelize = new Sequelize(bdd_name, username, password,{
    host: hostname,
    dialect:'mysql'
});

sequelize.sync({alter:true})
.then(()=>{console.log('Base de datos sincronizada');})
.catch((error)=>{console.error('Error al sincronizar la base de datos:', error);});

module.exports = sequelize;