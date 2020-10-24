function soBoaNoticia(nota){
    if(nota >= 7){
        console.log(`Aprovado com ${nota}`)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log(`É verdade... ${valor}`)
    }
}

//Todas as formas abaixo irão retornar false
seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)

//Todas as formas abaixo irão retornar true

seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})
