import React from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import RegistrationForm from './components/RegistrationForm/RegistrationForm'
import Slider from './components/Slider/Slider'
import { SliderProvider } from './components/Slider/SliderContext'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <section id="registration" className="section">
        <div className="container">
          <h2>Регистрация</h2>
          <RegistrationForm />
        </div>
      </section>
      <section id="gallery" className="section">
        <div className="container">
          <h2>Галерея</h2>
          <SliderProvider>
            <Slider />
          </SliderProvider>
        </div>
      </section>
    </div>
  )
}

export default App