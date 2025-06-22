const repo = require('../repositories/clienteRepository');

module.exports = {
  listarTodos: repo.findAll,
  buscarPorId: repo.findById,
  buscarPorNome: repo.findByNome,
  salvar: repo.create,
  atualizar: repo.update,
  deletar: repo.remove,
  contar: repo.count
};
