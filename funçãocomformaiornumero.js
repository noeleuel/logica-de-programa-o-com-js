const numeros = [14, 15, 17]
function devolveMaiorNumero(array) {
let maiorNumero = 0
for(let i = 0; i < array.lenght; i++)   {
let numeroAtual = array[i]

if(numeroAtual >= maiorNumero) {
    maiorNumero = numeroAtual 
}
 }
console.log("O maior numero do array é ", maiorNumero)


devolveMaiorNumero(numeros)
}