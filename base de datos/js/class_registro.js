class Registro extends Login {
    nombre = ''
    ciudad = ''
    edad = ''
    correo = ''
    usuario = ''
    tyc = ''
    contrasena = ''

    constructor(usuario, contrasena, nombre, ciudad, correo, tyc) {
        this.usuario = usuario
        constructor(correo, contrasena, nombre, edad, tyc); {
            super(correo)
            this.contrasena = contrasena
            this.nombre = nombre
            this.ciudad = ciudad
            this.edad = edad
            this.correo = correo
            this.tyc = tyc

        }
        validar_nvo_us();
        {

            validar_nvo_us() ;{
                let pos_usuario = this.validarCorreo()
                return pos_usuario
            }



            registroUsuarioBD(data); {
                let dataUsuarios = []
                let BDUsuarios = localStorage.getItem("dataBase")
                BDUsuarios = JSON.parse(BDUsuarios)
                console.log(BDUsuarios)
                dataUsuarios.push(BDUsuarios)
                dataUsuarios.push(data)
                localStorage.setItem("dataBase", JSON.stringify(dataUsuarios))

            }

        }
    }
}