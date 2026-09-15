import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Lista de todos os usuários cadatrados');
});

router.get('/perfil', (req, res) => {
  res.send('Página de perfil do usuário logado');
});

router.get('/login', (req, res) => {
  res.send('Formulário de login de usuários');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.send(`Detalhes do usuário com ID: ${id}`);
});

export default router;