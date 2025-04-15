var prompt = require('prompt-sync')();

// Array de produtos com preços
let produtos = [
    { nome: "Caneta ", preco: 8.00 },
    { nome: "Caderno ", preco: 12.00 },
    { nome: "Computador ", preco: 3500.00 },
    { nome: "Carregador ", preco: 136.00 }
];

// Exibindo os produtos e preços formatados
produtos.forEach(produto => {
    console.log(`${produto.nome} - R$ ${produto.preco.toFixed(2).replace(".", ",")}`);
});

