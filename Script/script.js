const idade= document.querySelector("#verificar")
var p1=7
var p2=6

  verificar.addEventListener("click", function(e){

//recebendo valor do campo nome 
const nome= document.querySelector("#nome")
const nome1= nome.value

//console.log(nome1)

//recebendo valor do campo idade 
const idade= document.querySelector("#idade")
const anos=  idade.value 

//console.log(anos )
//realizando uma operação condicional ;)
if (anos >0 && anos<18){
    window.alert(`Por possuir ${anos} anos, você é considerado(a) menor de idade`)
}else if (anos >17){
    window.alert(`Por possuir ${anos} anos, você é considerado(a) maior de idade`)

    }else
    {
    window.alert(`Caro ${nome1}, por favor digite um valor válido `)
    }


    

})

