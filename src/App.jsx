import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DataProvider } from './context/DataContext'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import AdminPage from './pages/AdminPage'

export default function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/admin/*" element={<AdminPage />} />
          <Route
            path="/*"
            element={
              <>
                <Navbar />
                <HomePage />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  )
}
