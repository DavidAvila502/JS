import { blastoise } from "./blastoise.js";


//Parte 1 (habilidades de blastoise) 20P

let habilidades = blastoise.abilities

let habilidades_encontradas = []

habilidades.map((item, index) => {

    habilidades_encontradas.push(item.ability.name);

});

console.log("\nLAS HABILIDADES DE BLASTOISE SON: \n", habilidades_encontradas);



//Parte 2 listado de movimientos aprendidos solo por level-up (80P)


let movimientos = blastoise.moves

let movimientos_encontrados = []


movimientos.map((moves, index) => {


    moves.version_group_details.map((vgroup, index) => {

        if (vgroup.move_learn_method.name == "level-up") {

            if (movimientos_encontrados.indexOf(moves.move.name) < 0) {

                movimientos_encontrados.push(moves.move.name);

            }

        }


    });

});

console.log("LOS MOVIMIENTOS APRENDIDOS CON level-up DE BLASTOISE SON: \n", movimientos_encontrados)
