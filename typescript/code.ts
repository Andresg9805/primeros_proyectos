//intalación typescript
//npm i typescript -g o npm install typescript -g
//tsc -w para que no tengamos que estar guardando los cambios
//lo compila automaticamente
//ctrl+c para que deje seguir utilizando el proceso


console.log ("hola mundo con TS")
console.log("pepe")

var texto: string ="esto es un texto"
let numero: number = 23
var vino: boolean = true||false
var todo: any = "texto"
var soloArrays: any[]=["texto",true,3]
var stringSoloArray: string[]=["hola","mi","nombre"]

var numberSoloArray: number[]=[1,5,6,7]
var booleanSoloArray:boolean[]=[true,false,false,true]

var estructuraArray: [string,boolean,number]
estructuraArray=["hola",true,3]


function suma(num1:number,num2:number):number//any para no tener problemas con el tipo de dato que se devuelve
{
    return num1+num2
}



let resta=function(num1:number|string):number
{
    return
}

interface Idato
{
    key1:number,
    key2:string
}

function pruebaI(objeto:Idato):any{
    return 
}

