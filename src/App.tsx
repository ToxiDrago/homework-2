import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import RegisterPage from './components/RegisterPage/RegisterPage'
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  )
}

export default App