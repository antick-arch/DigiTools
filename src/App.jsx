import axios from 'axios'
import './App.css'
import Navbar from './components/navbar/Navbar'
import HeroSection from './components/hero/HeroSection';
import Rating from './components/rating/Rating';

const navPromise = axios.get('nav.json');
function App() {

  return (
    <>
    <header>
      <nav className='shadow-sm'>
        <Navbar navPromise = {navPromise}></Navbar>
      </nav>
      <section>
        <HeroSection></HeroSection>
      </section>
    </header>
    <main>
      <section className='bg-linear-to-r from-primary to-purple-600'>
        <Rating></Rating>
      </section>
    </main>
    </>
  )
}

export default App
