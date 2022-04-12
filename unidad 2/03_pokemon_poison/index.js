import fetch from "node-fetch";
/* Funcion para consumir API y retornar un json */
let get_data_api = async (url) => {
    try {
        let data = await fetch(url);
        let data_json = await data.json();

        return (data_json);
    } catch {

        return ("Api no encontrada...");
    }
}


let catch_pokemons = [];

let get_poison_pokemons = async (url) => {

    let all_pokemones_json = await get_data_api(url);
    let next = all_pokemones_json.next;

    all_pokemones_json.results.forEach(async (results_index) => {

        let name_actual_pokemon = results_index.name;
        let actual_pokemon_json = await get_data_api(results_index.url);

        actual_pokemon_json.types.forEach((types_index) => {

            if (types_index.type.name === "poison") {
                catch_pokemons.push(name_actual_pokemon);

            }
        });

    });

    if (next) {
        get_poison_pokemons(next);
    } else {
        setTimeout(() => {

            console.log(catch_pokemons);
            console.log("Los pokemones tipo poison son: ", catch_pokemons.length)
            // console.log( catch_pokemons.filter((item)=>item[0] === "a"));

        }, 10000);
    }
}


get_poison_pokemons("https://pokeapi.co/api/v2/pokemon/")
console.log("Cargando pokemones poison...")
