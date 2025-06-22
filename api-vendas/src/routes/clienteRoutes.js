const express = require('express');
const router = express.Router();
const controller = require('../controllers/clienteController');

router.get('/', controller.listarTodos);
router.get('/contar', controller.contar);
router.get('/nome/:nome', controller.buscarPorNome);
router.get('/:id', controller.buscarPorId);
router.post('/', controller.salvar);
router.put('/:id', controller.atualizar);
router.delete('/:id', controller.deletar);

module.exports = router;
