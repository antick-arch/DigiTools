import axios from 'axios'
import './App.css'
import Navbar from './components/navbar/Navbar'
import HeroSection from './components/hero/HeroSection';
import Rating from './components/rating/Rating';
import CardDiv from './components/cardSection/CardDiv';
import { Suspense } from 'react';
import { Divide } from 'lucide-react';

const navPromise = axios.get('nav.json');
const cardPromise = axios.get('cardData.json');
function App() {

  return (
    <>
    <header>
      <nav className='shadow-sm'>
        <Suspense fallback={<div className='flex items-center justify-center py-5'><span className="loading loading-infinity loading-xl place-self-center"></span></div>}>
          <Navbar navPromise = {navPromise}></Navbar>
        </Suspense>
      </nav>
      <section>
        <HeroSection></HeroSection>
      </section>
    </header>
    <main>
      <section className='bg-linear-to-r from-primary to-purple-600'>
        <Rating></Rating>
      </section>
      <section>
        <Suspense fallback={<div className='flex items-center justify-center py-5'><span className="loading loading-infinity loading-xl place-self-center"></span></div>}>
          <CardDiv cardPromise={cardPromise}></CardDiv>
        </Suspense>
      </section>
    </main>
    </>
  )
}

export default App
