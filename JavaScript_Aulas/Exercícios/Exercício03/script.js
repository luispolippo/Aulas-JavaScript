function contar(){

    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res = document.getElementById('resultado')


    if(passo.value <= 0){
        alert('[ERRO] Valor de Inicio não pode ser 0 ou menor. Será considerado valor 1')
        passo.value = 1
    }


    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length ==0){
        
        alert('[ERRO] Faltam Dados!')

    } else {

        res.innerHTML = "Contando:"
        i = Number(inicio.value)
        f = Number(fim.value)
        p = Number(passo.value)


        if(i < f){

            for(var c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449} `
            }
        } else {

            for (var c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }

        }

        res.innerHTML += `\u{1F3C1}`

    } 

}