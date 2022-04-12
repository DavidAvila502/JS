/*Ejercicio 1 unidad II
  Ejercicio con promesas
*/


let some_promise =  () => {

    return new Promise((resolve, reject) => {
        console.log("Verificando tarjeta del cliente")

        if (true) {
            setTimeout(() => {
                resolve('Datos del cliente correctos')              
            }, 2000)

        } else {
            reject('Fondos insuficientes');
        }


    })
}



some_promise()
    .then(resp => console.log(resp))
    .then(() => console.log('Tome su dinero por favor'))
    .catch(err => console.error(err))