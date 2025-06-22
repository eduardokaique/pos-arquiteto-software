const service = require('../services/clienteService');

module.exports = {
  listarTodos: async (req, res) => res.json(await service.listarTodos()),
  buscarPorId: async (req, res) => {
    const cliente = await service.buscarPorId(req.params.id);
    cliente ? res.json(cliente) : res.status(404).send();
  },
  buscarPorNome: async (req, res) => res.json(await service.buscarPorNome(req.params.nome)),
  salvar: async (req, res) => res.status(201).json(await service.salvar(req.body)),
  atualizar: async (req, res) => res.json(await service.atualizar(req.params.id, req.body)),
  deletar: async (req, res) => {
    await service.deletar(req.params.id);
    res.status(204).send();
  },
  contar: async (req, res) => res.json({ total: await service.contar() })
};
