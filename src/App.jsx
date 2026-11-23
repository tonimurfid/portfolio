import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col">
      <Navbar />
      <HomePage />
    </div>
  )
}
