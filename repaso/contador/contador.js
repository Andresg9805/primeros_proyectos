let contadorId=document.querySelector("#contador")
const btnAumentar=document.querySelector("#aumentar")
let contador=0
btnAumentar.addEventListener("click",()=>{
    contador++
    contadorId.textContent=contador
})
const btnDisminuir=document.querySelector("#disminuir")
btnDisminuir.addEventListener("click",()=>{
    contador--
    contadorId.textContent=contador
})