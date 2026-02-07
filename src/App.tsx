import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { CharacterLanding } from './pages/CharacterLanding'
import { CharacterGuide } from './pages/CharacterGuide'
import { CounterGuide } from './pages/CounterGuide'
import { FeedbackMode } from './components/feedback/FeedbackMode'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<CharacterLanding />} />
        <Route path="/vs/:characterSlug/*" element={<CounterGuide />} />
        <Route path="/:characterSlug/*" element={<CharacterGuide />} />
      </Routes>
      <FeedbackMode />
    </>
  )
}

export default App
