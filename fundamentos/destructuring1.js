const pessoa = {
    nome: 'João',
    idade: 18,
    endereco:{
        rua: 'Mario Jorge',
        numero: 195,
    }
}

const {nome, idade} = pessoa
console.log('Nome:',nome,  ' Idade:',idade)

const {nome: n, idade: i} = pessoa
console.log('Nome:',n,  ' Idade:',i)

const {sobrenome: sb, bemHumorada:bh} = pessoa //Como são atributos que n existem em PESSOA irão retornar underfined
console.log(sb, bh)

const{ endereco: {rua, numero} } = pessoa
console.log(rua, numero)

//const{conta:{agencia, numero}} = pessoa //Nesse caso irá dar erro, pois está tentando acessar algo que não é objeto!