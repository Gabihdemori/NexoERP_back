const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Criar relatório de venda
exports.create = async (req, res) => {
  try {
    const relatorio = await prisma.relatorioVenda.create({ data: req.body });
    res.status(201).json(relatorio);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Listar todos os relatórios de venda
exports.findAll = async (req, res) => {
  const relatorios = await prisma.relatorioVenda.findMany();
  res.json(relatorios);
};

// Buscar relatório de venda por ID
exports.findOne = async (req, res) => {
  const relatorio = await prisma.relatorioVenda.findUnique({ where: { id: Number(req.params.id) } });
  if (!relatorio) return res.status(404).json({ error: 'Relatório de venda não encontrado' });
  res.json(relatorio);
};

// Atualizar relatório de venda
exports.update = async (req, res) => {
  try {
    const relatorio = await prisma.relatorioVenda.update({
      where: { id: Number(req.params.id) },
      data: req.body,
    });
    res.json(relatorio);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Deletar relatório de venda
exports.delete = async (req, res) => {
  try {
    await prisma.relatorioVenda.delete({ where: { id: Number(req.params.id) } });
    res.json({ message: 'Relatório de venda deletado com sucesso' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};