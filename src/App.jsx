import axios from 'axios'
import './App.css'
import Navbar from './components/navbar/Navbar'

const navPromise = axios.get('nav.json');
function App() {

  return (
    <>
    <header>
      <nav>
        <Navbar navPromise = {navPromise}></Navbar>
      </nav>
    </header>
    </>
  )
}

export default App
