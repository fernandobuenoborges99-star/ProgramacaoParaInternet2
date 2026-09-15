import express from 'express';

import usuariosRoutes from './routes/usuariosRoutes.js';
import produtosRoutes from './routes/produtosRoutes.js';
import pedidosRoutes from './routes/pedidosRoutes.js';

const app = express();
const PORTA = 8080;

app.get('/', (req, res) => {
  res.send('Servidor de e-commerce online!');
});

app.use('/usuarios', usuariosRoutes);
app.use('/produtos', produtosRoutes);
app.use('/pedidos', pedidosRoutes);

app.use((req, res) => {
  res.status(404).send('Recurso não encontrado no servidor!');
});

app.listen(PORTA, () => {
  console.log(`Servidor rodando em http://localhost:${PORTA}`);
});