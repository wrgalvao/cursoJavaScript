var agora = new Date()
var hora = agora.getHours()
var horaAtual = document.getElementById('horaAtual')
var mensagem = document.getElementById('mensagem')
var secao = document.getElementById('secao')
var imagem = document.getElementById('foto')
horaAtual.innerHTML = 'AGORA SÃO EXATAMENTE '+ hora + ' HORAS !'
if(hora >= 6 && hora <= 11.59)
{
    mensagem.innerHTML = 'BOM DIA!'
    secao.style.backgroundColor = 'yellow'
    horaAtual.style.color = 'blue'
    mensagem.style.color = 'blue'
    imagem.src = 'imagens/manha.jpg'
}
else if(hora >= 12 && hora <= 18)
{
    mensagem.innerHTML = 'BOA TARDE !'
    secao.style.backgroundColor = 'orange'
    horaAtual.style.color = 'white'
    mensagem.style.color = 'white'
    imagem.src = 'imagens/tarde.jpg'
}
else if(hora >= 00 && hora <= 5.59)
{
    mensagem.innerHTML = 'BOA MADRUGADA !'
    secao.style.backgroundColor = 'purple'
    horaAtual.style.color = 'white'
    mensagem.style.color = 'white'
    imagem.src = 'imagens/madrugada.jpg'
}
else
{
    horaAtual.style.color = 'white'
    mensagem.innerHTML = 'BOA NOITE !'
    mensagem.style.color = 'white'
    secao.style.backgroundColor = 'black'
    imagem.src = 'imagens/noite.jpg'
}