// função para resolver uma equação de segundo grau
//ax²+bx+c
function resolverEquaçãoSegundoGrau(a,b,c)
{
    // pasaso 1: calcular o delta 
    // o delta nos ajuda a determinar o número de soluções reais :)

    let delta = b*b-4*a*c 
// passo 2; verificar se o delta é negativo, zero ou possitivo

if(delta<0){
// se delta <0, a esquação não tem soluções reais 
console.log("A equação não tem soluções reais")
}else if(delta===0){
// se delta for igual a zero, a equação deles tem raizes iguais
let x = -b/(2*a)
console.log("A equação tem uma solução real, x= ", x)
}
else{
    // se delta fo possitivo, a equação tem duas soluções diferetes 
    let x1 = (-b + Math.sqrt(delta))/(2*a)
    let x2 = (-b- Math.sqrt(delta))/(2*a)

console.log("A equação tem duas raizes reais:",x1,"e x2=",x2)
}
}
resolverEquaçãoSegundoGrau(10,-100,16)