function sumatoria() {
    var n = document.getElementById("numero_n").value
    let suma = 0
    for (let x = 1; x <= n; x++) {
        suma = suma + x
        console.log(suma)
    }
}