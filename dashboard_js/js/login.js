let baseDatos = [
    {
        id: 1,
        nombre: "Andres",
        apellido: "Velasco",
        correo: "andresg35@outlook.es",
        usuario: "AVC",
        documento: "1026594364",
        edad: 23,
        activo: true,
        hijos: ["pepe", "frijo", "anita"],
        password: "pepeelhijofav"

    },
    {
        id: 2,
        nombre: "Amira",
        apellido: "Candela",
        correo: "candela-amira@gmail.com",
        usuario: "amira46",
        documento: "83220592",
        edad: 46,
        activo: false,
        password: "123456"

    }
]
if (localStorage.getItem("base_datos") == null) {
    localStorage.setItem("base_datos", JSON.stringify(baseDatos))
    console.log("base_datos")
}
let btnLoginForm = document.querySelector("#btnLogin")
btnLoginForm.addEventListener("click", () => {
    let userFormLoging = document.querySelector("#userLogin").value
    let passFormLoging = document.querySelector("#passLogin").value
    let prueba = localStorage.getItem("base_datos")
    prueba = JSON.parse(prueba)
    prueba.forEach((usuarioBD,indiceDelArray) => {
        
        if (usuarioBD.correo == userFormLoging || usuarioBD.usuario == userFormLoging) {
            
            if (usuarioBD.password == passFormLoging) {
                
                sessionStorage.setItem("posicionBD", indiceDelArray)
                console.log(indiceDelArray)
            }
        }
    });
})



// prueba.forEach((usuario) => {
//     usuario.hijos.forEach(hijos => {
//         console.log(hijos)
//     })
// });
// function vistaLogin(color){
//     let form=document.querySelector("#formLogin")
//     form.classList.add(color)
// }

// vistaLogin("bg-dark")