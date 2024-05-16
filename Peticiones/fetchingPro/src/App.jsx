import { useFetch } from './fetching/useFetch'
import './App.css'

function App() {
  
const {data, loading, error, handlerCancelRequest} = useFetch('https://jsonplaceholder.typicode.com/users');
//console.log(data)

  return (
    <>
      <div className='App'> 

    <h1>Fetch like a PRO</h1>
    <button onClick={handlerCancelRequest}>Cancel Request</button>
    <div className='card'>
      <ul>
      {error && <li>error: {error}</li> }
        {loading && <li>Loading...</li> }
        {data?.map((user)=>(
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
      </div>

    </>
  )
}

export default App


// notas:
// en data?.map el ? es un operador de encadenamiento opcional, que permite realizar el mapeo solo si data no es null