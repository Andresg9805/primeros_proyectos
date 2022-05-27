function mensajeCarrito(precio = 0) {
    Swal.fire({
        title: 'Deseas agregar este producto al carrito de compras',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Agregar',
        denyButtonText: `No agregar`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            if (localStorage.getItem("valor_total") != null) {
                let valor_usuario = localStorage.getItem("valor_total")
                valor_usuario = parseInt(valor_usuario) + parseInt(precio)
                localStorage.setItem("valor_total", valor_usuario)
            } else {
                localStorage.setItem("valor_total", precio)

            }
            Swal.fire('Producto agregado!', '', 'success')
        } else if (result.isDenied) {
            Swal.fire('Producto cancelado', '', 'info')
        }
    })

}

function total_compra() {
    var precio = (localStorage.getItem("valor_total"))
    Swal.fire({
        icon: 'info',
        title: 'El valor a pagar es',
        text: precio,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Finalizar pedido'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                {
                    icon: 'success',
                    title: 'Pedido completado!',
                }
            )
            localStorage.clear()
        }
    })
}
