const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./config/sequelize.config.js');

const getAllProducto = require('./routes/producto.routes.js');
getAllProducto(app);

const getAllFactura = require('./routes/factura.routes.js');
getAllFactura(app);

const getAllfacturaProducto = require('./routes/facturaProducto.routes.js');
getAllfacturaProducto(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});