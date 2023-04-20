import React from 'react'
import { About, Footer, Header, Skills, Testimonial, Work, WorkProjects } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {
  return (
    <div className='app'>
       <Navbar />
       <Header />
       <About />
       <Skills />
       {/* <Work /> */}
       <WorkProjects />
       {/* <Testimonial />  */}
       <Footer />
    </div>
  )
}

export default App
