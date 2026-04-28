import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import AdminLogin from '../components/admin/AdminLogin'
import AdminLayout from '../components/admin/AdminLayout'
import DashboardOverview from '../components/admin/DashboardOverview'
import BlogManager from '../components/admin/BlogManager'
import ProjectManager from '../components/admin/ProjectManager'
import ExperienceManager from '../components/admin/ExperienceManager'
import CompetitionManager from '../components/admin/CompetitionManager'

export default function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(false)

  if (!loggedIn) {
    return <AdminLogin onLogin={setLoggedIn} />
  }

  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route index element={<DashboardOverview />} />
        <Route path="blogs" element={<BlogManager />} />
        <Route path="projects" element={<ProjectManager />} />
        <Route path="experiences" element={<ExperienceManager />} />
        <Route path="competitions" element={<CompetitionManager />} />
      </Route>
    </Routes>
  )
}
