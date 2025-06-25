// Importar o módulo express
const express = require('express');
// Importar Controller de livros
const filmeController = require('./controllers/filme.controller');


// Cria uma instância do express
const app = express();

// Configura o EJS como um motor de visualização
app.set('view engine', 'ejs');
app.set('views', './views');s

//Criando rota para listar todos os livros
app.get('/filmes',filmeController.listarFilmes)

//Configura a porta do servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

