const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const app = express();

app.use(express.json());

// **Serve arquivos estáticos da pasta "public"**
// Isso significa que, ao acessar o servidor, ele vai entregar o conteúdo dos arquivos dessa pasta
app.use(express.static(path.join(__dirname, 'public')));

// Configuração da conexão MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Elizzmysql0117#',
  database: 'bluedorian'
});

// Rota POST para login
app.post('/login', (req, res) => {
  const { email, senha } = req.body;

  // Query para buscar usuário com email e senha correspondentes
  const sql = 'SELECT * FROM usuarios WHERE email = ? AND senha = ?';
  db.query(sql, [email, senha], (err, resultados) => {
    if (err) {
      console.error('Erro ao acessar o banco:', err);
      return res.status(500).json({ erro: 'Erro interno no servidor' });
    }

    if (resultados.length > 0) {
      // Usuário encontrado
      res.json({ sucesso: true });
    } else {
      // Usuário não encontrado
      res.json({ sucesso: false });
    }
  });
});

// Inicializa o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
