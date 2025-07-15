// usuarioController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Criar usuário
exports.create = async (req, res) => {
  try {
    const usuario = await prisma.usuario.create({ data: req.body });
    res.status(201).json(usuario);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Listar todos os usuários
exports.findAll = async (req, res) => {
  const usuarios = await prisma.usuario.findMany();
  res.json(usuarios);
};

// Buscar usuário por ID
exports.findOne = async (req, res) => {
  const usuario = await prisma.usuario.findUnique({ where: { id: Number(req.params.id) } });
  if (!usuario) return res.status(404).json({ error: 'Usuário não encontrado' });
  res.json(usuario);
};

// Atualizar usuário
exports.update = async (req, res) => {
  try {
    const usuario = await prisma.usuario.update({
      where: { id: Number(req.params.id) },
      data: req.body,
    });
    res.json(usuario);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Deletar usuário
exports.delete = async (req, res) => {
  try {
    await prisma.usuario.delete({ where: { id: Number(req.params.id) } });
    res.json({ message: 'Usuário deletado com sucesso' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
    create,
    read,
    readOne,
    update,
    remove
};