import './App.css';
import { GiphyFetch } from '@giphy/js-fetch-api'
import {useState} from 'react'


const giphy = new GiphyFetch(process.env.REACT_APP_GIPHY_KEY)
function App() {
  const [text, setText] = useState('')
  const [results, setResults] = useState([])
  const [err, setErr] = useState(false)

  const handleInput = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    if(text.length === 0) {
      
      //set error state to true
      setErr(true)
      return
    }

    console.log(text)

    const apiCall = async () => {
      const { data: gifs } = await giphy.trending({ limit: 10, offset: 25, rating: 'g' })
      console.log(gifs)
      setResults(gifs)
    }
    
    apiCall()
    setText('')
    setErr(false)

  }
  
  return (
    <div className="App">
      <h1>Animated Text Generator</h1>
      <h3>Type text into the form and hit submit</h3>
      <button className='submit-btn' onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
