const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',           // coloque seu usuário do MySQL
  password: 'Elizzmysql0117#',  // substitua pela senha do seu MySQL
  database: 'bluedorian' // ou o nome do seu schema no Workbench
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
    return;
  }
  console.log('Conectado ao banco de dados!');
});

module.exports = db;
