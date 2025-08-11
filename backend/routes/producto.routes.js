
const productoController = require('../controllers/producto.controllers');

module.exports = (app) => {
    app.post('/productos', productoController.CrearProducto);
    app.get('/productos', productoController.ObtenerProductos);
    app.put('/productos/:id', productoController.ActualizarProducto);
    app.delete('/productos/:id', productoController.EliminarProductos);
};
