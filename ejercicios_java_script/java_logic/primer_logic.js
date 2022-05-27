var btnOperacion= document.querySelector("#addInfo")
btnOperacion.addEventListener("click",()=>{
    let numero1=document.querySelector("#num1").value 
    let numero2=document.querySelector("#num2").value
    var suma
    var resta
    var multiplicacion
    var division
    if(numero1<numero2)
    {
        console.log("numero 1 no es mayor que numero 2")
        if(numero2>0){
            suma=parseInt(numero1)+parseInt(numero2)
            resta=parseInt(numero1)-parseInt(numero2)
            resta= resta*(-1)
            multiplicacion=parseInt(numero1)*parseInt(numero2)
            division=parseInt(numero2)/parseInt(numero1)
            console.log("numero 2 es positivo")
            console.log(`la suma entre numero1 y numero2 es igual a ${suma}`)
            console.log(`la resta entre numero1 y numero2 es igual a ${resta}`)
            console.log(`la multiplicacion entre numero1 y numero2 es igual a ${multiplicacion}`)
            console.log(`la division entre numero2 y numero1 es igual a ${division}`)
        }
    }else if(numero1<0 || numero1!=0 ){
        console.log( "numero1 es negativo o distinto de cero")
    }
})