var num = [1,2,3]
num[3] = 4   //ADICIONANDO VALOR NO FINAL DO ARRAY DE FORMA MANUAL
num.push(7)  //METODO PUSH() para adicionar o valor 7 no final do array

var numeroDesordenados = [4,2,1,5,9]
var numerosOrdenados = numeroDesordenados.sort() //METODO sort() serve para ordenar o array em ordem crescente

//IMPRIMINDO UM ARRAY
for(var i=0;i<numerosOrdenados.length;i++)
{
    console.log(`A posicao ${i} tem o valor ${numerosOrdenados[i]}`)
}

//OUTRA FORMA DE VARRER UM ARRAY EM JAVASCRIPT
console.log('imprimindo da segunda forma')
for(var i in numerosOrdenados)
{
    console.log(`A posicao ${i} tem o valor ${numerosOrdenados[i]}`)
}
var posicao = numeroDesordenados.indexOf(5)  //pegando a posicao onde se encontra o valor 2 do array num
console.log(`O valor 5 está na posição ${posicao}`)