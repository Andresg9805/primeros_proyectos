let comida = [
    "pizza de 4 estaciones",
    "pizza napolitana",
    "pizza de pollo y miel mostaza",
    "pizza de carne",
    "pizza de pollo con champiñones",
    "pizza de pepperoni"
]
let precio = [
    15000,
    20000,
    18000,
    25000,
    20000,
    15000
]



function btn_menu() {
    var price_comida=comida.indexOf(precio,[0])
    console.log(price_comida)
    var add_comida = document.querySelector("#food").value
    let clase_comida=localStorage.setItem("tipo_comida",add_comida)

    
    
}