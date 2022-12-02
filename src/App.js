import React from 'react'

import { Header, Footer, Intro, Features} from './containers';
import { Navbar, } from './components';
import './app.css';

const App = () => {
  return (
    <div className="App">

        <div className='gradient__bg'>
          <Navbar />
          <Header />
        </div>

        <Intro /> 


        {/* <Brand />

        <Features />
        <Possiblity />
        <CTA />
        <Blog />
         */}

      <Footer />
        
    </div>
  )
}

export default App