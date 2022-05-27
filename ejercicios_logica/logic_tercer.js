function registrar() {
    var y = document.getElementById("age").value
    let a = document.getElementById("man")
    let b = document.getElementById("woman")
    let hombre = false

    if (document.getElementById("man").checked == true) {
        hombre = true
    }
    else (document.getElementById("woman").checked == true)
    {
        mujer = true
    }

    if (y <= 10) {
        console.log("Felicidades reclama un jugo hit")
    }
    else if (y >= 18 && a) {
        console.log("reclame una cerveza y una porción de pizza de 3 carnes")
    }
    else if (y >= 18 && b) {
        console.log("reclame una cerveza y porción de pizza hawaiana")
    }
    else {
        console.log("Lo sentimos, no aplica para alguna de nuestras promociones")
    }


}

