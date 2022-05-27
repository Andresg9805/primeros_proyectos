
var btnSuma = document.querySelector("#sumar")
btnSuma.addEventListener("click", () => {
    let num1 = document.querySelector("#num1").value
    let num2 = document.querySelector("#num2").value
    let cardSection = document.querySelector("#card_section")
    let suma
    suma = parseInt(num1) + parseInt(num2)
    console.log(suma)
    cardSection.innerHTML +=
        `
    <div class="col bg-success">
        <h3>La suma es</h3>
        <h3>"${suma}"</h3>
    </div>
    `

})
var btnRestar = document.querySelector("#restar")
btnRestar.addEventListener("click", () => {
    let num1 = document.querySelector("#num1").value
    let num2 = document.querySelector("#num2").value
    let cardSection = document.querySelector("#card_section")
    let resta
    resta = parseInt(num1) - parseInt(num2)
    if (resta < 0) {
        resta = resta * (-1)
        console.log(resta)
        cardSection.innerHTML +=
        `
        <div class="col bg-danger">
            <h3>La resta es</h3>
            <h3>"${resta}"</h3>
        </div>
        `

        
    } else {
        resta
        console.log(resta)
        cardSection.innerHTML +=
        `
        <div class="col bg-danger">
            <h3>La resta es</h3>
            <h3>"${resta}"</h3>
        </div>
        `
    }

})
var btnDiv = document.querySelector("#dividir")
btnDiv.addEventListener("click", () => {
    let num1 = document.querySelector("#num1").value
    let num2 = document.querySelector("#num2").value
    let division
    division = parseInt(num1) / parseInt(num2)
    console.log(division)
})
