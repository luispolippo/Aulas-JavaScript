function calcular(){

    var numero = document.getElementById('txtnum')
    var res = document.getElementById('res')

    if(numero.value.length == 0){

        alert('[ERRO] Número dever ser preenchido')

    } else {

        var numero = Number(numero.value)
        res.innerHTML = ''
        for(var c = 1; c <= 10; c++){
            
            var option = document.createElement('option')
           option.text += `${numero} x ${c} = ${numero*c}` 
           res.appendChild(option) 

        }


    }

}