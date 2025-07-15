const express = require('express');
const router = express.Router();

// Controllers (importe cada um conforme sua estrutura)
const usuarioController = require('./controllers/usuarioController.js');
const clienteController = require('./controllers/clienteController.js');
const produtoController = require('./controllers/produtoController.js');
const vendaController = require('./controllers/vendaController.js');
const itemVendaController = require('./controllers/itemVendaController.js');
const relatorioVendaController = require('./controllers/relatorioVendaController.js');

// Rotas de Usuário
router.post('/usuarios', usuarioController.create);
router.get('/usuarios', usuarioController.findAll);
router.get('/usuarios/:id', usuarioController.findOne);
router.put('/usuarios/:id', usuarioController.update);
router.delete('/usuarios/:id', usuarioController.delete);

// Rotas de Cliente
router.post('/clientes', clienteController.create);
router.get('/clientes', clienteController.findAll);
router.get('/clientes/:id', clienteController.findOne);
router.put('/clientes/:id', clienteController.update);
router.delete('/clientes/:id', clienteController.delete);

// Rotas de Produto
router.post('/produtos', produtoController.create);
router.get('/produtos', produtoController.findAll);
router.get('/produtos/:id', produtoController.findOne);
router.put('/produtos/:id', produtoController.update);
router.delete('/produtos/:id', produtoController.delete);

// Rotas de Venda
router.post('/vendas', vendaController.create);
router.get('/vendas', vendaController.findAll);
router.get('/vendas/:id', vendaController.findOne);
router.put('/vendas/:id', vendaController.update);
router.delete('/vendas/:id', vendaController.delete);

// Rotas de ItemVenda
router.post('/itensvenda', itemVendaController.create);
router.get('/itensvenda', itemVendaController.findAll);
router.get('/itensvenda/:id', itemVendaController.findOne);
router.put('/itensvenda/:id', itemVendaController.update);
router.delete('/itensvenda/:id', itemVendaController.delete);

// Rotas de RelatorioVenda
router.post('/relatoriosvenda', relatorioVendaController.create);
router.get('/relatoriosvenda', relatorioVendaController.findAll);
router.get('/relatoriosvenda/:id', relatorioVendaController.findOne);
router.put('/relatoriosvenda/:id', relatorioVendaController.update);
router.delete('/relatoriosvenda/:id', relatorioVendaController.delete);

module.exports = router;