var valor = document.getElementById('inicio')
var valor2 = document.getElementById('fim')
var valor3 = document.getElementById('passo')
var result = document.getElementById('res')

function contar()
{
    var inicio = Number.parseInt(valor.value)
    var fim = Number.parseInt(valor2.value)
    var passo = Number.parseInt(valor3.value)
    for(var contador = inicio; contador <= fim; contador += passo)
    {
        result.innerHTML += `${contador}`
    }
}