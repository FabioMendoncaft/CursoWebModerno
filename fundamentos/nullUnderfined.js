let valor // Não inicializada
console.log(valor)

valor = null // Ausencia de valor
console.log(valor)

// console.log(valor.toString()) ERRO! Você não pode acessar toString de um NULL!!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //Evite atribuir underfined !!
console.log(!!produto.preco)
//delete produto.preco  [O DELETE É USADO PARA EXCLUIR UM ATRIBUTO DO OBJETO!!]
console.log(produto)

produto.preco = null //Sem preço
console.log(!!produto.preco)
console.log(produto)
