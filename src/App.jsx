
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import EntryPage from './pages/EntryPage'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<EntryPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  )
}

export default App
