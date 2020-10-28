let dobro = function(a){
    return 2 * a
}

dobro = (a) => { 
    return 2 * a
}

dobro = (a) => 2 * a
console.log(dobro(Math.PI))

let ola = function(){
    return "Olá"
}

ola = () => 'Olá'
console.log(ola())

let multiplicacao = _ => 2 * _    // O ' _ ' pode ser usado como parâmetro!

console.log(multiplicacao(12))
