// let url_api = "https://pokeapi.co/api/v2/pokemon";
// let api = fetch(url_api);

// try{
//     api.then(res => res.json())
//         .then(data => {
//             console.log(data)
//             let div_section = document.querySelector("#pagina")
//             let data_results = data.results
//             data_results.foreach(pokemon => {
//                 div_section.innerHTML +=
//                     console.log(data_results.results.name)
//                         `<div class="col">
//                              <div class="card">
//                                  <img src="" class="card-img-top" alt="${data_results.results}">
//                              <div class="card-body">
//                                  <h5 class="card-title">${pokemon.results.name}</h5>
//                                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                              </div>
//                          </div>
//             </div>`
//             });
//         })

// }
// catch{
//     console.log(error)
// }
function consumoApi(url_api="https://pokeapi.co/api/v2/pokemon"){
    let digitUser= document.querySelector("#buscador")
    url_api= `${url_api}/${digitUser}`
}
let url_api = "https://pokeapi.co/api/v2/pokemon";
let api = fetch(url_api);
let buscador=`${url_api}/`

try {
    api.then(res => res.json())
        .then(pokedex => {
            // console.log(pokedex)
            let api2 = fetch(pokemon.url)
                api2.then(res2 => res2.json())
                    .then(pokemon => {
                        
                        console.log(pokemon)
                        if (pokemon.types.length == 2) {
                            var nombresTipo = ''
                            var contador = 0
                            var separador=","
                            var descripcion=""
                            pokemon.types.forEach(tipo => {
                                contador++
                                if(contador<2)
                                {
                                    nombresTipo+=tipo.type.name+separador
                                
                                }  else{
                                    nombresTipo+=tipo.type.name
                                }descripcion="Los elementos son: "+nombresTipo
                            });
                        }else{
                            var nombresTipo=pokemon.types[0].type.name
                            descripcion="El elemento del pokemon es: "+nombresTipo
                        }console.log(nombresTipo)
                                let div_section = document.querySelector("#pagina")
                                div_section.innerHTML +=
                                    `
                            <div class="col">
                                <div class="card">
                                    <img src="${pokemon.sprites.other[["official-artwork"]].front_default}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">"${pokemon.name}"</h5>
                                        <ul class="list-group">
                                        <li class="list-group-item">${descripcion}</li>
                                        <li class="list-group-item">"El pokemon tiene un peso de: ${pokemon.weight} libras"</li>
                                        <li class="list-group-item">"Habilidades : ${pokemon.abilities}"</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            `
                    })

            pokedex.results.forEach(pokemon => {
                
            });
        })

}
catch {
    console.log(error)
}

