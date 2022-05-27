var nombres= ["andrés","laura","valerie","cristian","ingrid"]
var ejemplo=[true,"Karol"]
console.log(nombres)

function eliminar_ultimo()
{
    nombres.pop()
    
    console.log(nombres)

}
function eliminar_primero()
{
    nombres.shift(nombres)
}
function agregar()
{
    nombres.push("Amira")
    console.log(nombres)
}
function reemplaza_eliminar()
{
    nombres.splice(2,1,"reemplazo")
    console.log(nombres)

}
function unir_arreglos()
{
    let union = nombres.concat()
}
function orden()
{
    console.log(nombres.sort())
}
function buscar()
{
    console.log(nombres.indexOf("andres"))
}
function buscar_agregar()
{
    let texto_busqueda = document.querySelector("#busqueda").value
    
}