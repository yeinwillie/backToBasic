import { useState, useEffect } from "react";

// Se separa el fetching en un custom hook, el nombre del cual es use mas lo que se va a hacer, para componetizarlo

export function useFetch(url) {
  //ESTADO  (HOOK UseState)
  // UseState es un hook que permite a los componentes funcionales tener estados
  // El estado va a contener la data (que viene de la peticion, inicialmente este en null) en data
  // El setData es una funcion del hook que permite actualizar el valor del estado (data) al ser invocada

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [controller , setController] = useState(null);

  //UseEfect (HOOK UseEffect)
  // useEffect es otro hook de react que nos permite hacer acciones posterior al renderizado del componente por primera vez
  // y posteriormente cada vez que se reinicia en caso de requerirlo
  // cuando al hook useEffect le pasamos el segundo argumento un [] vacio, se ejecuta una unica vez al montar el componente
  // en este caso se usa una sola vez para hacer la peticion a la API
  // porque use Effect debe tener dentro una CB?
  // para que se pueda ejecutar como efecto secundario al renderiazado del componente, es decir, la peticion fetch
  // no afecta al renderizado del componente, por ello es un efecto secundarios
  // el componente se renderiza dos veces?
  //Si, la primera muestra la pagina y depues la muestra con los datos que trae de la peticion

  useEffect(() => {
    const abortController = new AbortController();
    setController(abortController);
    setLoading(true);
    fetch(url, { signal: abortController.signal })
      .then((Response) => Response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        if (error.name === 'AbortError') {
            console.log('Request Cancelled');
        }   else{
            setError(error);
        }
        
      })
      .finally(() => setLoading(false));

    return () => abortController.abort();
  }, []);

  const handlerCancelRequest = () =>{
    if (controller){
        controller.abort();
        setError('Request Cancelled')
    }
    
    
  }
  // Fetch (FUNCION DE JS)
  // Es una funcion de JS y nodeJS, que esta presente en el navegador y permite hacer solicitudes HTTP a un red
  // Devuelve una promesa que se completa cuando el servidor o API responde correctamente o no
  // La promesa devuelve un objeto response con detalle del estado de la solicitur
  // la promesa tiene metodos para acceder a la respuesta en formato json u otro

  //ecplicacion del fetch
  // la funccion fectch recibe la url a la cual recibe la peticion
  // una vez que se resuelve la peticion, usa el metodo .then para convertir la respuesta en un json usando una funcion CB
  // una vez resuelto usa denuevo .then para guardar la data en el estado usando setData

  // como .then toma la data de de la respuesta ?
  // la devolucion de la peticion fetch trae un objeto repose que lo toma la CB del primer .then y con json la convierte
  // en formato que pueda guardarse en data
  // que es en si el metodo .then?
  // es una promesa que permite encadenar CB.

  return { data, loading, error, handlerCancelRequest };

  // el return se devuelve un objeto ya que luego mientras crece es mas facil destructurarlo que un array
}

//Nota
// el loading es para mostrar el estado de carga , se utiliza .finally(()=>setLoading(false)); para que al final de todas
// las promesas se cambie el estado del loading a false y asi no se vuelva a utilizar

// el error se maneja con el metodo .catch de esta manera .catch((error)=>{setError(error)}) y lo mostramos con un li
// lo ideal seria mostrarlo con un tostyfy


// const abortController = new abortController(); es una funcion del navegador (creo), que permite junto al useEffect
// evitar que se realice la peticion en caso de que el usuario cierre la pestaña, asi se evita fuga de memoria innecesaria

//{ signal: abortController.signal } nos permite enviar al fecth una señal que nos permite identificarla y en nuestro caso
// abortarla

//return () => abortController.abort(); es una funcion de limpieza del useEffect que nos permite retornar una funcion 
// la funcion abort() se ejecuta cuando el componente se destruye, elimina los setlistener, setinterval, timeout

// codigo para el abort solo cuando el usuario cierra la pagina  (probar por que lo hice solo con el boton)

// useEffect(() => {
//     const abortController = new AbortController();

//     setLoading(true);
//     fetch(url, { signal: abortController.signal })
//       .then((Response) => Response.json())
//       .then((data) => {
//         setData(data);
//       })
//       .catch((error) => {

//             setError(error);
        
        
//       })
//       .finally(() => setLoading(false));

//       return () => abortController.abort();
//   }, []);


//   return { data, loading, error };