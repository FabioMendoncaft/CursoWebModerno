//Par nome / Valor
const saudacao = 'Opa' // contexto léxico 1

function exec(){
    const saudacao = 'Falaaa' // contexto léxico
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 20,
    peso: 90,
    endereco: {
        AV: 'Mario Jorge',
        numero: 198
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)