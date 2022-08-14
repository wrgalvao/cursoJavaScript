function tabuada()
{
    num = document.getElementById('valorTabuada')
    numero = Number.parseInt(num.value)
    tab = document.getElementById('seltab')
    tab.innerHTML = ''   
    for(var contador = 1;contador <= 10; contador++)
    {
        var item = document.createElement('option')
        item.text = `${numero} x ${contador} = ${numero*contador}`
        tab.appendChild(item)
    }
}