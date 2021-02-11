function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fAno.value.length == 0 || fAno.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fSex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fSex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade <= 10){
                //Criança
                img.setAttribute('src', 'crianca_homem.png')
            } else if(idade < 21 ){
                //Jovem
                img.setAttribute('src', 'jovem_homem.png')
            } else if(idade < 60){
                //Adulto
                img.setAttribute('src', 'adulto_homem.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso_homem.png')
            }
        } else if (fSex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <= 10){
                //Criança
                img.setAttribute('src', 'crianca_mulher.png')
            } else if(idade < 21 ){
                //Jovem
                img.setAttribute('src', 'jovem_mulher.png')
            } else if(idade < 60){
                //Adulto
                img.setAttribute('src', 'adulto_mulher.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso_mulher.png')
            }
        }
        
        var p = document.createElement('p')
        p.setAttribute('id', 'pFoto')
        p.style.textAlign = 'center'
        res.innerHTML = `${genero} com ${idade} anos`
        res.appendChild(p)
        p.appendChild(img) 
        
    }
}