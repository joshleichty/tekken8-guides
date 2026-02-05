import { Routes, Route } from 'react-router-dom'
import { CharacterLanding } from './pages/CharacterLanding'
import { CharacterGuide } from './pages/CharacterGuide'
import { FeedbackMode } from './components/feedback/FeedbackMode'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CharacterLanding />} />
        <Route path="/:characterSlug/*" element={<CharacterGuide />} />
      </Routes>
      <FeedbackMode />
    </>
  )
}

export default App
