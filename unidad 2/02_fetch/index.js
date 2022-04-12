/*
    Programa de tarea 2 fetch
*/
import fetch from "node-fetch";

let getDataApi = async( url ) =>{

  let data;

    try{
        let respuesta = await fetch( url );

        data = await respuesta.json();

        return( data )

    }catch( error ){
        console.log( "Ha ocurrido un error..." );

        return( 'No recibimos una respuesta...' )
    }
    
}

let json_response = await getDataApi( "https://services8.arcgis.com/7rTEsmPVkVyyRlIk/arcgis/rest/services/mueent2_edad65/FeatureServer/1/query?where=1%3D1&outFields=*&outSR=4326&f=json" );


console.log( json_response );