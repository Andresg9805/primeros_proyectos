let data = ["azul", 2, "colombia", 85, true, "felipe", "horacio", false, false, 39, 90, "JS"]
console.log(data)

let btnFunction = document.querySelector("#prueba")
btnFunction.addEventListener("click", () => {
    let numeros=[];
    contador=0
    for (const iterator of data) {
        console.log(iterator)
        if(iterator==true||iterator==false)
        {
            contador--
            if(Number(iterator))
            {
                contador++
                console.log(`hay ${iterator} elementos que son numeros`)
            }
        }
    }
    
})