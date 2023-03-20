var n = window.document.getElementById('num')

var res = window.document.getElementById('res')

var lista = window.document.getElementById('lista')

valores = []

function Numero (n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    }else{
        return false
    }
}

function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
   if(Numero(n.value) && !inLista(n.value, valores)){

    valores.push(Number(n.value))
    var item = document.createElement('option')
    item.text = `Valor ${n.value} adicionado.`
    lista.appendChild(item)
    res.innerHTML = ''
   }else{
        window.alert('Valor inválido ou já encontrado na lista')

   }
     n.value = ''
     n.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar')
    }else{
        var total = valores.length
        var maior = valores[0]
        var menor = valores [0]
        var soma = 0
        var media = 0

        for (var pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        var media = soma/total
    }


    res.innerHTML += `<p> Ao todo temos ${total} números cadastrados.</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior}. <p/>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}. </p> `
    res.innerHTML += `<p> Somando todos os valores temos ${soma}.</p>`
    res.innerHTML += `<p>A média dos valores é ${media}.</p>`
    
}


