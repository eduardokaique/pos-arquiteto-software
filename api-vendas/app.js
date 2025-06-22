const express = require('express');
const app = express();
const clienteRoutes = require('./src/routes/clienteRoutes');

app.use(express.json());
app.use('/clientes', clienteRoutes);

module.exports = app;
