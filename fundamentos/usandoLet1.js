let numero = 1

{
    let numero = 2
    console.log('Dentro:', numero)
}

console.log('Fora:', numero)

{
    let numero1 = 3
    console.log('Dentro:', numero) 
    //Quando não encontra a variável dentro do bloco, ele procura fora!
}