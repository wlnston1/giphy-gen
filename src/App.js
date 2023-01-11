import './App.css';
import { GiphyFetch } from '@giphy/js-fetch-api'
import {useState} from 'react'

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}


const giphy = new GiphyFetch(process.env.REACT_APP_GIPHY_KEY)
function App() {
  const [results, setResults] = useState([])

  const handleSubmit = (e) => {
    const apiCall = async () => {
      const offsetNumber = getRandomInt(0,50);
      const { data: gifs } = await giphy.trending({ limit: 1, offset: offsetNumber, rating: 'g' })
      setResults(gifs[0].embed_url)
    }
    
    apiCall()

  }
  
  return (
    <div className="App">
      <h1>Animated Text Generator</h1>
      <button className='submit-btn' onClick={handleSubmit}>Submit</button>
      <hr></hr>
      <iframe title='gif-image' src={results} width="480" height="480" frameBorder="0" className="giphy-embed"></iframe>
    </div>
  );
}

export default App;
