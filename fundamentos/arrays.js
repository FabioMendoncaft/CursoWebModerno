const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0],valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores[4])

console.log(+ valores.length) //Ver elementos do array

valores.push({id:3}, false, null, 'teste') //Adicionar valores ao array

console.log(valores.pop()) //Tirar o ultimo valor do Array

 delete valores[0] //Excluir um valor do array

 console.log(typeof valores) //Ver o tipo da variárel 

 