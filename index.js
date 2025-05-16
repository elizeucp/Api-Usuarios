const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.json()); // Permite receber JSON do body
app.use('/', routes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
