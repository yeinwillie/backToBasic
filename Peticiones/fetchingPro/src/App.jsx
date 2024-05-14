import { useState, useEffect } from 'react'
import './App.css'

function App() {
          //ESTADO  (HOOK UseState)
   // UseState es un hook que permite a los componentes funcionales tener estados
  // El estado va a contener la data (que viene de la peticion, inicialmente este en null) en data
  // El setData es una funcion del hook que permite actualizar el valor del estado (data) al ser invocada 
 
  const [data, setData] = useState(null);

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

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((Response)=>Response.json())
    .then((data)=>setData(data));

  }, [])

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

  return (
    <>
      <div className='App'> 

    <h1>Fetch like a PRO</h1>
      </div>

    </>
  )
}

export default App
