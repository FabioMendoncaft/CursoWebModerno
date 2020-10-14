{
    {
        {
            var sera = 'Será???'
            console.log(sera)
        }
    }
}

console.log(sera) //Funciona normalmente, pois a variável foi declarada com VAR, só não vai funcionar quando a variável for declarada dentro de uma função!

function teste(){
    var local = 112
    console.log(local)
}

teste()
//console.log(local) //[ERRO] A variável foi declarada dentro de uma função, logo só será vista dentro dela!
