function getSuspender(promise) {
  let status = "pending";
  let response;

  const suspender = promise.then(
    (res) => {
      status = "success";
      response = res;
    },
    (err) => {
      status = "error";
      response = err;
    }
  );

  const read = () => {
    switch (status) {
      case "pending":
        throw suspender;
      case "error":
        throw response;
      default: 
        return response;
    }
  };
  return { read };
}

export function renderAsYouFetch(url) {
  const promise = fetch(url)
    .then((response) => response.json())
    .then((data) => data);
    

  return getSuspender(promise);
}


// explicaicion del codigo

// la funcion renderAsYouFetch crea la promesa que no es mas que el fetch que es una promesa, a la cual se recibe la respuesta 
// y se transforma en json. Para no usar asincronia se para la promesa a la funcion getSuspender, esta funcion tiene una variable
// status que maneja la condicion de la promesa y una variable para la respuesta ára cuando se tenga la respuesta. esta funcion
// tambien resuelve la promesa en suspender, si hay algun error se maneja en esta y se guarda en la variable respuesta, adicionalmente
// se tiene la funcion read que verifica el estado de la promesa para devolver el suspense (componente que hace esperar la respuesta)
// o la respuesta una vez que se tenga esta.

// en app.jsx

// se llama afuera de la funcion al fetch y se guarda en apiData, que no guarda la data sino que estaria en apiData.read
//se llama el <Suspense fallback={<div>Loading... </div>}> que tiene un parametro fallback que funciona cuando algo sale mal en la peticion y se debe esperar (seria mi spinner)
// el suspense engloba la parte del codigo que va a renderizar la data del fecth