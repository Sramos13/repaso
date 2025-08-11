
const facturaProductoController = require('../controllers/facturaProducto.controllers');

module.exports = (app) => {
	app.post('/facturaproducto', facturaProductoController.CrearFacturaProducto);
};
