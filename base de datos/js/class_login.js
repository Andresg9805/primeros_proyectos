class Login {
    usuario = ''
    correo = ''
    contrasena = ''

    constructor(usuario, contrasena) {
        this.usuario = usuario
        constructor(correo, contrasena); {
            this.correo = correo
            this.contrasena = contrasena
        }

        validarCorreo(); {
            let BD = localStorage.getItem("dataBase")
            BD = JSON.parse(BD)
            let existe = false
            let posicion = 0
            for (const dataPersona of BD) {
                if (dataPersona.correo == this.usuario) {
                    if (dataPersona.correo == this.correo) {
                        existe = true
                    }
                    if (!existe) {
                        posicion++
                    }
                }
                return posicion
            }
            validarUsuario();
            {
                let login = false
                let BD = localStorage.getItem("dataBase")
                BD = JSON.parse(BD)
                let existe_user = this.validarCorreo()
                console.log(BD[existe_user])
                if (existe_user < BD.length) {
                    if (BD[existe_user].pass == this.contrasena) {
                        login = true
                    }
                }
                if (!login) {
                    return Swal.fire({
                        icon: 'error',
                        title: 'Los datos ingresados no concuerdan',
                        text: 'Vuelva a intentarlo'
                    })
                } else {
                    window.location.href = "index.html";
                }

                this.lolo()
                return login
            }

            lolo();
            {
                console.log("wololo")
            }
        }
    }
}