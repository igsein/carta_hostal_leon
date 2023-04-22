import React,{useEffect} from 'react'
import Menu from './pages/Menu'
import Home from './pages/Home'
const App = () => {

  useEffect(() => {
    window.location = "https://igsein.github.io/carta-hleon/";

  }, [ ])
  
  return (
    <div>{/* <Home /> */}</div>
  )
}

export default App