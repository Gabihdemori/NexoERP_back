const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Criar produto
exports.create = async (req, res) => {
  try {
    const produto = await prisma.produto.create({ data: req.body });
    res.status(201).json(produto);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Listar todos os produtos
exports.findAll = async (req, res) => {
  const produtos = await prisma.produto.findMany();
  res.json(produtos);
};

// Buscar produto por ID
exports.findOne = async (req, res) => {
  const produto = await prisma.produto.findUnique({ where: { id: Number(req.params.id) } });
  if (!produto) return res.status(404).json({ error: 'Produto não encontrado' });
  res.json(produto);
};

// Atualizar produto
exports.update = async (req, res) => {
  try {
    const produto = await prisma.produto.update({
      where: { id: Number(req.params.id) },
      data: req.body,
    });
    res.json(produto);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Deletar produto
exports.delete = async (req, res) => {
  try {
    await prisma.produto.delete({ where: { id: Number(req.params.id) } });
    res.json({ message: 'Produto deletado com sucesso' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};