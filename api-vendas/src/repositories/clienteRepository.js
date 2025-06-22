const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  findAll: () => prisma.cliente.findMany(),
  findById: (id) => prisma.cliente.findUnique({ where: { id: Number(id) } }),
  findByNome: (nome) => prisma.cliente.findMany({ where: { nome: { contains: nome } } }),
  create: (data) => prisma.cliente.create({ data }),
  update: (id, data) => prisma.cliente.update({ where: { id: Number(id) }, data }),
  remove: (id) => prisma.cliente.delete({ where: { id: Number(id) } }),
  count: () => prisma.cliente.count()
};
