import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Lista geral de pedidos realizados');
});

router.get('/meus-pedidos', (req, res) => {
  res.send('Histórico de pedidos do cliente');
});

router.get('/status/:codigo', (req, res) => {
  const { codigo } = req.params;
  res.send(`Consultando status do pedido número: ${codigo}`);
});

export default router;