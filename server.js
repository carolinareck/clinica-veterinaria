// Estrutura básica do backend usando Node.js + Express + SQLite

const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Conexão com banco SQLite
const db = new sqlite3.Database('./database/banco.db', (err) => {
  if (err) return console.error(err.message);
  console.log('Conectado ao banco SQLite');
});

// Cria tabelas (caso não existam)
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS animais (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    especie TEXT,
    raca TEXT,
    idade INTEGER,
    tutor TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS servicos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    tipo TEXT,
    data TEXT,
    descricao TEXT,
    id_animal INTEGER,
    FOREIGN KEY (id_animal) REFERENCES animais(id)
  )`);
});

// Rotas

// Cadastro de animal
app.post('/animais', (req, res) => {
  const { nome, especie, raca, idade, tutor } = req.body;
  db.run(`INSERT INTO animais (nome, especie, raca, idade, tutor) VALUES (?, ?, ?, ?, ?)`,
    [nome, especie, raca, idade, tutor],
    function (err) {
      if (err) return res.status(500).send(err.message);
      res.status(201).send({ id: this.lastID });
    });
});

// Listar animais
app.get('/animais', (req, res) => {
  db.all(`SELECT * FROM animais`, [], (err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.send(rows);
  });
});

// Registrar serviço
app.post('/servicos', (req, res) => {
  const { tipo, data, descricao, id_animal } = req.body;
  db.run(`INSERT INTO servicos (tipo, data, descricao, id_animal) VALUES (?, ?, ?, ?)`,
    [tipo, data, descricao, id_animal],
    function (err) {
      if (err) return res.status(500).send(err.message);
      res.status(201).send({ id: this.lastID });
    });
});

// Consultar histórico por animal
app.get('/historico/:id_animal', (req, res) => {
  const id = req.params.id_animal;
  db.all(`SELECT * FROM servicos WHERE id_animal = ?`, [id], (err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.send(rows);
  });
});

// Inicializar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
