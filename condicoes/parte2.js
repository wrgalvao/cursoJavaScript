var agora = new Date()
hora = agora.getHours()
console.log(`Agora sao exatamente ${hora} horas`)
if(hora >= 12 && hora <= 17.59)
{
    console.log('Boa tarde')
}
else if(hora > 6 && hora <= 11.59)
{
    console.log('BOM DIA')
}
else if(hora > 0 && hora <= 5.59)
{
    console.log('boa madrugada')
}
else
{
    console.log('boa noite')
}
