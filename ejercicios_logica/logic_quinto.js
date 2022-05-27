function calculador()
{
    let prom=document.getElementById("money").value
    let matri=1000000
    if(prom<3)
    {
        console.log("no aplica para ningún descuento y tiene que pagar"+" "+`${matri} "$"`)
    }
    else if(prom>=3 && prom<=4)
    {
        var op=matri-(matri*.05)
        console.log(`felicidades usted tiene que pagar ${op} gracias al descuento aplicado`)
    }
    else if(prom>4 && prom<=5)
    {
        var op=matri-(matri*.5)
        console.log(`felicidades usted tiene que pagar ${op} gracias al descuento aplicado`)
    }
    else if(prom<=-1 || prom>5)
    {
        console.log("Por favor digite un número que esté en el rango de 0 a 5")
    }
}