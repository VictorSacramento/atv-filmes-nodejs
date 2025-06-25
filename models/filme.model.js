function listarFilmes() {
    const filmes = [
        { 
            id: 1, 
            titulo: 'O Senhor dos Anéis', 
            genero: 'Fantasia', 
            ano: 2001 
        },
        { 
            id: 2, 
            titulo: 'Matrix', 
            genero: 'Ficção Científica', 
            ano: 1999 
        },
        { 
            id: 3, 
            titulo: 'O Poderoso Chefão', 
            genero: 'Crime', 
            ano: 1972 },
    ];
    return filmes;
};

module.exports = {
    listarFilmes
};