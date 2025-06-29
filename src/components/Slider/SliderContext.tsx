import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface SliderContextType {
  currentSlide: number
  setCurrentSlide: (index: number) => void
  isAutoplay: boolean
  setAutoplayContext: (autoplay: boolean) => void
  direction: 'next' | 'prev'
  totalSlides: number
  setTotalSlides: (total: number) => void
  goToNext: () => void
  goToPrev: () => void
}

const SliderContext = createContext<SliderContextType | undefined>(undefined)

interface SliderProviderProps {
  children: ReactNode
  autoplayInterval?: number
}

export const SliderProvider: React.FC<SliderProviderProps> = ({ 
  children, 
  autoplayInterval = 4000 
}) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')
  const [totalSlides, setTotalSlides] = useState(0)

  const setAutoplayContext = (autoplay: boolean) => {
    setIsAutoplay(autoplay)
  }

  const getDirection = (newIndex: number, currentIndex: number): 'next' | 'prev' => {
    if (newIndex > currentIndex) {
      return 'next'
    } else if (newIndex < currentIndex) {
      return 'prev'
    } else if (newIndex === 0 && currentIndex === totalSlides - 1) {
      return 'next'
    } else if (newIndex === totalSlides - 1 && currentIndex === 0) {
      return 'prev'
    }
    return 'next'
  }

  const goToNext = () => {
    const nextIndex = (currentSlide + 1) % totalSlides
    setDirection(getDirection(nextIndex, currentSlide))
    setCurrentSlide(nextIndex)
  }

  const goToPrev = () => {
    const prevIndex = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1
    setDirection(getDirection(prevIndex, currentSlide))
    setCurrentSlide(prevIndex)
  }

  const setCurrentSlideWithDirection = (index: number) => {
    setDirection(getDirection(index, currentSlide))
    setCurrentSlide(index)
  }

  // Автопрокрутка
  useEffect(() => {
    if (!isAutoplay || totalSlides <= 1) return

    const interval = setInterval(() => {
      goToNext()
    }, autoplayInterval)

    return () => clearInterval(interval)
  }, [currentSlide, isAutoplay, totalSlides, autoplayInterval])

  const value: SliderContextType = {
    currentSlide,
    setCurrentSlide: setCurrentSlideWithDirection,
    isAutoplay,
    setAutoplayContext,
    direction,
    totalSlides,
    setTotalSlides,
    goToNext,
    goToPrev
  }

  return (
    <SliderContext.Provider value={value}>
      {children}
    </SliderContext.Provider>
  )
}

export const useSlider = (): SliderContextType => {
  const context = useContext(SliderContext)
  if (!context) {
    throw new Error('useSlider must be used within a SliderProvider')
  }
  return context
}