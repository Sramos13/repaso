const FacturaProducto = require('../models/facturaProducto.models.js');
const Factura = require('../models/factura.models.js');
const Producto = require('../models/producto.models.js');

module.exports.CrearFacturaProducto = async (req, res) => {
    try {
        const { facturaId, productoId } = req.body;

        // Verifica que la factura y el producto existan
    const factura = await Factura.findByPk(facturaId);
    const producto = await Producto.findByPk(productoId);

        if (!factura || !producto) {
            return res.status(404).json({ message: 'Factura o Producto no encontrado' });
        }

        // Crea la relación factura-producto
        const nuevaFacturaProducto = new FacturaProducto({
            facturaId,
            productoId
        });

        await nuevaFacturaProducto.save();

        res.status(201).json(nuevaFacturaProducto);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la relación', error });
    }
};
