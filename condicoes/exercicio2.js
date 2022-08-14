var agora = new Date()
var anoAtual = agora.getFullYear()
var imagem = document.getElementById('fotoSexo')
var nascimento = document.getElementById('nascimento')
var sexo = document.getElementById('sexo')
var idade = document.getElementById('idadeCalculada')
function verificar()
{
    idadeCalculada = anoAtual - Number(nascimento.value)
    idade.innerHTML = `A sua idade e: ${idadeCalculada} anos`
}