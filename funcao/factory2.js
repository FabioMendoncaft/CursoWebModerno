function criarProduto(nome, preco){
    return{
        Nome: nome,
        Valor: preco,
        Desconto: 0.2
    }
}

console.log(criarProduto("Desktop", 5000.00))
console.log(criarProduto("Ipad", 4000.00))

