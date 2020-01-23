function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano= document.getElementById('ano');
    var res = document.querySelector('div#res');

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Vefiique os dados e tente novamente')
    }else{
        var fsexo= document.getElementsByName("sexo")
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsexo[0].checked){
            genero = "Homem"
            if(idade>=0 || idade <=10){
                 img.setAttribute('src','bebehomem.png')
            }
            if(idade>10 && idade<=21){
                img.setAttribute('src','jovemhomem.png')
            }
            if(idade>=21 && idade<=50){
                img.setAttribute('src','adultohomem.png')
            } 
            if(idade>50){
                img.setAttribute('src','idosohomem.png')
            }

        }  else if (fsexo[1].checked){
            genero = "Mulher"
            if(idade>=0 || idade <=10){
                img.setAttribute('src','bebemulher.png')
           }
           if(idade>10 && idade<=21){
               img.setAttribute('src','jovemmulher.png')
           }
           if(idade>=21 && idade<=50){
               img.setAttribute('src','adultomulher.png')
           } 
           if(idade>50){
               img.setAttribute('src','idosamulher.png')
           }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}