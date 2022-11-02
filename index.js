
const  botao= document.getElementById('iniciar')
botao.addEventListener('click',()=>{

 let comFe= new Audio("Comfe.mp3");
 comFe.play()
 parar.addEventListener('click',()=>{
    const  parar= document.getElementById('parar')
    comFe.pause()
    
   
})

 
  
});



let btn = document.querySelector('#abrir')
let modal = document.querySelector('dialog')
let closeModal=document.querySelector('#fechar')

btn.onclick = function() {
  modal.show()
}
closeModal.onclick = function (){
  modal.close()
}