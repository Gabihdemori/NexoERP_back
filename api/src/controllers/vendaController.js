const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Criar venda
exports.create = async (req, res) => {
  try {
    const venda = await prisma.venda.create({ data: req.body });
    res.status(201).json(venda);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Listar todas as vendas
exports.findAll = async (req, res) => {
  const vendas = await prisma.venda.findMany();
  res.json(vendas);
};

// Buscar venda por ID
exports.findOne = async (req, res) => {
  const venda = await prisma.venda.findUnique({ where: { id: Number(req.params.id) } });
  if (!venda) return res.status(404).json({ error: 'Venda não encontrada' });
  res.json(venda);
};

// Atualizar venda
exports.update = async (req, res) => {
  try {
    const venda = await prisma.venda.update({
      where: { id: Number(req.params.id) },
      data: req.body,
    });
    res.json(venda);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Deletar venda
exports.delete = async (req, res) => {
  try {
    await prisma.venda.delete({ where: { id: Number(req.params.id) } });
    res.json({ message: 'Venda deletada com sucesso' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};