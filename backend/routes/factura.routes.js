
const facturaController = require('../controllers/factura.controllers');

module.exports = (app) => {
	app.post('/facturas', facturaController.CrearFactura);
	app.get('/facturas', facturaController.ObtenerFactura);
	app.put('/facturas/:id', facturaController.ActualizarFactura);
	app.delete('/facturas/:id', facturaController.EliminarFactura);
};