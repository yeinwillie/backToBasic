function getSuspenderOw (promise){
    let status = 'pending';
    let response;

    const suspender = promise.then(
        (res) => {
            status = 'success';
            response = res;
            console.log("Success:", res);
        },
        (res) => {
            status = 'error';
            response = err;
            console.log("Error:", err);
        }

    );

    const read = () =>{   // se coloca una funcion anonima para que maneje la asincronia, cada vez que cambie 
                          // el estado de la promesa fetch se pueda leer el estatus y enviarlo por read
        switch (status) {  // se utiliza un switch en vez de ternario porque este ultimo no trabaja directamente con throw
            case "pending":
                throw suspender;  // vuelve a llamar a suspender e intenta resolver de nuevo la promesa
            case "error":         // debe ser throw porque es lo que espera el suspender, si se coloca return se rompe la logica
                throw response; // throw igual para que lo maneje como error el suspense
            default: 
                return response; // return para el caso exitoso, semanticamente correcto, sino lo peudes manejar como error u otro
        }
    };
    return { read };  // permite encapsular mas data, es buena practica, pero pendiente que ahora esta contenido en 
                    // apiDataOW.read() y no solo en apiDataOW().

};


export function renderAsYouFetchOW(url){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'fc8d9df1camshc9ecc9604c7cef3p1d6cefjsn6fcfeb773d61',
            'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
        }
    };

    
    const promise =
     fetch(url, options)  // el fetch se guarda en la promesa para que se resuelva en getSuspenderOw
    .then((response) => response.json())
    .then(data =>  
       
        data);

    return getSuspenderOw(promise);  // se envia la promesa armada

}


