import './App.css';
import {useState} from 'react';
import axios from 'axios';


function App() {

  const [info, setInfo] = useState('')
  const [apiDetails, setApiDetails] = useState([])
  const [num, setNum] = useState(0)

  const submitHandler = (e) => {
    e.preventDefault();

    axios.get(`https://swapi.dev/api/${info}/${num}`)
    .then((results) => {
      console.log(results)
      return setApiDetails([results.data])
    }).catch(error => {
      console.log(error)
    })
  }

  return (
    <div className="App">
        <form onSubmit={submitHandler}>
          <label>Search for: </label>
          <select onChange={(e) => setInfo(e.target.value)} id='swapi'>
            <option></option>
            <option>planets</option>
            <option>people</option>
            <option>species</option>
            <option>starships</option>
          </select>
          <label id='spacer'>ID: </label>
          <input type='number' onChange={(e) => setNum(e.target.value)}/>
          <button>Search</button>
        </form>
        <div>
        {
      apiDetails.map((details) => {
        return <div id='details-column'>
          <ul className='details-column'>
            <li>Name: {details.name}</li>
            <li>Films: {details.films.length}</li>
            <li>Height: {details.height}</li>
            <li>Mass: {details.mass}</li>
            <li>Created: {details.created}</li>
            <li>Population: {details.name}</li>
          </ul></div>
      })
        }
        </div>
    </div>
  );
}

export default App;
