const express = require('express');
const path = require('path');
const db = require('./src/config/db');
const app = express();
const port = 3000;

// --- CONFIGURAÇÕES E MIDDLEWARES ---
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// --- ROTAS DE NAVEGAÇÃO ---

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'views', 'home.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'views', 'login.html'));
});

app.get('/pontos', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'views', 'pontos.html'));
});

// --- ÁREA DO CLIENTE ---
app.get('/solicitar-coleta', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'views', 'cliente', 'agendamento.html'));
});

app.get('/guia', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'views', 'cliente', 'guia.html'));
});

// --- ÁREA DO COLABORADOR ---
app.get('/painel-cooperativa', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'views', 'colaborador', 'painel.html'));
});

// --- ROTAS DE API ---

// POST: Salvar novo agendamento de coleta
app.post('/api/agendamento', (req, res) => {
    const { nome, telefone, endereco, tipo_residuo, data_coleta, observacoes } = req.body;

    if (!nome || !telefone || !endereco || !tipo_residuo || !data_coleta) {
        return res.status(400).json({ erro: 'Preencha todos os campos obrigatórios.' });
    }

    const sql = `INSERT INTO agendamentos (nome, telefone, endereco, tipo_residuo, data_coleta, observacoes, status)
                 VALUES (?, ?, ?, ?, ?, ?, 'pendente')`;

    db.query(sql, [nome, telefone, endereco, tipo_residuo, data_coleta, observacoes || ''], (err, result) => {
        if (err) {
            console.error('Erro ao salvar agendamento:', err);
            return res.status(500).json({ erro: 'Erro interno ao salvar.' });
        }
        res.status(201).json({ mensagem: 'Agendamento criado com sucesso!', id: result.insertId });
    });
});

// GET: Listar todos os agendamentos (para o painel do colaborador)
app.get('/api/agendamentos', (req, res) => {
    const sql = `SELECT * FROM agendamentos ORDER BY data_coleta ASC`;

    db.query(sql, (err, results) => {
        if (err) {
            console.error('Erro ao buscar agendamentos:', err);
            return res.status(500).json({ erro: 'Erro interno ao buscar dados.' });
        }
        res.json(results);
    });
});

// PATCH: Atualizar status de um agendamento
app.patch('/api/agendamento/:id/status', (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    const statusValidos = ['pendente', 'em_andamento', 'concluido', 'cancelado'];
    if (!statusValidos.includes(status)) {
        return res.status(400).json({ erro: 'Status inválido.' });
    }

    const sql = `UPDATE agendamentos SET status = ? WHERE id = ?`;
    db.query(sql, [status, id], (err) => {
        if (err) {
            console.error('Erro ao atualizar status:', err);
            return res.status(500).json({ erro: 'Erro interno.' });
        }
        res.json({ mensagem: 'Status atualizado com sucesso!' });
    });
});

// Inicialização do Servidor
app.listen(port, () => {
    console.log(`♻️ EcoPonto Digital rodando com sucesso em http://localhost:${port}`);
});
