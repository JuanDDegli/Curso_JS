function verificar (){
    var data = new Date()
    var ano = data.getFullYear()
    var formano = document.getElementById('txtano')
    var res = document.getElementById('res')
        
        if (formano.value.length == 0 || formano.value > ano) {
        alert('[ERRO!] Verifique os dados e tente novamente!')
     } else {
        var formsex = document.getElementsByName('radsex')
        var idade = ano - Number(formano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (formsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 3){
                //bebe
                img.setAttribute('src', 'foto-bebe-m.png')
            }else if (idade < 11){
               //criança
               img.setAttribute('src','foto-crianca-m.png')
            } else if (idade < 18){
                //adolescente
                img.setAttribute('src', 'foto-adolescente-m.png')
               } else if(idade < 30) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            }else {
                //idoso
                img.setAttribute('src','foto-idoso-m.png')
            }

            
        } else if (formsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 3){
                //bebe
                img.setAttribute('src', 'foto-bebe-f.png')
            }else if (idade < 11){
               //criança
               img.setAttribute('src','foto-crianca-f.png')
            } else if (idade < 18){
                //adolescente
                img.setAttribute('src', 'foto-adolescente-f.png')
               } else if(idade < 30) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            }else {
                //idoso
                img.setAttribute('src','foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Encontramos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}