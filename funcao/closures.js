// Closure é o escopo criado uma função é declarada
// Esse ecopo permite a função acessare manipular variáveis externas à função

// Contexto léxico em ação

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())