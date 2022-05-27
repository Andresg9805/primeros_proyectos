function multiplicacion ()
{
    var mul = document.getElementById("calculator").value
    var lim = document.getElementById("limit").value
    for (let x = 0; x <=lim; x++) {
        console.log(`${mul} X ${x} = ${mul * x}`)
        
    }
}