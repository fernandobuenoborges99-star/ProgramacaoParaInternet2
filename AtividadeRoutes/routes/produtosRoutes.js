import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Catálogo de produtos disponíveis');
});

router.get('/promocoes', (req, res) => {
  res.send('Lista de produtos em promoção');
});

router.get('/categoria/:nomeCategoria', (req, res) => {
  const { nomeCategoria } = req.params;
  res.send(`Filtrando produtos pela categoria: ${nomeCategoria}`);
});

export default router;