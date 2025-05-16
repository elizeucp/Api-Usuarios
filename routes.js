const express = require('express');
const router = express.Router();
const db = require('./db');

// Rota POST para inserir usuário
router.post('/usuarios', (req, res) => {
  const { nome, senha } = req.body;
  const sql = 'INSERT INTO usuarios (nome, senha) VALUES (?, ?)';
  db.query(sql, [nome, senha], (err, result) => {
    if (err) return res.status(500).send('Erro ao inserir usuário');
    res.status(201).json({ id: result.insertId, nome });
  });
});

// Rota GET para listar todos os usuários
router.get('/usuarios', (req, res) => {
  db.query('SELECT * FROM usuarios', (err, results) => {
    if (err) return res.status(500).send('Erro ao buscar usuários');
    res.json(results);
  });
});

module.exports = router;
