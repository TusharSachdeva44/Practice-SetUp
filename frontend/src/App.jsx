import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
    .then((response) => {
      setJokes(response.data);
    })
    .catch(error => {
      console.log(error);
    })
  })

  return (
    <>
      <h1>Jokes</h1>
      {jokes.map((joke, index) => {
        return (
          <div>
            <h2>{joke.id}. {joke.title}</h2>
            <p>{joke.joke}</p>
          </div>
        )
      })}
    </>
  )
}

export default App
