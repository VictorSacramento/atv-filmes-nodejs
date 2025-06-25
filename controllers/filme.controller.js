const filmeModel = require('../models/filme.model.js');

function listarFilmes(req, res) {

    const filmes = filmeModel.listarFilmes();
    res.send(filmes);
    res.render('listar-filmes');
};

module.exports = {
    listarFilmes
};