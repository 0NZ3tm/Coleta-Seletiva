const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '85750076', // Coloque a senha que você configurou no Workbench
    database: 'coleta_seletiva' // Coloque o nome do banco de dados que você criou (ex: coleta_seletiva)
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco:', err);
        return;
    }
    console.log('Conectado ao MySQL com sucesso!');
});

module.exports = connection;