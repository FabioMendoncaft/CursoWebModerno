//Armazenando uma função em uma variável!
const imprimirSoma = function(a, b){
    console.log(a + b)
}

imprimirSoma(3, 2)

//Armazenando uma fução ARROW em uma variável!
const soma = (a, b) => {
    return a + b
}

console.log(soma(3, 2))

//Retorno implícido
const subtracao = (a, b) => a - b

console.log(subtracao(5, 2))

const imprimir2 = a => console.log(a)

imprimir2('Olá mundo!')