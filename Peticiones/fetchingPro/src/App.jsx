import { Suspense } from 'react';
import { useFetch } from './fetching/useFetch'
import { renderAsYouFetch } from './fetching/renderAsYouFetch.js';
import {renderAsYouFetchOW} from './fetching/renderAsYouFetchOW.js';
import './App.css'

const apiData = renderAsYouFetch('https://jsonplaceholder.typicode.com/users');

// fetching Open Weather

const apiDataOW = renderAsYouFetchOW('https://open-weather13.p.rapidapi.com/city/landon/EN');


function App() {
//const {data, loading, error, handlerCancelRequest} = useFetch('https://jsonplaceholder.typicode.com/users');
//console.log(data)

const data = apiData.read();
//console.log(data)

const dataOW = apiDataOW.read(); // se llama read como un metodo(read()) porque se esta retornando {read} en renderAsYouFetchOW
  return (
    <>
      <div className='App'> 

    <h1>Fetch like a PRO</h1>
    <Suspense fallback={<div>Loading... </div>}>
      <ul className='card'>
        {data?.map((user) =>(
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      </Suspense>

      <h2>Open weather</h2>
      <Suspense fallback={<div> Loading... </div>}>
        <label htmlFor="">Ciudad: {dataOW?.name}</label>
      </Suspense>

    {/* codigo para useFetch (descomentar import useFetch y el codigo comentado abajo) */}
    {/* <button onClick={handlerCancelRequest}>Cancel Request</button>
    <div className='card'>
      <ul>
      {error && <li>error: {error}</li> }
        {loading && <li>Loading...</li> }
        {data?.map((user)=>(
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div> */}
      </div>

    </>
  )
}

export default App


// notas:
// en data?.map el ? es un operador de encadenamiento opcional, que permite realizar el mapeo solo si data no es null

// {error && <li>error: {error}</li> }es un renderizado condicional con cortocircuito