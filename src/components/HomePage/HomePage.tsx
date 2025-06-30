import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './HomePage.css'

const HomePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
      }
    }
  }

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
      }
    }
  }

  return (
    <div className="home-page">
      <motion.div 
        className="hero-section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="floating-shapes">
          <motion.div 
            className="shape shape-1"
            variants={floatingVariants}
            animate="animate"
          />
          <motion.div 
            className="shape shape-2"
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: '1s' }}
          />
          <motion.div 
            className="shape shape-3"
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: '2s' }}
          />
        </motion.div>

        <motion.h1 
          className="hero-title"
          variants={itemVariants}
        >
          Добро пожаловать в наше приложение
        </motion.h1>

        <motion.p 
          className="hero-subtitle"
          variants={itemVariants}
        >
          Современное веб-приложение с красивыми анимациями и удобным интерфейсом
        </motion.p>

        <motion.div 
          className="hero-buttons"
          variants={itemVariants}
        >
          <motion.div
            variants={pulseVariants}
            animate="animate"
          >
            <Link to="/register" className="btn btn-primary">
              Регистрация
            </Link>
          </motion.div>
          
          <motion.button 
            className="btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Узнать больше
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.section 
        className="features-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <h2>Наши возможности</h2>
        <div className="features-grid">
          <motion.div 
            className="feature-card"
            whileHover={{ scale: 1.05, rotateY: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="feature-icon">🚀</div>
            <h3>Быстрая загрузка</h3>
            <p>Оптимизированная производительность для лучшего пользовательского опыта</p>
          </motion.div>

          <motion.div 
            className="feature-card"
            whileHover={{ scale: 1.05, rotateY: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="feature-icon">🎨</div>
            <h3>Красивый дизайн</h3>
            <p>Современный интерфейс с плавными анимациями и переходами</p>
          </motion.div>

          <motion.div 
            className="feature-card"
            whileHover={{ scale: 1.05, rotateY: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="feature-icon">🔒</div>
            <h3>Безопасность</h3>
            <p>Надежная защита данных и современные стандарты безопасности</p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default HomePage