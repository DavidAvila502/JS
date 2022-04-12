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
/*Solo nos interesa extraer la primera pagina para acceder a la propiedad count
 que contiene el numero total de pokemones en la API  */

const first_page = await get_data_api("https://pokeapi.co/api/v2/pokemon/");

let number_total_pokemons = first_page.count;

/*Ahora que tenemos el numero de pokemones , vamos a traer otro json 
pero esta vez desde el primer pokemon hasta el ultimo en lugar de los primeros 20 en el paso anterior */

const all_pokemons = await get_data_api("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=" + 100 + "")

/*Luego de tener un json con todos los pokemones debemos extrar sus urls*/

let urls_all_pokemons = all_pokemons.results.map((result_index) => result_index.url);

/*Se creara un array con promesas para posteriormente resolverlas*/
let array_promises = []
urls_all_pokemons.forEach(url => array_promises.push(get_data_api(url)));

/* En esta parte resolvemos las promesas una a una y con el json del pokemon obtenido
    recorremos las propiedades held_items y version_details , para evaluar el nombre 
    de la version, y la rareza, para posteriormente guardar el nombre del pokemon y la rareza
    obteniendo asi un arreglo de objetos con la propiedades nombre: , rareza: ,array desordenado
    el cual ordenaremos posteriormente.
*/
let catch_pokemons = []

for (let i = 0; i < array_promises.length; i++) {

    let data_actual_pokemon = await Promise.resolve(array_promises[i]);

    if (data_actual_pokemon.held_items) {

        data_actual_pokemon.held_items.forEach((held_index) => {

            held_index.version_details.forEach((details_index) => {

                if (details_index.version.name === "pearl") {

                    catch_pokemons.push({ name: data_actual_pokemon.name, rareza: details_index.rarity });
                }
            });

        })
    }

}

/*Ordenamos el array final con una funcion especial para ordenar nuestros objetos y
 haciendo uso de la funcion sort*/

let ordenar_objetos = (a, b) => {
    if (a.rareza < b.rareza) {
        return (-1);
    }
    if (a.rareza > b.rareza) {

        return (1);

    }
}

let order_pokemons = catch_pokemons.sort(ordenar_objetos)

/* Mostramos los pokemones atrapados en nuestro array */

console.log(order_pokemons)







