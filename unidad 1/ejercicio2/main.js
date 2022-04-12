let alumno1 = {
    nombre: "Maria",
    apellidos: "Antonieta",
    edad: 17
}

let alumno2 = {
    nombre: "Juan",
    apellidos: "Penas",
    edad: 23,
    matricula: "02320678"
}

let alumno3 = {
    nombre: "Alberto",
    apellidos: "Jacinto",
    edad: 27,
}


let array = [alumno1,alumno2,alumno3]

let arraynew = array.map((item,index) =>{

    return(

        {nombreCompleto: item.nombre + " " +item.apellidos,mayordeEdad: item.edad >= 18 ? true :false}
        
        );

});

console.log(arraynew);
