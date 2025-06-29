import React, { useEffect, useState } from 'react'
import './Hero.css'

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToRegistration = () => {
    const element = document.getElementById('registration')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero">
      <div className="hero__bg-gradient"></div>
      <div 
        className="hero__floating-circle hero__floating-circle--1"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
        }}
      ></div>
      <div 
        className="hero__floating-circle hero__floating-circle--2"
        style={{
          transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`
        }}
      ></div>
      <div 
        className="hero__floating-circle hero__floating-circle--3"
        style={{
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
        }}
      ></div>
      
      <div className="hero__container">
        <div className={`hero__content ${isVisible ? 'hero__content--visible' : ''}`}>
          <h1 className="hero__title">
            <span className="hero__title-line">Добро пожаловать</span>
            <span className="hero__title-line hero__title-line--gradient">в будущее веба</span>
          </h1>
          
          <p className="hero__description">
            Создавайте невероятные пользовательские интерфейсы с современными технологиями 
            React, TypeScript и анимациями нового поколения
          </p>
          
          <div className="hero__buttons">
            <button 
              className="hero__btn hero__btn--primary"
              onClick={scrollToRegistration}
            >
              Начать путешествие
              <span className="hero__btn-arrow">→</span>
            </button>
            
            <button className="hero__btn hero__btn--secondary">
              Узнать больше
            </button>
          </div>
        </div>
        
        <div className={`hero__visual ${isVisible ? 'hero__visual--visible' : ''}`}>
          <div className="hero__card hero__card--1">
            <div className="hero__card-content">
              <div className="hero__card-icon">⚡</div>
              <h3>Быстро</h3>
              <p>Молниеносная загрузка</p>
            </div>
          </div>
          
          <div className="hero__card hero__card--2">
            <div className="hero__card-content">
              <div className="hero__card-icon">🎨</div>
              <h3>Красиво</h3>
              <p>Современный дизайн</p>
            </div>
          </div>
          
          <div className="hero__card hero__card--3">
            <div className="hero__card-content">
              <div className="hero__card-icon">🚀</div>
              <h3>Мощно</h3>
              <p>Передовые технологии</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero