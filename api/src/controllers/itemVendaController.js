const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Criar item de venda
exports.create = async (req, res) => {
  try {
    const itemVenda = await prisma.itemVenda.create({ data: req.body });
    res.status(201).json(itemVenda);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Listar todos os itens de venda
exports.findAll = async (req, res) => {
  const itensVenda = await prisma.itemVenda.findMany();
  res.json(itensVenda);
};

// Buscar item de venda por ID
exports.findOne = async (req, res) => {
  const itemVenda = await prisma.itemVenda.findUnique({ where: { id: Number(req.params.id) } });
  if (!itemVenda) return res.status(404).json({ error: 'Item de venda não encontrado' });
  res.json(itemVenda);
};

// Atualizar item de venda
exports.update = async (req, res) => {
  try {
    const itemVenda = await prisma.itemVenda.update({
      where: { id: Number(req.params.id) },
      data: req.body,
    });
    res.json(itemVenda);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Deletar item de venda
exports.delete = async (req, res) => {
  try {
    await prisma.itemVenda.delete({ where: { id: Number(req.params.id) } });
    res.json({ message: 'Item de venda deletado com sucesso' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};