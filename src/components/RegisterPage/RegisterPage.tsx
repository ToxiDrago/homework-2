import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './RegisterPage.css'

interface FormData {
  name: string
  email: string
  password: string
}

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log('Данные формы:', data)
    alert('Регистрация успешна! Данные выведены в консоль.')
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="register-page">
      <motion.div 
        className="register-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="register-header" variants={itemVariants}>
          <Link to="/" className="back-link">← Назад на главную</Link>
          <h1>Регистрация</h1>
          <p>Создайте свой аккаунт для начала работы</p>
        </motion.div>

        <motion.form 
          className="register-form"
          onSubmit={handleSubmit(onSubmit)}
          variants={itemVariants}
        >
          <motion.div className="form-group" variants={itemVariants}>
            <label htmlFor="name">Имя</label>
            <input
              id="name"
              type="text"
              className={errors.name ? 'error' : ''}
              placeholder="Введите ваше имя"
              {...register('name', {
                required: 'Имя обязательно для заполнения',
                minLength: {
                  value: 2,
                  message: 'Имя должно содержать минимум 2 символа'
                }
              })}
            />
            {errors.name && (
              <motion.span 
                className="error-message"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {errors.name.message}
              </motion.span>
            )}
          </motion.div>

          <motion.div className="form-group" variants={itemVariants}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className={errors.email ? 'error' : ''}
              placeholder="Введите ваш email"
              {...register('email', {
                required: 'Email обязателен для заполнения',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Введите корректный email адрес'
                }
              })}
            />
            {errors.email && (
              <motion.span 
                className="error-message"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {errors.email.message}
              </motion.span>
            )}
          </motion.div>

          <motion.div className="form-group" variants={itemVariants}>
            <label htmlFor="password">Пароль</label>
            <input
              id="password"
              type="password"
              className={errors.password ? 'error' : ''}
              placeholder="Введите пароль"
              {...register('password', {
                required: 'Пароль обязателен для заполнения',
                minLength: {
                  value: 6,
                  message: 'Пароль должен содержать минимум 6 символов'
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                  message: 'Пароль должен содержать строчные и заглавные буквы, а также цифры'
                }
              })}
            />
            {errors.password && (
              <motion.span 
                className="error-message"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {errors.password.message}
              </motion.span>
            )}
          </motion.div>

          <motion.button
            type="submit"
            className="submit-btn"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Зарегистрироваться
          </motion.button>
        </motion.form>

        <motion.div className="register-footer" variants={itemVariants}>
          <p>Уже есть аккаунт? <a href="#login">Войти</a></p>
        </motion.div>
      </motion.div>

      <div className="decorative-shapes">
        <motion.div 
          className="deco-shape deco-1"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="deco-shape deco-2"
          animate={{
            rotate: [360, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </div>
  )
}

export default RegisterPage