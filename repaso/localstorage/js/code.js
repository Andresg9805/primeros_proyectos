function obtenerStorage(){

}




function guardarLocalStorage(){
    let persona={
        nombre: "amira",
        celular: "3123227251",
        correo: "candela-amira@hotmail.com",
        edad: 46,
    }
    let nombre="andres velasco"

    localStorage.setItem("nombre", JSON.stringify(persona.nombre))
    localStorage.setItem("celular",JSON.stringify(persona.celular))
    localStorage.setItem("edad",JSON.stringify(persona.edad))
    console.log(nombreStorage,edadStorage)
}
guardarLocalStorage()