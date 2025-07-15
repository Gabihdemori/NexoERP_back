const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Criar cliente
exports.create = async (req, res) => {
  try {
    const cliente = await prisma.cliente.create({ data: req.body });
    res.status(201).json(cliente);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Listar todos os clientes
exports.findAll = async (req, res) => {
  const clientes = await prisma.cliente.findMany();
  res.json(clientes);
};

// Buscar cliente por ID
exports.findOne = async (req, res) => {
  const cliente = await prisma.cliente.findUnique({ where: { id: Number(req.params.id) } });
  if (!cliente) return res.status(404).json({ error: 'Cliente não encontrado' });
  res.json(cliente);
};

// Atualizar cliente
exports.update = async (req, res) => {
  try {
    const cliente = await prisma.cliente.update({
      where: { id: Number(req.params.id) },
      data: req.body,
    });
    res.json(cliente);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Deletar cliente
exports.delete = async (req, res) => {
  try {
    await prisma.cliente.delete({ where: { id: Number(req.params.id) } });
    res.json({ message: 'Cliente deletado com sucesso' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};