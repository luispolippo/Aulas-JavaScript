var valores = []

function add(){
    
    document.getElementById('res').innerHTML = ''
    let num = document.getElementById('txtnum').value

    if(num.length == 0){
        alert(`Digite um número!`)
    } else if (num < 1 || num > 100){
        alert(`O número digitado deve estar entre 1 e 100`)
        document.getElementById('txtnum').value = ''
    } else if(valores.indexOf(num) != -1){
        alert(`Número já consta na lista!`)
        document.getElementById('txtnum').value = ''
    } else {
          valores.push(num)
          let lista = document.getElementById('sel')
          let opcao = document.createElement('option')
          opcao.innerHTML = `Valor ${num} adicionado`
          lista.appendChild(opcao)
          document.getElementById('txtnum').value = ''
    }

}

function finalizar(){

    if(valores.length == 0){
        alert(`Adicione um número acima!`)
    } else{
        let res = document.getElementById('res')
        valores.sort()
        var soma = 0
        
        for(var i = 0; i < valores.length; i++){
            
            soma += Number(valores[i])
            
        }
        
        

        let media = Number(soma/(valores.length))

        res.innerHTML = `<p>Ao todo temos ${valores.length} cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${valores[valores.length-1]}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${valores[0]}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`

    }
}
