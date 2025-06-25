const filmeModel = require('../models/filme.model.js');

function listarFilmes(req, res) {

    const filmes = filmeModel.listarFilmes();
    res.render('listar-filmes',{filmes});
};

module.exports = {
    listarFilmes
};