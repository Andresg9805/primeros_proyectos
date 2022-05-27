let url_api = "https://rickandmortyapi.com/api/character";
let api = fetch(url_api);

api.then(res => res.json())
    .then(data => {
        console.log(data)
        let div_contenido = document.querySelector("#contenido")
        let data_results = data.results
        console.log(data_results)
        data_results.forEach(personaje => {
            div_contenido.innerHTML += `
    <div class="col">
        <div class="card">
            <img src="${personaje.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">"${personaje.name}"</h5>
                <ul class="list-group">
                    <li class="list-group-item">"${traducir_palabra(personaje.status, "estado")}"</li>
                    <li class="list-group-item">"${traducir_palabra(personaje.gender, "genero")}"</li>
                    <li class="list-group-item">"${traducir_palabra(personaje.species,"especie")}"</li>
                        <button type="button" class="btn btn-primary" onclick="modal_data_personaje('${personaje.episode}')"">
                            Episodios
                        </button>  
                </ul>
            </div>
        </div>
    </div>
        `
        });
    })

function traducir_palabra(palabra, tipo) {
    if (tipo == "estado") {
        switch (palabra) {
            case "Dead":
                palabra = "Muerto"
                break;
            case " Alive":
                palabra = "Vivo"
                break;
            default:
                palabra = "Desconocido"
                break
        }
        return palabra
    }
    else if (tipo == "genero") {
        switch (palabra) {
            case "Male":
                palabra = "Masculino"
                break;
            case "Female":
                palabra = "Femenino"
                break;
            default:
                palabra = "No definido"
                break
        }
        return palabra
    }
    else if (tipo == "especie") {
        switch (palabra) {
            case "Human":
                palabra = "Humano"
            break;
        }
        return palabra
    }

}

function modal_data_personaje(array_episodios) {

    document.querySelector("#modal_button").innerHTML = `
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Launch demo modal
</button>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                ...
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div>
    </div>
</div>
    `
}
function buscador()
{

}

