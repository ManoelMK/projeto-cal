function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.getElementById('res')
   if(fano.value.length == 0 || Number(fano.value) > ano){
     window.alert('verifique os dados e tente novamente')
   }
   else{
     var fsex = document.getElementsByName('radsex')
     var idade = ano - Number(fano.value)
     var gênero = ''
     var img = document.createElement('img')
     img.setAttribute('id','foto')
     if(fsex[0].checked){
         gênero = 'Homen'
         if(idade >=0 && idade < 10){
            //criança 
            img.setAttribute('src','criança-homen1.jpg')
         }
         else if(idade <21){
           //jovem
           img.setAttribute('src','jovem homen1.jpg')
         }
         else if( idade <50){
           //adulto
           img.setAttribute('src','adulto homen1.jpg')
         }
         else{
           //idoso
           img.setAttribute('src','idoso homen1.jpg')
         }
        }
        else if(fsex[1].checked){
            gênero = 'Mulher'
        if(idade >=0 && idade <10){
            //criança 
            img.setAttribute('src','criança mulher1.jpg')
         }
         else if(idade <21){
           //jovem
           img.setAttribute('src','jovem mulher1.jpg')
         }
         else if( idade <50){
           //adulto
           img.setAttribute('src','adulta mulher1.jpg')
         }
         else{
           //idoso
           img.setAttribute('src','idosa mulher1.jpg')
         }
     }
     res.innerHTML = `detectamos ${ gênero} com ${idade} anos`
     
     res.appendChild(img)
   }
}  