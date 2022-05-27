let producto = {
    nombre: "jugo de naranja",
    categoria: "jugos",
    precio: 8500,
    distribuidor : {
        empresa : "Hit SAS",
        dirección: "calle 123 #123",
        repartidores: {
            repartidor1:{
                nombre: "Camilo",
                apellido: "Suarez",
                Codigo: "123456789",
                telefono: "4596873",
            },
        repartidor2:{
                nombre: "Paulo",
                apellido: "Gonzales",
                Codigo: "1234585789",
                telefono: "4585413",
            }
        }
    }
}
console.log(producto.distribuidor)

class Carrito{
    constructor(){
        this.productos = []
    }

    agregarProducto(producto_info){
        this.productos.push(producto_info)
    }
    obtenerProductos(){
        return this.productos
    }
}

let claseCarrito= new Carrito()
claseCarrito.agregarProducto(producto)
claseCarrito.agregarProducto({nombre: "cocacola",precio: 3000})